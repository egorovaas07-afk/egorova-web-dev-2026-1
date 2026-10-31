'use strict';


const notificationTexts = {
  nothing: 'Ничего не выбрано. Выберите блюда для заказа',
  drink: 'Выберите напиток',
  needPastryOrBakery: 'Выберите пирожное или выпечку',
  needCakeOrPastry: 'Выберите торт или пирожное',
  needPastry: 'Выберите пирожное'
};


function getNotificationText() {
  const hasCake = selected.cake !== null;
  const hasPastry = selected.pastry !== null;
  const hasBakery = selected.bakery !== null;
  const hasDrink = selected.drink !== null;
  const hasDessert = selected.dessert !== null;

  if (!hasCake && !hasPastry && !hasBakery && !hasDrink && !hasDessert) {
    return notificationTexts.nothing;
  }

  const hasBase = hasPastry || (hasCake && hasBakery);

  if (hasBase && hasDrink) {
    return null;
  }

  if (hasBase) {
    return notificationTexts.drink;
  }

  if (hasCake) {
    return notificationTexts.needPastryOrBakery;
  }

  if (hasBakery) {
    return notificationTexts.needCakeOrPastry;
  }

  return notificationTexts.needPastry;
}

function showNotification(text) {
  const oldNotification = document.querySelector('.notification');
  if (oldNotification) {
    oldNotification.remove();
  }

  const notification = document.createElement('div');
  notification.classList.add('notification');

  const message = document.createElement('p');
  message.textContent = text;

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('notification-btn');
  button.textContent = 'Окей';

  button.addEventListener('click', function () {
    notification.remove();
  });

  notification.append(message, button);
  document.body.append(notification);
}

const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('submit', function (event) {
  const text = getNotificationText();

  if (text !== null) {
    event.preventDefault();
    showNotification(text);
    return;
  }

  if (!orderForm.reportValidity()) {
    event.preventDefault();
  }
});