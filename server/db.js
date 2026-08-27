const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");
const usersFile = path.join(dataDir, "users.json");
const logsDir = path.join(dataDir, "logs");

function ensureDirs() {
  fs.mkdirSync(dataDir, { recursive: true });
  fs.mkdirSync(logsDir, { recursive: true });
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, "[]");
  }
}

function readUsers() {
  ensureDirs();
  return JSON.parse(fs.readFileSync(usersFile, "utf8"));
}

function writeUsers(users) {
  ensureDirs();
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function logPath(userId) {
  return path.join(logsDir, `${userId}.json`);
}

function emptyLog() {
  return { sessions: {}, watchWorkouts: [], food: {} };
}

function readLog(userId) {
  ensureDirs();
  const file = logPath(userId);
  if (!fs.existsSync(file)) return emptyLog();
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
    return {
      sessions: parsed.sessions || {},
      watchWorkouts: parsed.watchWorkouts || [],
      food: parsed.food || {},
    };
  } catch {
    return emptyLog();
  }
}

function writeLog(userId, log) {
  ensureDirs();
  fs.writeFileSync(logPath(userId), JSON.stringify(log, null, 2));
}

module.exports = { readUsers, writeUsers, readLog, writeLog, emptyLog };
