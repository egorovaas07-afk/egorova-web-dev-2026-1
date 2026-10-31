'use strict';


function applyFilter(category, kind) {
  const cards = document.querySelectorAll(
    `.dishes[data-category="${category}"] .dish-card`
  );

  cards.forEach(function (card) {
    const isVisible = kind === null || card.dataset.kind === kind;

    if (isVisible) {
      card.classList.remove('is-hidden');
    } else {
      card.classList.add('is-hidden');
    }
  });
}

function onFilterClick(event) {
  const button = event.target;
  const filters = button.closest('.filters');
  const category = filters.dataset.category;

  const wasActive = button.classList.contains('active');

  filters.querySelectorAll('.filter-btn').forEach(function (item) {
    item.classList.remove('active');
  });

  if (wasActive) {
    applyFilter(category, null);
  } else {
    button.classList.add('active');
    applyFilter(category, button.dataset.kind);
  }
}

document.querySelectorAll('.filter-btn').forEach(function (button) {
  button.addEventListener('click', onFilterClick);
});