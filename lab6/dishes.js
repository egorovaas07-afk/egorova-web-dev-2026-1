'use strict';

const dishes = [

  {
    keyword: 'red-velvet',
    name: 'Торт «Красный бархат»',
    price: 2500,
    category: 'cake',
    count: '1 кг',
    image: 'red_velvet',
    kind: 'sponge'
  },
  {
    keyword: 'prague-cake',
    name: 'Торт «Прага»',
    price: 2300,
    category: 'cake',
    count: '1 кг',
    image: 'prague',
    kind: 'sponge'
  },
  {
    keyword: 'napoleon',
    name: 'Торт «Наполеон»',
    price: 2200,
    category: 'cake',
    count: '1 кг',
    image: 'napoleon2',
    kind: 'layered'
  },
  {
    keyword: 'medovik',
    name: 'Торт «Медовик»',
    price: 1500,
    category: 'cake',
    count: '1 кг',
    image: 'medovic1',
    kind: 'layered'
  },
  {
    keyword: 'strawberry-cake',
    name: 'Торт «Клубничный»',
    price: 2400,
    category: 'cake',
    count: '1 кг',
    image: 'strawberry_cake',
    kind: 'fruit'
  },
  {
    keyword: 'lemon-cake',
    name: 'Торт «Лимонный»',
    price: 2100,
    category: 'cake',
    count: '1 кг',
    image: 'lemon_cake',
    kind: 'fruit'
  },


  {
    keyword: 'eclair',
    name: 'Эклер с заварным кремом',
    price: 250,
    category: 'pastry',
    count: '100 г',
    image: 'eclairs1',
    kind: 'cream'
  },
  {
    keyword: 'profiteroles',
    name: 'Профитроли (3 шт.)',
    price: 300,
    category: 'pastry',
    count: '120 г',
    image: 'profiteroles',
    kind: 'cream'
  },
  {
    keyword: 'cheesecake',
    name: 'Чизкейк «Нью-Йорк»',
    price: 350,
    category: 'pastry',
    count: '150 г',
    image: 'cheesecake1',
    kind: 'cheesecake'
  },
  {
    keyword: 'choco-cheesecake',
    name: 'Шоколадный чизкейк',
    price: 380,
    category: 'pastry',
    count: '150 г',
    image: 'choco_cheesecake',
    kind: 'cheesecake'
  },
  {
    keyword: 'macaron',
    name: 'Макарун',
    price: 150,
    category: 'pastry',
    count: '30 г',
    image: 'macarony',
    kind: 'almond'
  },
  {
    keyword: 'dacquoise',
    name: 'Дакуаз',
    price: 280,
    category: 'pastry',
    count: '110 г',
    image: 'dacquoise',
    kind: 'almond'
  },


  {
    keyword: 'almond-croissant',
    name: 'Миндальный круассан',
    price: 200,
    category: 'bakery',
    count: '100 г',
    image: 'almond_croissant',
    kind: 'puff'
  },
  {
    keyword: 'choco-croissant',
    name: 'Шоколадный круассан',
    price: 210,
    category: 'bakery',
    count: '100 г',
    image: 'choco_croissant',
    kind: 'puff'
  },
  {
    keyword: 'apple-puff',
    name: 'Слойка с яблоком',
    price: 170,
    category: 'bakery',
    count: '110 г',
    image: 'apple_puff',
    kind: 'puff'
  },
  {
    keyword: 'cherry-puff',
    name: 'Слойка с вишней',
    price: 180,
    category: 'bakery',
    count: '110 г',
    image: 'cherry_puff',
    kind: 'puff'
  },
  {
    keyword: 'cinnamon-roll',
    name: 'Булочка с корицей',
    price: 160,
    category: 'bakery',
    count: '100 г',
    image: 'cinnamon_roll',
    kind: 'yeast'
  },
  {
    keyword: 'shortbread',
    name: 'Песочное печенье с джемом',
    price: 120,
    category: 'bakery',
    count: '80 г',
    image: 'shortbread',
    kind: 'shortcrust'
  },


  {
    keyword: 'iced-latte',
    name: 'Айс-латте',
    price: 270,
    category: 'drink',
    count: '300 мл',
    image: 'iced_latte',
    kind: 'cold'
  },
  {
    keyword: 'lemonade',
    name: 'Лимонад «Цитрус»',
    price: 200,
    category: 'drink',
    count: '400 мл',
    image: 'lemonade',
    kind: 'cold'
  },
  {
    keyword: 'milkshake',
    name: 'Клубничный милкшейк',
    price: 290,
    category: 'drink',
    count: '350 мл',
    image: 'milkshake',
    kind: 'cold'
  },
  {
    keyword: 'latte',
    name: 'Кофе латте',
    price: 250,
    category: 'drink',
    count: '300 мл',
    image: 'latte',
    kind: 'hot'
  },
  {
    keyword: 'cocoa',
    name: 'Какао с молоком',
    price: 220,
    category: 'drink',
    count: '300 мл',
    image: 'cacao',
    kind: 'hot'
  },
  {
    keyword: 'tea',
    name: 'Чай с бергамотом',
    price: 180,
    category: 'drink',
    count: '400 мл',
    image: 'tea',
    kind: 'hot'
  },


  {
    keyword: 'panna-cotta',
    name: 'Панна-котта',
    price: 200,
    category: 'dessert',
    count: '100 г',
    image: 'panna_cotta',
    kind: 'small'
  },
  {
    keyword: 'chocolate-mousse',
    name: 'Шоколадный мусс',
    price: 210,
    category: 'dessert',
    count: '110 г',
    image: 'mousse',
    kind: 'small'
  },
  {
    keyword: 'mini-tart',
    name: 'Мини-тарт с ягодами',
    price: 230,
    category: 'dessert',
    count: '120 г',
    image: 'mini_tart',
    kind: 'small'
  },
  {
    keyword: 'tiramisu',
    name: 'Тирамису',
    price: 320,
    category: 'dessert',
    count: '200 г',
    image: 'tiramisu',
    kind: 'medium'
  },
  {
    keyword: 'strudel',
    name: 'Яблочный штрудель',
    price: 290,
    category: 'dessert',
    count: '220 г',
    image: 'strudel',
    kind: 'medium'
  },
  {
    keyword: 'donuts',
    name: 'Пончики (6 штук)',
    price: 650,
    category: 'dessert',
    count: '500 г',
    image: 'donuts',
    kind: 'large'
  }
];