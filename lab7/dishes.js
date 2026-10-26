'use strict';

// Адрес, откуда загружаются блюда (файл dishes.json лежит рядом со страницей)
const API_URL = 'dishes.json';

// Массив блюд. Вначале пустой, заполняется после ответа сервера.
let dishes = [];

// Загружает блюда с сервера и кладёт их в массив dishes
async function loadDishes() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Не удалось загрузить блюда: ${response.status}`);
  }

  dishes = await response.json();
}