// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

const musicCollection = {
  albums: [
    {
      title: "Название альбома1",
      artist: "Исполнитель1",
      year: "Год выпуска1",
    },
    {
      title: "Название альбома2",
      artist: "Исполнитель2",
      year: "Год выпуска2",
    },
    {
      title: "Название альбома3",
      artist: "Исполнитель3",
      year: "Год выпуска3",
    },
  ],
  [Symbol.iterator]() {
    this.current = 0;
    return this;
  },
  next() {
    return this.current < this.albums.length
      ? { done: false, value: this.albums[this.current++] }
      : { done: true };
  },
};

// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

const chefs = new Map([
  ["Victor", { specialization: "Pizza" }],
  ["Olga", { specialization: "Sushi" }],
  ["Dmitriy", { specialization: "Desserts" }],
]);

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

const dishes = new Map([
  ["Pizza 'Margarita'", { chef: "Victor" }],
  ["Pizza 'Pepperoni'", { chef: "Victor" }],
  ["Sushi 'Philadelphia'", { chef: "Olga" }],
  ["Sushi 'California'", { chef: "Olga" }],
  ["Tiramisu", { chef: "Dmitriy" }],
  ["Cheesecake", { chef: "Dmitriy" }],
]);

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const clients = new Map([
  ["Alexey", []],
  ["Maria", []],
  ["Irina", []],
]);
clients.set("Alexey", ["Pizza 'Pepperoni'", "Tiramisu"]);
clients.set("Maria", ["Sushi 'California'", "Pizza 'Margarita'"]);
clients.set("Irina", ["Cheesecake"]);

function getChef(dish) {
  return dishes.get(dish).chef;
}

function getClientOrders(client) {
  return clients.get(client);
}

console.log("Заказы для Алексея:", getClientOrders("Alexey"));
console.log("Заказы для Марии:", getClientOrders("Maria"));
console.log("Заказы для Ирины:", getClientOrders("Irina"));

console.log(
  "Повар для блюда 'Pizza 'Pepperoni'':",
  getChef("Pizza 'Pepperoni'")
);
console.log(
  "Повар для блюда 'Sushi 'California'':",
  getChef("Sushi 'California'")
);
console.log("Повар для блюда 'Cheesecake':", getChef("Cheesecake"));
