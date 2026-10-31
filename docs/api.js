'use strict';


const MEALDB_URL = 'https://www.themealdb.com/api/json/v1/1';
const COCKTAILDB_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

let dishes = [];

const PER_SECTION = 6;

const PRICES = {
  cake: [1500, 100],
  pastry: [200, 20],
  bakery: [120, 10],
  drink: [180, 10],
  dessert: [200, 30]
};

const WEIGHTS = {
  cake: '1 кг',
  pastry: '120 г',
  bakery: '100 г',
  drink: '300 мл',
  dessert: '150 г'
};

const KINDS = {
  cake: ['sponge', 'layered', 'fruit'],
  pastry: ['cream', 'cheesecake', 'almond'],
  bakery: ['puff', 'yeast', 'shortcrust'],
  drink: ['cold', 'hot'],
  dessert: ['small', 'medium', 'large']
};

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка ${response.status}`);
  }
  return response.json();
}

function makeDish(category, index, apiId, name, image, prefix) {
  const price = PRICES[category];
  return {
    keyword: `${prefix}-${apiId}`,
    name: name,
    price: price[0] + (Number(apiId) % 10) * price[1],
    category: category,
    count: WEIGHTS[category],
    image: image,
    kind: KINDS[category][index % KINDS[category].length]
  };
}

async function loadDishes() {
  try {
    const results = await Promise.all([
      fetchJson(`${MEALDB_URL}/filter.php?c=Dessert`),
      fetchJson(`${COCKTAILDB_URL}/filter.php?a=Non_Alcoholic`)
    ]);
    const meals = results[0].meals;
    const drinks = results[1].drinks;

    dishes = [];

    ['cake', 'pastry', 'bakery', 'dessert'].forEach(function (category, section) {
      meals
        .slice(section * PER_SECTION, (section + 1) * PER_SECTION)
        .forEach(function (meal, index) {
          dishes.push(makeDish(category, index, meal.idMeal, meal.strMeal, meal.strMealThumb, 'meal'));
        });
    });

    drinks.slice(0, PER_SECTION).forEach(function (drink, index) {
      dishes.push(makeDish('drink', index, drink.idDrink, drink.strDrink, drink.strDrinkThumb, 'drink'));
    });

    dishes.forEach(function (dish, index) {
      dish.id = index + 1;
    });
  } catch (error) {
    console.error(error);
    dishes = [];
    alert('Не удалось загрузить меню. Проверьте подключение к интернету и обновите страницу.');
  }
  return dishes;
}