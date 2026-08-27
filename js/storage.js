const STORE_KEY = "personnel-training-log-v1";

function emptyStore() {
  return { sessions: {}, watchWorkouts: [], food: {} };
}

let storeCache = emptyStore();
let saveTimer = null;

function loadStore() {
  return storeCache;
}

function saveStore(store) {
  storeCache = {
    sessions: store.sessions || {},
    watchWorkouts: store.watchWorkouts || [],
    food: store.food || {},
  };
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    fetch("/api/data", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(storeCache),
    }).catch(() => {});
  }, 300);
}

async function hydrateStore() {
  const response = await fetch("/api/data", { credentials: "include" });
  if (!response.ok) {
    storeCache = emptyStore();
    return;
  }
  const parsed = await response.json();
  storeCache = {
    sessions: parsed.sessions || {},
    watchWorkouts: parsed.watchWorkouts || [],
    food: parsed.food || {},
  };
}

function sessionKey(dayId, date) {
  return `${date}__${dayId}`;
}

function getSession(dayId, date) {
  const store = loadStore();
  return store.sessions[sessionKey(dayId, date)] || null;
}

function upsertSession(dayId, date, patch) {
  const store = loadStore();
  const key = sessionKey(dayId, date);
  store.sessions[key] = {
    dayId,
    date,
    caloriesBurned: "",
    ...(store.sessions[key] || {}),
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  saveStore(store);
  return store.sessions[key];
}

function getFoodDay(date) {
  const store = loadStore();
  return (
    store.food[date] || {
      morning: [],
      afternoon: [],
      postWorkout: [],
      dinner: [],
    }
  );
}

function saveFoodDay(date, day) {
  const store = loadStore();
  store.food[date] = day;
  saveStore(store);
}

function addWatchWorkouts(workouts) {
  const store = loadStore();
  const existing = new Set(store.watchWorkouts.map((item) => item.id));
  let added = 0;
  workouts.forEach((workout) => {
    if (!workout.id || existing.has(workout.id)) return;
    store.watchWorkouts.push(workout);
    existing.add(workout.id);
    added += 1;
  });
  store.watchWorkouts.sort((a, b) => String(b.start).localeCompare(String(a.start)));
  saveStore(store);
  return added;
}

function qty(value) {
  if (value == null) return null;
  if (typeof value === "number") return value;
  if (typeof value === "object" && value.qty != null) return Number(value.qty);
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function hashId(parts) {
  return parts
    .join("|")
    .replace(/\s+/g, " ")
    .slice(0, 180);
}

function normalizeWatch(raw) {
  const name = raw.name || raw.workoutName || raw.workoutType || raw.type || "Workout";
  const start = raw.start || raw.startDate || raw.date || raw.creationDate || "";
  const end = raw.end || raw.endDate || "";
  let durationSec = qty(raw.duration);
  if (durationSec != null && durationSec < 400 && raw.durationUnit === "min") {
    durationSec *= 60;
  }
  if (durationSec == null && start && end) {
    const a = Date.parse(String(start).replace(" ", "T"));
    const b = Date.parse(String(end).replace(" ", "T"));
    if (Number.isFinite(a) && Number.isFinite(b) && b > a) durationSec = (b - a) / 1000;
  }
  const kcal =
    qty(raw.activeEnergy) ||
    qty(raw.activeEnergyBurned) ||
    qty(raw.totalEnergy) ||
    qty(raw.totalEnergyBurned) ||
    qty(raw.energy);
  const avgHr =
    qty(raw.avgHeartRate) ||
    qty(raw.heartRate?.avg) ||
    qty(raw.heartRate?.average) ||
    qty(raw.heartRateAverage);
  const maxHr = qty(raw.maxHeartRate) || qty(raw.heartRate?.max);
  const minHr = qty(raw.minHeartRate) || qty(raw.heartRate?.min);
  const source = raw.source || raw.sourceName || raw.device || "Apple Watch";
  const id = String(raw.id || hashId([name, start, durationSec || "", kcal || ""]));
  return {
    id,
    name,
    start: String(start),
    end: String(end),
    durationSec: durationSec != null ? Math.round(durationSec) : null,
    kcal: kcal != null ? Math.round(kcal) : null,
    avgHr: avgHr != null ? Math.round(avgHr) : null,
    maxHr: maxHr != null ? Math.round(maxHr) : null,
    minHr: minHr != null ? Math.round(minHr) : null,
    source,
  };
}

function collectWorkouts(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.workouts)) return payload.workouts;
  if (Array.isArray(payload.data?.workouts)) return payload.data.workouts;
  if (payload.name || payload.workoutName || payload.workoutType) return [payload];
  return [];
}

function parseHealthXml(text) {
  const workouts = [];
  const regex = /<Workout\b([^>]*)>/g;
  let match;
  while ((match = regex.exec(text))) {
    const attrs = match[1];
    const attr = (name) => {
      const found = attrs.match(new RegExp(`${name}="([^"]*)"`));
      return found ? found[1] : "";
    };
    const type = attr("workoutActivityType").replace("HKWorkoutActivityType", "");
    const duration = Number(attr("duration"));
    const unit = attr("durationUnit");
    workouts.push({
      id: attr("id") || hashId([type, attr("startDate"), duration]),
      name: type || "Workout",
      start: attr("startDate"),
      end: attr("endDate"),
      duration: unit === "min" ? duration * 60 : duration,
      totalEnergyBurned: Number(attr("totalEnergyBurned")) || null,
      source: attr("sourceName") || "Apple Health",
    });
  }
  return workouts;
}

function importWatchPayload(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  if (trimmed.startsWith("<") || trimmed.includes("<Workout")) {
    return addWatchWorkouts(parseHealthXml(trimmed).map(normalizeWatch));
  }
  const json = JSON.parse(trimmed);
  return addWatchWorkouts(collectWorkouts(json).map(normalizeWatch));
}

function exportStore() {
  return JSON.stringify(loadStore(), null, 2);
}

function todayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60000).toISOString().slice(0, 10);
}

function formatDuration(seconds) {
  if (seconds == null) return "—";
  const m = Math.round(seconds / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m`;
}
