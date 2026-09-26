/* Задачки:

1. Как объявить функцию в TypeScript и почему?

ФУНКЦИЯ checkAnswer() {
    console.log("Hello World");
}

Варианты ответов:
a. def checkAnswer(): void {}
b. void checkAnswer(): void {}
c. function checkAnswer(): void {}
d. func checkAnswer(): void {} */
// --- верный ответ c должно быть слово function которое указывает на то что это функция



/* 2. В Typescript, какой результат работы кода и почему? 
И если не работает, как исправить? Выберите один ответ.

function greet(name: string): string {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());

Варианты ответов:
a. "Hello, stranger!"
b. "Hello, undefined!"
c. Ошибка: "name is not defined"
d. Ошибка: "Expected 1 arguments, but got 0." */

// ---- ответ d. Ошибка: "Expected 1 arguments, but got 0."
// Параметр name объявлен обязательным (name: string, без знака ?), поэтому вызвать
// greet() без аргумента нельзя - TypeScript ругается ещё до запуска. До строчки
// "Hello, stranger!" дело не доходит, и сама проверка name === undefined бессмысленна:
// раз name обещан как string, undefined там оказаться не может.

// КАК ИСПРАВИТЬ - способ 1: сделать параметр необязательным (знак ? после имени).
// Тогда name внутри может быть undefined, и проверка наконец работает.
function greet(name?: string): string {
    if (name === undefined) {
        return "Hello, stranger!";
    }
    else {
        return "Hello, " + name + "!";
    }
}
console.log(greet());        // Hello, stranger!
console.log(greet("Юля"));   // Hello, Юля!

// КАК ИСПРАВИТЬ - способ 2: задать значение по умолчанию.
// Тогда проверка на undefined не нужна вообще - name всегда строка.
function greet2(name: string = "stranger"): string {
    return "Hello, " + name + "!";
}
console.log(greet2());       // Hello, stranger!
console.log(greet2("Юля"));  // Hello, Юля!


/* 3. Что вернет вызов функции и почему?

function FindLongestString(arr: (string | string[])[]): string {
    let longest: string = "";


    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];


        if (Array.isArray(item)) {
            const nestedLongest: string = FindLongestString(item);


            if (nestedLongest.length > longest.length) {
                longest = nestedLongest;
            }
        } else if (typeof item === "string") {
            if (item.length > longest.length) {
                longest = item;
            }
        }
    }


    return longest;
}


console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));


Варианты ответов: 
a. Результатом будет ошибка, так как функция FindLongestString не определена внутри цикла.
b. Результатом будет 'banana', так как это самая длинная строка в первом вложенном массиве.
c. Результатом будет 'orange', так как это самая длинная строка во втором вложенном массиве.
d. Результатом будет 'strawberry', так как это самая длинная строка в массиве.
e. Результатом будет ничего, так как мы не вызываем функцию */

// - ответ d. Вернётся 'strawberry' - самое длинное слово (10 букв) во всём массиве.
// Функция перебирает все слова, включая вложенные массивы, и хранит в longest
// самое длинное из встреченных. Вложенные массивы она передаёт сама себе
// (FindLongestString(item)) - это рекурсия, то есть вызов функции из самой себя.
// Поэтому слова из вложенных массивов участвуют в сравнении наравне с остальными:
// mandarin (8) и banana (6) проверяются, но strawberry длиннее.
// b и c неверны - функция не останавливается на одном вложенном массиве.
// a неверно - функция определена корректно, вызов себя из себя разрешён.
// e неверно - вызов есть в console.log.



/* 4. О стрелочных функциях TypeScript:

Пример:
const add = (a: number, b: number): number => a + b;
console.log(add(2, 3));	//результат: 5

Вопрос: Что такое стрелочная функция в TypeScript и почему?

Варианты ответов:
a. Стрелочная функция - это метод, который позволяет перемещаться по элементам массива.
b. Стрелочная функция - это способ определения функции в TypeScript с использованием стрелочного синтаксиса `=>`.
c. Стрелочная функция - это особый тип данных в TypeScript, предназначенный для хранения и передачи функциональности.
d. Стрелочная функция - это ключевое слово в TypeScript, используемое для создания псевдонимов функций. */

// -- ответ b


// 5. Напишите функцию, которая выводит в консоль индивидуальное приветствие с именем, которое вы передаете в функцию

// функция сама выводит в консоль, поэтому ничего не возвращает - тип void
function greetUser(name: string): void {
  console.log(`Hello, ${name}!`);
}
greetUser("July");

/* 6. Напишите функцию с калькулятором (можно использовать код с предыдущей домашней работы), 
в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает 
за знак арифметической операции (*, /, -, +). Проверьте работу функции.

Пример:   
function calculate(a, b, operator)
{
//code
}
*/

function calculate(a: number, b: number, operator: "+" | "-" | "*" | "/"): number{
  switch(operator){
    case "+":
      return a + b;
    
    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;

    default:
      return NaN;
  }
}
console.log(calculate(5, 3, "+"));


/* 7. Создать функцию getGreetings, возвращающую массив, содержащий строки "Hello, World" на разных языках.

    "Hello world!"
    "!Hola mundo!"
    "Hallo wereld!"
    "Пpивeт мир!"

Создать декларируемую функцию (function Declaration), функцию выражение (function Expression) и стрелочную функцию. */

// --- 7.1. function Declaration (декларируемая функция)
// Приветствия лежат внутри функции, параметров нет - вызываешь и получаешь готовый массив.
function getGreetings(): string[] {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
}
console.log(getGreetings());

// --- 7.2. function Expression (функция-выражение)
// Функция без имени записана в переменную. Отличие от декларации: такую функцию
// нельзя вызвать раньше строки, где она объявлена.
const getGreetingsExpression = function (): string[] {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
};
console.log(getGreetingsExpression());

// --- 7.3. стрелочная функция (arrow function)
// То же самое, но короче: слово function заменено стрелкой => после скобок.
const getGreetingsArrow = (): string[] => {
  return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Пpивeт мир!"];
};
console.log(getGreetingsArrow());



// 8. Заполнить остаток таблички методов массивов

/* 9. Какой метод был использован в данном коде (на месте *****), чтобы перевести метры в футы и почему?  

const distanceInMeters: number[] = [2, 5, 13, 44, 100];


const distanceInFeet: number[] = distanceInMeters.*****(function(i) {
    return Math.round(i * 3.28084);
});


console.log(distanceInFeet);    // Вывод: [ 7, 16, 43, 144, 328 ] */

// 10. Внедрите в свой код с Кофе (из дз 3, задача 11), как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

/* 11. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции)
Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
За сколько дней она доползет до вершины стены. */

// 12. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива. Если элемент массива не число, пропускаем этот элемент

// 13. Напишите функцию, которая принимает массива строк как параметр и возвращает строки длиннее 5 букв.
