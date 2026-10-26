'use strict';

function createDishCard(dish) {
  const card = document.createElement('div');
  card.classList.add('dish-card');
  card.dataset.dish = dish.keyword;
  card.dataset.kind = dish.kind;

  const img = document.createElement('img');
  img.src = dish.image; // путь к картинке приходит вместе с данными блюда
  img.alt = dish.name;

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = `${dish.price}₽`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = dish.name;

  const weight = document.createElement('p');
  weight.classList.add('weight');
  weight.textContent = dish.count;

  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Добавить';

  card.append(img, price, name, weight, button);
  return card;
}

function displayDishes() {
  const containers = document.querySelectorAll('.dishes[data-category]');

  containers.forEach(function (container) {
    const category = container.dataset.category;

    const categoryDishes = dishes
      .filter(function (dish) {
        return dish.category === category;
      })
      .sort(function (a, b) {
        return a.name.localeCompare(b.name, 'ru');
      });

    categoryDishes.forEach(function (dish) {
      container.append(createDishCard(dish));
    });
  });
}

// Если сервер не ответил, сообщаем об этом в каждой секции
function showLoadError() {
  const containers = document.querySelectorAll('.dishes[data-category]');

  containers.forEach(function (container) {
    const message = document.createElement('p');
    message.classList.add('load-error');
    message.textContent = 'Не удалось загрузить меню. Обновите страницу.';
    container.append(message);
  });
}

// Загружаем блюда и, когда они пришли, выводим на страницу
async function init() {
  try {
    await loadDishes();
    displayDishes();
  } catch (error) {
    console.error(error);
    showLoadError();
  }
}

init();