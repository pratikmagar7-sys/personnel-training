function renderNav() {
  return "";
}

function bindNav(root) {
  root.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.go));
  });
  const logoutBtn = root.querySelector("#logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", () => logout());
}

function showScreen(name, dayId) {
  ["week-view", "day-view", "logbook-view", "watch-view", "food-view", "members-view"].forEach((id) => {
    document.getElementById(id).classList.remove("is-open");
  });
  if (name === "week") {
    renderWeek();
    document.getElementById("week-view").classList.add("is-open");
  } else if (name === "day") {
    openDay(dayId);
  } else if (name === "food") {
    renderFood();
    document.getElementById("food-view").classList.add("is-open");
  } else if (name === "logbook") {
    renderLogbook();
    document.getElementById("logbook-view").classList.add("is-open");
  } else if (name === "watch") {
    renderWatch();
    document.getElementById("watch-view").classList.add("is-open");
  } else if (name === "members") {
    renderMembers();
    document.getElementById("members-view").classList.add("is-open");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLogbook() {
  const store = loadStore();
  const sessions = Object.values(store.sessions).sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const view = document.getElementById("logbook-view");
  view.innerHTML = `
    ${renderNav("logbook")}
    <header class="masthead">
      <div>
        <p class="kicker">Training log</p>
        <h1>Everything recorded</h1>
        <p class="lede">Saved on the server for this login. Download a backup anytime.</p>
      </div>
      <button class="week-chip" type="button" id="export-log">Download backup</button>
    </header>
    <div class="log-columns">
      <section class="paper-card">
        <h3>Program sessions</h3>
        ${
          sessions.length
            ? sessions
                .map((session) => {
                  const day = WEEK.days.find((item) => item.id === session.dayId);
                  return `
                    <button class="log-row" type="button" data-open-day="${session.dayId}" data-date="${session.date}">
                      <strong>${session.date}</strong>
                      <span>${day ? day.label : session.dayId} · ${day ? day.focus : ""}</span>
                      <span class="rx">${session.caloriesBurned ? `${session.caloriesBurned} kcal burned` : "No calories logged"}</span>
                    </button>
                  `;
                })
                .join("")
            : `<p class="section-note">No sessions yet. Open a day, set the date, and enter calories burned.</p>`
        }
      </section>
      <section class="paper-card">
        <h3>Watch workouts</h3>
        ${watchListHtml(store.watchWorkouts)}
      </section>
    </div>
    <section class="paper-card">
      <h3>Food by day</h3>
      ${foodLogbookHtml(store.food)}
    </section>
  `;
  bindNav(view);
  document.getElementById("export-log").addEventListener("click", downloadBackup);
  view.querySelectorAll("[data-open-day]").forEach((button) => {
    button.addEventListener("click", () => {
      pendingSessionDate = button.dataset.date;
      showScreen("day", button.dataset.openDay);
    });
  });
}

function foodLogbookHtml(food) {
  const days = Object.keys(food || {}).sort().reverse();
  if (!days.length) return `<p class="section-note">No food logged yet.</p>`;
  return days
    .map((date) => {
      const day = food[date];
      return `<article class="log-row static"><strong>${date}</strong><span class="rx">${dayFoodTotal(day)} kcal eaten</span></article>`;
    })
    .join("");
}

function watchListHtml(workouts) {
  if (!workouts.length) {
    return `<p class="section-note">No Watch data yet. Import a Health file or add a workout on the Apple Watch tab.</p>`;
  }
  return workouts
    .map(
      (workout) => `
      <article class="log-row static">
        <strong>${workout.name}</strong>
        <span>${workout.start || "Unknown time"}</span>
        <span class="rx">${formatDuration(workout.durationSec)} · ${workout.kcal != null ? `${workout.kcal} kcal` : "kcal —"} · HR ${workout.avgHr || "—"}</span>
      </article>
    `
    )
    .join("");
}

function renderWatch() {
  const store = loadStore();
  const view = document.getElementById("watch-view");
  view.innerHTML = `
    ${renderNav("watch")}
    <header class="masthead">
      <div>
        <p class="kicker">Apple Watch</p>
        <h1>Sync & log</h1>
        <p class="lede">Safari cannot read the Watch by itself. Import Health data, run a Shortcut after training, or type the session in.</p>
      </div>
    </header>
    <div class="log-columns">
      <section class="paper-card">
        <h3>1. Import from Health</h3>
        <p class="section-note">Works with Health Auto Export JSON, a workouts JSON dump, or Apple’s export.xml (Workout entries only).</p>
        <label class="file-btn">
          Choose file
          <input id="watch-file" type="file" accept=".json,.xml,.txt,application/json,text/xml">
        </label>
        <textarea id="watch-paste" rows="6" placeholder='Paste JSON here, or use the file picker.'></textarea>
        <button class="primary" type="button" id="import-watch">Import</button>
        <p class="section-note" id="import-status"></p>
      </section>
      <section class="paper-card">
        <h3>2. Log a Watch session</h3>
        <form id="watch-form" class="watch-form">
          <label>Type <input name="name" required placeholder="Traditional Strength Training"></label>
          <label>Date <input name="date" type="date" required></label>
          <label>Minutes <input name="minutes" type="number" min="1" step="1" required></label>
          <label>Active kcal <input name="kcal" type="number" min="0" step="1"></label>
          <label>Avg HR <input name="avgHr" type="number" min="0" step="1"></label>
          <label>Max HR <input name="maxHr" type="number" min="0" step="1"></label>
          <button class="primary" type="submit">Save workout</button>
        </form>
      </section>
    </div>
    <section class="paper-card shortcut-card">
      <h3>3. iPhone Shortcut (after a workout)</h3>
      <ol class="how-to">
        <li>On iPhone, open Shortcuts → Automation → Create Personal Automation → <strong>Apple Watch Workout</strong> → ends.</li>
        <li>Add <strong>Find Health Samples Where</strong> Body Measurement / Workout, limit 1, sort by start date latest.</li>
        <li>Or skip Health samples and fill duration from the workout result, then <strong>Open URLs</strong>:</li>
      </ol>
      <code class="shortcut-url" id="shortcut-url"></code>
      <p class="section-note">Replace the values. Opening that link on this site saves the workout into your logbook. Add this page to your iPhone Home Screen so the link stays on-device.</p>
    </section>
    <section class="paper-card">
      <h3>Imported workouts</h3>
      ${watchListHtml(store.watchWorkouts)}
    </section>
  `;
  bindNav(view);
  view.querySelector("#watch-form [name=date]").value = todayISO();
  const origin = location.href.split("#")[0];
  document.getElementById("shortcut-url").textContent =
    `${origin}#watch?name=Strength&minutes=45&kcal=320&hr=140&date=${todayISO()}`;

  document.getElementById("import-watch").addEventListener("click", () => {
    const status = document.getElementById("import-status");
    const file = document.getElementById("watch-file").files[0];
    const pasted = document.getElementById("watch-paste").value;
    const finish = (text) => {
      try {
        const added = importWatchPayload(text);
        status.textContent = added ? `Imported ${added} new workout${added === 1 ? "" : "s"}.` : "Nothing new — already in the log, or no workouts found.";
        renderWatch();
      } catch (error) {
        status.textContent = `Could not read that file. Use JSON from Health Auto Export, or export.xml. (${error.message})`;
      }
    };
    if (file) {
      file.text().then(finish);
    } else {
      finish(pasted);
    }
  });

  document.getElementById("watch-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const date = data.get("date");
    const minutes = Number(data.get("minutes"));
    addWatchWorkouts([
      normalizeWatch({
        name: data.get("name"),
        start: `${date} 00:00:00`,
        duration: minutes * 60,
        activeEnergy: Number(data.get("kcal")) || null,
        avgHeartRate: Number(data.get("avgHr")) || null,
        maxHeartRate: Number(data.get("maxHr")) || null,
        source: "Manual / Apple Watch",
      }),
    ]);
    renderWatch();
  });
}

function downloadBackup() {
  const blob = new Blob([exportStore()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `personnel-training-log-${todayISO()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function consumeWatchHash() {
  const hash = location.hash || "";
  if (!hash.startsWith("#watch")) return;
  const query = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : "";
  const params = new URLSearchParams(query);
  if (!params.get("name") && !params.get("minutes")) {
    showScreen("watch");
    return;
  }
  const date = params.get("date") || todayISO();
  const minutes = Number(params.get("minutes") || 0);
  addWatchWorkouts([
    normalizeWatch({
      name: params.get("name") || "Apple Watch workout",
      start: `${date} 00:00:00`,
      duration: minutes * 60,
      activeEnergy: Number(params.get("kcal")) || null,
      avgHeartRate: Number(params.get("hr") || params.get("avgHr")) || null,
      source: "Shortcut",
    }),
  ]);
  history.replaceState(null, "", location.pathname + location.search);
  showScreen("watch");
}

async function renderMembers() {
  const view = document.getElementById("members-view");
  const response = await fetch("/api/members", { credentials: "include" });
  const data = await response.json();
  const members = data.members || [];
  view.innerHTML = `
    ${renderNav("members")}
    <header class="masthead">
      <div>
        <p class="kicker">Household</p>
        <h1>Members</h1>
        <p class="lede">Each person gets their own login and their own food and workout log.</p>
      </div>
    </header>
    <div class="log-columns">
      <section class="paper-card">
        <h3>Profiles</h3>
        ${members
          .map(
            (member) => `
          <article class="log-row static">
            <strong>${member.name}</strong>
            <span>${member.username} · ${member.role}</span>
          </article>
        `
          )
          .join("")}
      </section>
      <section class="paper-card">
        <h3>Add a member</h3>
        <form id="member-form" class="watch-form">
          <label>Name <input name="name" required placeholder="e.g. Aai"></label>
          <label>Username <input name="username" required placeholder="e.g. aai"></label>
          <label>Password <input name="password" type="password" required minlength="4"></label>
          <button class="primary" type="submit">Create profile</button>
          <p class="section-note" id="member-status"></p>
        </form>
      </section>
    </div>
  `;
  bindNav(view);
  document.getElementById("member-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("member-status");
    const form = new FormData(event.target);
    const response = await fetch("/api/members", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        username: form.get("username"),
        password: form.get("password"),
      }),
    });
    const payload = await response.json();
    if (!response.ok) {
      status.textContent = payload.error || "Could not add member";
      return;
    }
    renderMembers();
  });
}
