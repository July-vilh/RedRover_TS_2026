
// Задачки:

// 1. Создайте объект cars, где будут 3-4 разные машины с их названиями, моделями, годом выпуска и цветом.

// 2. Работа с объектом room. Выполняйте пошагово.

// ----- 2.1. Создайте объект room и его параметры:

// ----- 2.2. Ключ height со значением 3

// ----- 2.3. Ключ tv со значением samsung

// ----- 2.4. Ключ big со значением true

// ----- 2.5. Выведите в console все параметры объекта room по очереди

// ----- 2.6. Выведите в console тип данных параметра big

// ----- 2.7. Выведите в console количество символов в строке параметра tv (длину строки)

// ----- 2.8. Выведите в console результат расчёта: длина строки параметра tv минус 1

// ----- 2.9. Поменяйте samsung на все заглавные буквы и выведите в console

// ----- 2.9.1. Замените samsung на LG в нашем объекте room

// ----- 2.9.2. Добавьте в наш объект room ещё одну пару ключ-значение:

// ----- 2.9.3. Ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"

// ----- 2.9.4. Выведите значение "chair" в console (путем обращения к массиву)

// ----- 2.9.5. Удалите из нашего объекта room параметр big


//3. Создайте функцию, которая принимает следующий объект как параметр: { name: "dog", legs: 4, color: "yellow" }

// ----- 3.1. Возвратите строку: "This yellow dog has 4 legs." НЕ используйте интерфейс или кастомные типы


/* 4. Что произойдет при выполнении следующего кода и почему?

const person: {
        name: string,
        age: number,
        city: string
} = {
        name: "John",
        age: 30,
        city: "New York"
};
const props = Object.keys(person);

Варианты ответа:
1. Будут выведены все значения свойств объекта “person”.
2. Будут выведены все ключи свойств объекта “person”.
3. Будет выведено количество свойств объекта “person”.
4. Будет выведена ошибка. */


/* 5. Что будет результатом работы кода и почему?

const person: {
        name: string,
        age: number,
        occupation: string,
        sayHello: () => void
} = {
        name: "John",
        age: 30,
        occupation: "Engineer",

        sayHello: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
};
person.sayHello();
Варианты ответов:
1. Hello, my name is John and I am 30 years old.
2. Hello, my name is ${person.name} and I am ${person.age} years old.
3. Hello, my name is ${this.name} and I am ${this.age} years old.
4. Hello, my name is undefined and I am undefined years old. */


/* 6. Есть список людей, которые подписались на международную встречу разработчиков.

 type Developer = {
        firstName: string;
        lastName: string;
        country: string;
        age: number;
        language: string;
};

const developers: Developer[] = [
     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
     { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
     { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
     { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
     { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
     { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
     { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
];


Вопрос: есть ли хоть один разработчик, работающий на JavaScript? Возвратите да или нет. Будьте внимательны. */




// 7. Задача для сладкоежек. Есть массив десертов. Выведите самый дешевый десерт и самый дорогой десерт в формате предложения: 
// "Самый дорогой десерт <имя десерта>, по <цена>, а самый дешевый <имя десерта>, по <цена>."

    interface Dessert {
          name: string,
          price: Number
    }

    const desserts: Dessert[] = [
          { name: "Пирожное", price: 65 },
          { name: "Мороженое", price: 35 },
          { name: "Торт Наполеон", price: 250 },
          { name: "Песочное Печенье", price: 50 },
          { name: "Пудинг", price: 80 },
          { name: "Фруктовый Тарт", price: 40 },
          { name: "Желе Земляничное", price: 40 },
          { name: "Вафли Шоколадные", price: 36 },
          { name: "Булочка с Изюмом", price: 28 }
    ];



/* 8. Креативное задание.

Создайте библиотеку книг Стивена Кинга, Марка Твена и Александра Сергеевича. В библиотеке должно быть по 5 книг каждого писателя. Каждая книга должна иметь идентификатор (isbn), имя книги, имя автора, год выпуска, жанр, количество страниц, популярность книги у этого автора (от 1 до 5) и 
первое предложение/строку.

Выведите в console названия всех книг.
Выведите в console имена самой популярной книги каждого из авторов в читабельном формате
Отсортируйте библиотеку по году выпуска книг */