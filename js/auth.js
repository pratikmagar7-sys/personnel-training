let currentUser = null;

function showLogin() {
  document.getElementById("login-gate").hidden = false;
  document.querySelector(".app").hidden = true;
}

function showAppShell() {
  document.getElementById("login-gate").hidden = true;
  document.querySelector(".app").hidden = false;
}

async function fetchMe() {
  const response = await fetch("/api/me", { credentials: "include" });
  const data = await response.json();
  currentUser = data.user || null;
  return currentUser;
}

async function login(username, password) {
  const response = await fetch("/api/login", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Login failed");
  currentUser = data.user;
  await hydrateStore();
  showAppShell();
  startApp();
}

async function logout() {
  await fetch("/api/logout", { method: "POST", credentials: "include" });
  currentUser = null;
  storeCache = emptyStore();
  showLogin();
}

async function bootAuth() {
  await fetchMe();
  if (!currentUser) {
    showLogin();
    return;
  }
  await hydrateStore();
  showAppShell();
  startApp();
}

function bindLoginForm() {
  const form = document.getElementById("login-form");
  const error = document.getElementById("login-error");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.textContent = "";
    const data = new FormData(form);
    try {
      await login(String(data.get("username")), String(data.get("password")));
    } catch (err) {
      error.textContent = err.message;
    }
  });
}
