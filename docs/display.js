'use strict';

function createDishCard(dish) {
  const card = document.createElement('div');
  card.classList.add('dish-card');
  card.dataset.dish = dish.keyword;
  card.dataset.kind = dish.kind;

  const img = document.createElement('img');
  img.src = dish.image;
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
  document.querySelectorAll('.dishes[data-category]').forEach(function (container) {
    const category = container.dataset.category;

    dishes
      .filter(function (dish) {
        return dish.category === category;
      })
      .sort(function (a, b) {
        return a.name.localeCompare(b.name, 'ru');
      })
      .forEach(function (dish) {
        container.append(createDishCard(dish));
      });
  });
}
