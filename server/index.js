const fs = require("fs");
const path = require("path");
const express = require("express");
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const { readUsers, writeUsers, readLog, writeLog, emptyLog } = require("./db");

function loadEnv() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;
  fs.readFileSync(envPath, "utf8")
    .split("\n")
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const eq = trimmed.indexOf("=");
      if (eq === -1) return;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    });
}

loadEnv();

const PORT = Number(process.env.PORT || 8765);
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "pratikmagar7";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Magar7";
const ADMIN_NAME = process.env.ADMIN_NAME || "Pratik";

function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    role: user.role,
  };
}

function seedAdmin() {
  const users = readUsers();
  if (users.some((user) => user.username === ADMIN_USERNAME)) return;
  users.push({
    id: "u_" + Date.now().toString(36),
    username: ADMIN_USERNAME,
    name: ADMIN_NAME,
    role: "admin",
    passwordHash: bcrypt.hashSync(ADMIN_PASSWORD, 10),
    createdAt: new Date().toISOString(),
  });
  writeUsers(users);
}

function requireAuth(req, res, next) {
  const users = readUsers();
  const user = users.find((item) => item.id === req.session.userId);
  if (!user) {
    res.status(401).json({ error: "Login required" });
    return;
  }
  req.user = user;
  next();
}

seedAdmin();

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(
  cookieSession({
    name: "pt_session",
    keys: [process.env.SESSION_SECRET || "personnel-training-secret"],
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
  })
);

app.get("/api/me", (req, res) => {
  if (!req.session.userId) {
    res.json({ user: null });
    return;
  }
  const user = readUsers().find((item) => item.id === req.session.userId);
  res.json({ user: user ? publicUser(user) : null });
});

app.post("/api/login", (req, res) => {
  const username = String(req.body.username || "").trim();
  const password = String(req.body.password || "");
  const user = readUsers().find((item) => item.username === username);
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    res.status(401).json({ error: "Wrong username or password" });
    return;
  }
  req.session.userId = user.id;
  res.json({ user: publicUser(user) });
});

app.post("/api/logout", (req, res) => {
  req.session = null;
  res.json({ ok: true });
});

app.get("/api/data", requireAuth, (req, res) => {
  res.json(readLog(req.user.id));
});

app.put("/api/data", requireAuth, (req, res) => {
  const incoming = req.body || {};
  writeLog(req.user.id, {
    sessions: incoming.sessions || {},
    watchWorkouts: incoming.watchWorkouts || [],
    food: incoming.food || {},
  });
  res.json({ ok: true });
});

app.get("/api/members", requireAuth, (req, res) => {
  res.json({
    members: readUsers().map(publicUser),
  });
});

app.post("/api/members", requireAuth, (req, res) => {
  if (req.user.role !== "admin") {
    res.status(403).json({ error: "Only the admin profile can add members" });
    return;
  }
  const username = String(req.body.username || "").trim();
  const password = String(req.body.password || "");
  const name = String(req.body.name || username).trim();
  if (!username || password.length < 4) {
    res.status(400).json({ error: "Need a username and a password of at least 4 characters" });
    return;
  }
  const users = readUsers();
  if (users.some((item) => item.username === username)) {
    res.status(409).json({ error: "That username is already used" });
    return;
  }
  const user = {
    id: "u_" + Date.now().toString(36),
    username,
    name,
    role: "member",
    passwordHash: bcrypt.hashSync(password, 10),
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  writeUsers(users);
  writeLog(user.id, emptyLog());
  res.json({ user: publicUser(user) });
});

app.use(express.static(path.join(__dirname, "..")));

app.listen(PORT, () => {
  console.log(`Personnel training running at http://localhost:${PORT}`);
  console.log(`Login as ${ADMIN_USERNAME}`);
});
