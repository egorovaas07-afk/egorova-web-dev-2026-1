'use strict';

// Тексты уведомлений.
// В комментариях — какой текст был в методичке (там суп, главное блюдо, салат).
const notificationTexts = {
  nothing: 'Ничего не выбрано. Выберите блюда для заказа',
  drink: 'Выберите напиток',
  needPastryOrBakery: 'Выберите пирожное или выпечку', // «главное блюдо/салат/стартер»
  needCakeOrPastry: 'Выберите торт или пирожное',      // «суп или главное блюдо»
  needPastry: 'Выберите пирожное'                      // «главное блюдо»
};

// Проверяет состав заказа.
// Возвращает текст уведомления или null, если набор собран правильно.
// Объект selected создан в order.js.
function getNotificationText() {
  const hasCake = selected.cake !== null;       // «суп» из методички
  const hasPastry = selected.pastry !== null;   // «главное блюдо»
  const hasBakery = selected.bakery !== null;   // «салат/стартер»
  const hasDrink = selected.drink !== null;
  const hasDessert = selected.dessert !== null;

  // 1. Не выбрано ничего
  if (!hasCake && !hasPastry && !hasBakery && !hasDrink && !hasDessert) {
    return notificationTexts.nothing;
  }

  // Основа набора собрана: пирожное (само по себе) либо торт + выпечка.
  // Все 5 наборов содержат либо пирожное, либо торт вместе с выпечкой.
  const hasBase = hasPastry || (hasCake && hasBakery);

  // 2. Набор собран полностью (десерт можно добавить к любому набору)
  if (hasBase && hasDrink) {
    return null;
  }

  // 3. Есть всё, кроме напитка
  if (hasBase) {
    return notificationTexts.drink;
  }

  // 4. Выбран торт, но нет пирожного и выпечки
  if (hasCake) {
    return notificationTexts.needPastryOrBakery;
  }

  // 5. Выбрана выпечка, но нет торта и пирожного
  if (hasBakery) {
    return notificationTexts.needCakeOrPastry;
  }

  // 6. Выбраны только напиток и (или) десерт
  return notificationTexts.needPastry;
}

// Создаёт уведомление и добавляет его на страницу
function showNotification(text) {
  // Если уведомление уже открыто, убираем его, чтобы они не копились
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

  // По клику на кнопку уведомление исчезает
  button.addEventListener('click', function () {
    notification.remove();
  });

  notification.append(message, button);
  document.body.append(notification);
}

// Проверка при отправке формы.
// У формы стоит novalidate, поэтому браузер сам поля не проверяет:
// сначала проверяем состав заказа, потом обязательные поля.
const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('submit', function (event) {
  const text = getNotificationText();

  if (text !== null) {
    event.preventDefault(); // форма не отправляется
    showNotification(text);
    return;
  }

  // Состав верный — теперь проверяем обязательные поля (required)
  if (!orderForm.reportValidity()) {
    event.preventDefault();
  }
});