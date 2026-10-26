'use strict';

const categories = ['cake', 'pastry', 'bakery', 'drink', 'dessert'];


const emptyMessages = {
  cake: 'Блюдо не выбрано',
  pastry: 'Блюдо не выбрано',
  bakery: 'Блюдо не выбрано',
  drink: 'Напиток не выбран',
  dessert: 'Блюдо не выбрано'
};


const selected = {
  cake: null,
  pastry: null,
  bakery: null,
  drink: null,
  dessert: null
};

const nothingBlock = document.querySelector('#nothing-selected');
const totalBlock = document.querySelector('#order-total');
const totalPrice = document.querySelector('#total-price');

function updateOrder() {
  let total = 0;
  let hasSelected = false;


  categories.forEach(function (category) {
    const block = document.querySelector(`[data-summary="${category}"]`);
    const item = block.querySelector('.order-item');
    const input = document.querySelector(`#${category}-input`);
    const dish = selected[category];

    if (dish) {
      item.textContent = `${dish.name} ${dish.price}₽`;
      input.value = dish.keyword;
      total += dish.price;
      hasSelected = true;
    } else {
      item.textContent = emptyMessages[category];
      input.value = '';
    }
  });


  categories.forEach(function (category) {
    const block = document.querySelector(`[data-summary="${category}"]`);
    block.style.display = hasSelected ? 'block' : 'none';
  });

  nothingBlock.style.display = hasSelected ? 'none' : 'block';
  totalBlock.style.display = hasSelected ? 'block' : 'none';


  totalPrice.textContent = `${total}₽`;
}


function onAddClick(event) {
  const card = event.target.closest('.dish-card');
  const keyword = card.dataset.dish;

  
  const dish = dishes.find(function (item) {
    return item.keyword === keyword;
  });

  selected[dish.category] = dish;


  const sameCategoryCards = document.querySelectorAll(
    `.dishes[data-category="${dish.category}"] .dish-card`
  );
  sameCategoryCards.forEach(function (item) {
    item.classList.remove('selected');
  });
  card.classList.add('selected');

  updateOrder();
}

// Карточки создаются после ответа сервера, поэтому на кнопки нельзя
// повесить обработчики сразу. Слушаем клики на всём документе
// (делегирование событий) и реагируем только на кнопки в карточках.
document.addEventListener('click', function (event) {
  const button = event.target.closest('.dish-card button');

  if (button) {
    onAddClick(event);
  }
});


document.querySelector('.order-form').addEventListener('reset', function () {
  categories.forEach(function (category) {
    selected[category] = null;
  });
  document.querySelectorAll('.dish-card').forEach(function (card) {
    card.classList.remove('selected');
  });
  
  setTimeout(updateOrder, 0);
});

updateOrder();