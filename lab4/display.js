'use strict';

function createDishCard(dish) {
  const card = document.createElement('div');
  card.classList.add('dish-card');
  card.dataset.dish = dish.keyword;

  const img = document.createElement('img');
  img.src = `images/${dish.image}.png`;
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

displayDishes();
