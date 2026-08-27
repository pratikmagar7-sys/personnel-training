function renderFood() {
  const date = window.foodDate || todayISO();
  window.foodDate = date;
  const day = getFoodDay(date);
  const burned = Object.values(loadStore().sessions)
    .filter((session) => session.date === date)
    .reduce((sum, session) => sum + (Number(session.caloriesBurned) || 0), 0);
  const eaten = dayFoodTotal(day);
  const view = document.getElementById("food-view");
  view.innerHTML = `
    ${renderNav("food")}
    <header class="masthead">
      <div>
        <p class="kicker">Nutrition</p>
        <h1>Food log</h1>
        <p class="lede">Type what you ate. Calories are estimated from a food list, then USDA if needed.</p>
      </div>
      <label class="date-field">Day
        <input id="food-date" type="date" value="${date}">
      </label>
    </header>
    <div class="food-summary paper-card">
      <div><span class="kicker">Eaten</span><strong>${eaten}</strong> kcal</div>
      <div><span class="kicker">Burned (logged)</span><strong>${burned || "—"}</strong> kcal</div>
      <div><span class="kicker">Net</span><strong>${burned ? eaten - burned : eaten}</strong></div>
    </div>
    <div class="meal-grid">
      ${MEALS.map((meal) => mealCard(meal, day[meal.id] || [])).join("")}
    </div>
  `;
  bindNav(view);
  document.getElementById("food-date").addEventListener("change", (event) => {
    window.foodDate = event.target.value;
    renderFood();
  });
  MEALS.forEach((meal) => bindMeal(meal.id));
}

function mealCard(meal, items) {
  const total = mealTotal(items);
  return `
    <section class="paper-card meal-card" data-meal="${meal.id}">
      <div class="section-head">
        <h3>${meal.label}</h3>
        <p class="section-note">${total} kcal</p>
      </div>
      <div class="food-items">
        ${
          items.length
            ? items
                .map(
                  (item, index) => `
            <div class="food-item">
              <div>
                <strong>${item.name}</strong>
                <p class="rx">${item.detail || ""}</p>
              </div>
              <input class="kcal-edit" data-meal="${meal.id}" data-index="${index}" type="number" min="0" value="${item.kcal}">
              <button type="button" class="text-btn" data-remove="${meal.id}" data-index="${index}">Remove</button>
            </div>
          `
                )
                .join("")
            : `<p class="section-note">Nothing logged yet.</p>`
        }
      </div>
      <form class="food-add" data-add="${meal.id}">
        <input name="food" placeholder="e.g. 2 eggs, banana, roti" required>
        <button class="primary" type="submit">Add</button>
      </form>
    </section>
  `;
}

function bindMeal(mealId) {
  const view = document.getElementById("food-view");
  const form = view.querySelector(`[data-add="${mealId}"]`);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = form.querySelector("input[name=food]");
    const parts = input.value
      .split(/,|\n/)
      .map((part) => part.trim())
      .filter(Boolean);
    input.value = "";
    const date = document.getElementById("food-date").value;
    const day = getFoodDay(date);
    const list = day[mealId] ? [...day[mealId]] : [];
    for (const part of parts) {
      list.push(await estimateFood(part));
    }
    day[mealId] = list;
    saveFoodDay(date, day);
    renderFood();
  });

  view.querySelectorAll(`[data-remove="${mealId}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const date = document.getElementById("food-date").value;
      const day = getFoodDay(date);
      const list = [...(day[mealId] || [])];
      list.splice(Number(button.dataset.index), 1);
      day[mealId] = list;
      saveFoodDay(date, day);
      renderFood();
    });
  });

  view.querySelectorAll(`.kcal-edit[data-meal="${mealId}"]`).forEach((input) => {
    input.addEventListener("change", () => {
      const date = document.getElementById("food-date").value;
      const day = getFoodDay(date);
      const list = [...(day[mealId] || [])];
      const index = Number(input.dataset.index);
      if (!list[index]) return;
      list[index] = { ...list[index], kcal: Number(input.value) || 0, source: "manual" };
      day[mealId] = list;
      saveFoodDay(date, day);
      renderFood();
    });
  });
}
