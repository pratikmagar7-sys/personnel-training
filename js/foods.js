const FOODS = [
  { name: "egg", kcal: 78, serving: "1 large egg" },
  { name: "eggs", kcal: 78, serving: "1 large egg" },
  { name: "boiled egg", kcal: 78, serving: "1 egg" },
  { name: "omelette", kcal: 160, serving: "2-egg omelette" },
  { name: "banana", kcal: 105, serving: "1 medium" },
  { name: "apple", kcal: 95, serving: "1 medium" },
  { name: "orange", kcal: 62, serving: "1 medium" },
  { name: "oats", kcal: 150, serving: "40g dry" },
  { name: "oatmeal", kcal: 150, serving: "1 bowl" },
  { name: "milk", kcal: 122, serving: "1 cup (250ml)" },
  { name: "almond milk", kcal: 40, serving: "1 cup" },
  { name: "coffee", kcal: 5, serving: "black coffee" },
  { name: "tea", kcal: 2, serving: "black tea" },
  { name: "chai", kcal: 80, serving: "1 cup with milk & sugar" },
  { name: "whey", kcal: 120, serving: "1 scoop" },
  { name: "protein shake", kcal: 140, serving: "1 scoop with water" },
  { name: "whey with milk", kcal: 240, serving: "1 scoop with 1 cup milk" },
  { name: "peanut butter", kcal: 190, serving: "2 tbsp" },
  { name: "toast", kcal: 75, serving: "1 slice" },
  { name: "bread", kcal: 75, serving: "1 slice" },
  { name: "roti", kcal: 120, serving: "1 medium" },
  { name: "chapati", kcal: 120, serving: "1 medium" },
  { name: "paratha", kcal: 260, serving: "1" },
  { name: "rice", kcal: 200, serving: "1 cup cooked" },
  { name: "brown rice", kcal: 215, serving: "1 cup cooked" },
  { name: "dal", kcal: 180, serving: "1 bowl" },
  { name: "chicken breast", kcal: 165, serving: "100g cooked" },
  { name: "chicken", kcal: 185, serving: "100g cooked" },
  { name: "grilled chicken", kcal: 165, serving: "100g" },
  { name: "fish", kcal: 140, serving: "100g" },
  { name: "salmon", kcal: 208, serving: "100g" },
  { name: "paneer", kcal: 265, serving: "100g" },
  { name: "tofu", kcal: 80, serving: "100g" },
  { name: "curd", kcal: 98, serving: "1 bowl (200g)" },
  { name: "yogurt", kcal: 100, serving: "1 bowl" },
  { name: "greek yogurt", kcal: 130, serving: "150g" },
  { name: "dahi", kcal: 98, serving: "1 bowl" },
  { name: "idli", kcal: 58, serving: "1" },
  { name: "dosa", kcal: 170, serving: "1 plain" },
  { name: "poha", kcal: 250, serving: "1 plate" },
  { name: "upma", kcal: 220, serving: "1 bowl" },
  { name: "salad", kcal: 80, serving: "1 bowl mixed" },
  { name: "broccoli", kcal: 55, serving: "1 cup" },
  { name: "potato", kcal: 160, serving: "1 medium" },
  { name: "sweet potato", kcal: 112, serving: "1 medium" },
  { name: "almonds", kcal: 160, serving: "20g handful" },
  { name: "cashews", kcal: 155, serving: "20g" },
  { name: "walnuts", kcal: 185, serving: "30g" },
  { name: "dates", kcal: 66, serving: "3 dates" },
  { name: "protein bar", kcal: 200, serving: "1 bar" },
  { name: "creatine", kcal: 0, serving: "5g" },
  { name: "banana shake", kcal: 250, serving: "1 glass" },
  { name: "bhurji", kcal: 220, serving: "2-egg bhurji" },
  { name: "egg bhurji", kcal: 220, serving: "2 eggs" },
  { name: "sambar", kcal: 140, serving: "1 bowl" },
  { name: "sabzi", kcal: 120, serving: "1 bowl mixed veg" },
  { name: "vegetable sabzi", kcal: 120, serving: "1 bowl" },
  { name: "rajma", kcal: 220, serving: "1 bowl" },
  { name: "chole", kcal: 240, serving: "1 bowl" },
  { name: "biryani", kcal: 400, serving: "1 plate" },
  { name: "chicken curry", kcal: 280, serving: "1 bowl" },
  { name: "dal rice", kcal: 350, serving: "1 plate" },
  { name: "roti sabzi", kcal: 280, serving: "2 roti + sabzi" },
  { name: "pasta", kcal: 350, serving: "1 plate" },
  { name: "sandwich", kcal: 300, serving: "1" },
  { name: "burger", kcal: 500, serving: "1" },
  { name: "pizza", kcal: 285, serving: "1 slice" },
  { name: "fries", kcal: 320, serving: "medium" },
  { name: "samosa", kcal: 260, serving: "1" },
  { name: "vada pav", kcal: 290, serving: "1" },
  { name: "maggi", kcal: 310, serving: "1 pack cooked" },
  { name: "coconut water", kcal: 45, serving: "1 glass" },
  { name: "orange juice", kcal: 110, serving: "1 glass" },
  { name: "ghee", kcal: 112, serving: "1 tbsp" },
  { name: "butter", kcal: 102, serving: "1 tbsp" },
  { name: "olive oil", kcal: 119, serving: "1 tbsp" },
  { name: "avocado", kcal: 240, serving: "1 medium" },
  { name: "berries", kcal: 70, serving: "1 cup" },
  { name: "strawberries", kcal: 50, serving: "1 cup" },
  { name: "blueberries", kcal: 85, serving: "1 cup" },
  { name: "spinach", kcal: 25, serving: "1 cup cooked" },
  { name: "dal tadka", kcal: 200, serving: "1 bowl" },
  { name: "moong dal", kcal: 170, serving: "1 bowl" },
  { name: "khichdi", kcal: 280, serving: "1 bowl" },
  { name: "thepla", kcal: 120, serving: "1" },
  { name: "poha with peanuts", kcal: 280, serving: "1 plate" },
  { name: "sprouts", kcal: 90, serving: "1 bowl" },
  { name: "besan chilla", kcal: 180, serving: "1" },
  { name: "paneer tikka", kcal: 280, serving: "6 pieces" },
  { name: "chicken tikka", kcal: 220, serving: "6 pieces" },
  { name: "egg white", kcal: 17, serving: "1" },
  { name: "egg whites", kcal: 17, serving: "1" },
  { name: "soya chunks", kcal: 170, serving: "50g dry cooked" },
  { name: "mutton", kcal: 250, serving: "100g" },
  { name: "prawns", kcal: 99, serving: "100g" },
  { name: "hummus", kcal: 166, serving: "100g" },
  { name: "pita", kcal: 170, serving: "1" },
  { name: "quinoa", kcal: 220, serving: "1 cup cooked" },
  { name: "cornflakes", kcal: 140, serving: "1 bowl with milk extra" },
  { name: "muesli", kcal: 180, serving: "40g" },
  { name: "lassi", kcal: 180, serving: "1 glass" },
  { name: "buttermilk", kcal: 40, serving: "1 glass" },
  { name: "chaas", kcal: 40, serving: "1 glass" },
  { name: "idli sambar", kcal: 250, serving: "3 idli + sambar" },
  { name: "masala dosa", kcal: 350, serving: "1" },
  { name: "uttapam", kcal: 190, serving: "1" },
  { name: "medu vada", kcal: 140, serving: "1" },
];

