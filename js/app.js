const weekView = document.getElementById("week-view");
const dayView = document.getElementById("day-view");
const lightbox = document.getElementById("lightbox");

let pendingSessionDate = null;

function countExercises(day) {
  return day.sections.reduce((sum, section) => sum + section.items.length, 0);
}

function youtubeSearch(name) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${name} exercise demonstration`)}`;
}

function mediaThumb(item) {
  if (item.gif) {
    return `<img class="thumb-gif" src="${item.gif}" alt="${item.name} demonstration" loading="lazy">`;
  }
  return `<div class="thumb-fallback">Video</div>`;
}

function mediaMain(item) {
  const parts = [];
  if (item.gif) {
    parts.push(`<img class="demo-gif" src="${item.gif}" alt="${item.name} demonstration">`);
  }
  if (item.youtube && item.youtube !== "search") {
    parts.push(`
      <div class="video-wrap">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${item.youtube}?rel=0"
          title="${item.name} video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    `);
  }
  if (!item.gif && (!item.youtube || item.youtube === "search")) {
    parts.push(`
      <a class="video-link" href="${youtubeSearch(item.name)}" target="_blank" rel="noreferrer">
        Watch a short demo on YouTube →
      </a>
    `);
  }
  return parts.join("");
}

function renderWeek() {
  weekView.innerHTML = `
    <header class="masthead">
      <div>
        <p class="kicker">Personnel training</p>
        <h1>${WEEK.title}</h1>
        <p class="lede">${WEEK.subtitle}</p>
      </div>
      <div class="week-chip">${WEEK.days.length} training days</div>
    </header>
    <div class="day-grid">
      ${WEEK.days
        .map(
          (day) => `
        <button class="day-card" type="button" data-day="${day.id}">
          <span class="swatch" style="background:${day.accent}"></span>
          <div>
            <p class="kicker">${day.short}</p>
            <h2>${day.label}</h2>
          </div>
          <p>${day.focus}</p>
          <p class="count">${countExercises(day)} movements</p>
        </button>
      `
        )
        .join("")}
    </div>
    <p class="credit">Tap a day, then tap a movement to watch how it’s done.</p>
  `;

  bindNav(weekView);
  weekView.querySelectorAll("[data-day]").forEach((button) => {
    button.addEventListener("click", () => showScreen("day", button.dataset.day));
  });
}

function openDay(id) {
  const day = WEEK.days.find((item) => item.id === id);
  if (!day) return;

  dayView.innerHTML = `
    <button class="back" type="button" id="back-week">← Week overview</button>
    <header class="day-hero">
      <div>
        <p class="kicker" style="color:${day.accent}">${day.label}</p>
        <h1>${day.focus}</h1>
      </div>
      <div class="week-chip">${countExercises(day)} exercises</div>
    </header>
    ${day.sections
      .map(
        (section) => `
      <section class="section">
        <div class="section-head">
          <h3>${section.name}</h3>
          ${section.note ? `<p class="section-note">${section.note}</p>` : ""}
        </div>
        <div class="exercise-list">
          ${section.items
            .map(
              (item, index) => `
            <button class="exercise" type="button" data-section="${section.name}" data-index="${index}">
              ${mediaThumb(item)}
              <div>
                <h4>${item.name}</h4>
                <p class="rx">${item.rx}</p>
              </div>
              <span class="open-hint">Watch movement</span>
            </button>
          `
            )
            .join("")}
        </div>
      </section>
    `
      )
      .join("")}
  `;

  document.getElementById("week-view").classList.remove("is-open");
  document.getElementById("logbook-view").classList.remove("is-open");
  document.getElementById("watch-view").classList.remove("is-open");
  document.getElementById("food-view").classList.remove("is-open");
  document.getElementById("members-view").classList.remove("is-open");
  dayView.classList.add("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.getElementById("back-week").addEventListener("click", () => showScreen("week"));

  dayView.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = day.sections.find((s) => s.name === button.dataset.section);
      const item = section.items[Number(button.dataset.index)];
      openLightbox(item);
    });
  });
}

function openLightbox(item) {
  const steps = (item.steps || []).map((step) => `<li>${step}</li>`).join("");
  const extraNote = item.note ? `<p class="section-note">${item.note}</p>` : "";
  const shown = item.shownAs ? `<p class="shown-as">Animation: ${item.shownAs}</p>` : "";
  const ytLink =
    item.youtube === "search" || item.gif
      ? `<p><a class="video-link" href="${youtubeSearch(item.name)}" target="_blank" rel="noreferrer">More videos of this movement on YouTube →</a></p>`
      : "";

  document.getElementById("lightbox-art").innerHTML = mediaMain(item);
  document.getElementById("lightbox-title").textContent = item.name;
  document.getElementById("lightbox-rx").textContent = item.rx;
  document.getElementById("lightbox-note").innerHTML = `
    ${shown}
    ${extraNote}
    ${steps ? `<ol class="how-to">${steps}</ol>` : ""}
    ${ytLink}
  `;
  lightbox.hidden = false;
  lightbox.classList.add("is-open");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.hidden = true;
  document.getElementById("lightbox-art").innerHTML = "";
}

document.getElementById("close-lightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

renderWeek();
weekView.classList.add("is-open");