const MEALS = [
  { id: "morning", label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "postWorkout", label: "Post workout" },
  { id: "dinner", label: "Dinner" },
];

function normalizeFoodName(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function parseFoodQuery(raw) {
  const text = raw.trim();
  const qtyMatch = text.match(/^(\d+(?:\.\d+)?)\s*(x|×)?\s+(.+)$/i);
  if (qtyMatch) {
    return { qty: Number(qtyMatch[1]), name: qtyMatch[3] };
  }
  return { qty: 1, name: text };
}

function localLookup(name) {
  const needle = normalizeFoodName(name);
  if (!needle) return null;
  const exact = FOODS.find((food) => normalizeFoodName(food.name) === needle);
  if (exact) return exact;
  const contains = FOODS.filter(
    (food) => needle.includes(normalizeFoodName(food.name)) || normalizeFoodName(food.name).includes(needle)
  ).sort((a, b) => normalizeFoodName(b.name).length - normalizeFoodName(a.name).length);
  return contains[0] || null;
}

async function usdaLookup(name) {
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&pageSize=1&query=${encodeURIComponent(name)}`;
  const response = await fetch(url);
  if (!response.ok) return null;
  const data = await response.json();
  const food = data.foods && data.foods[0];
  if (!food) return null;
  const energy = (food.foodNutrients || []).find((n) => /energy/i.test(n.nutrientName) && /kcal/i.test(n.unitName || "kcal"));
  const kcal = energy ? Math.round(energy.value) : null;
  if (!kcal) return null;
  return { name: food.description, kcal, serving: "100g (USDA estimate)" };
}

async function estimateFood(raw) {
  const { qty, name } = parseFoodQuery(raw);
  const local = localLookup(name);
  if (local) {
    return {
      name: raw.trim(),
      kcal: Math.round(local.kcal * qty),
      detail: `${qty === 1 ? "" : `${qty} × `}${local.serving}`,
      source: "list",
    };
  }
  try {
    const usda = await usdaLookup(name);
    if (usda) {
      return {
        name: raw.trim(),
        kcal: Math.round(usda.kcal * qty),
        detail: `${qty === 1 ? "" : `${qty} × `}${usda.serving}`,
        source: "usda",
      };
    }
  } catch {
    /* offline */
  }
  return {
    name: raw.trim(),
    kcal: 0,
    detail: "Unknown — tap kcal to type it",
    source: "unknown",
  };
}

function mealTotal(items) {
  return (items || []).reduce((sum, item) => sum + (Number(item.kcal) || 0), 0);
}

function dayFoodTotal(day) {
  return MEALS.reduce((sum, meal) => sum + mealTotal(day[meal.id]), 0);
}

function emptyFoodDay() {
  return { morning: [], afternoon: [], postWorkout: [], dinner: [] };
}
