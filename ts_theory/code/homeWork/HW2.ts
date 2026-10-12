// 1.Переменные
// -- a. Объявите две переменные: firstName и lastName.
// -- b. Присвойте значение “John”  переменной firstName и значение “Adams”   переменной  lastName.
// -- c. Выведите в консоль  значение firstName и lastName (должно показать John Adams).
// -- d. Измените firstName и lastName на новое значение: "Brandon Smith". 

// В итоге на экране должно быть две строки:
// John Adams
// Brandon Smith

let firstName: string = "John";
let lastName: string = "Adams";
console.log(firstName + " " + lastName);

firstName = "Brandon";
lastName = "Smith";
console.log(firstName + " " + lastName);

// 2.Выведите в консоль тип данных следующих переменных (использовать метод typeof())

let aa;
let c = 9;
let str = "Hi 5!";
let bb = true;
let yy = 9 + "1";

console.log(typeof(aa));
console.log(typeof(c));
console.log(typeof(str));
console.log(typeof(bb));
console.log(typeof(yy));

// 3. Возьмем персонаж James Bond. Придумайте, какие его характеристики логично объявить через const, а какие через let. Пропишите их и выведите на экран
const namePerson: string = "James";
const lastName2: string = "Bond";
let age: number = 30;

// 4. Создайте несколько переменных с разными числами. Проверьте находятся ли числа между 10 и 20. Выведете на печать для каждой цифры true или false
let variable1: number = 12;
let variable2: number = 0;
let variable3: number = 55;
console.log(variable1 > 10 && variable1 < 20);
console.log(variable2 > 10 && variable2 < 20);
console.log(variable3 > 10 && variable3 < 20);

// 5. Что выведет код и почему: 
const num: number = 15;
const result = num + 5;
console.log(result); // -- 20, просто складываем 15+5=20

const num2: string = "28";
const result2 = num2 + 2;
console.log(result2); // -- 282, конкатенация строки с числом

console.log( null || 2 || undefined ); // -- || возвращает первое truthy-значение

const xx: number = 5;
const y: number = 10;

console.log(xx > 0 && y < 20);  // --- true, тк оба условия верны
console.log(xx < 0 && y > 0); // -- false, тк x < 0 false
console.log(xx < 0 && y < 0); // -- false, тк x < 0 false
console.log(xx > 0 && "Hello"); // -- true && "Hello" → "Hello", потому что && возвращает последнее значение, если оба значения truthy

const a: number = 0;
const b: number = 5;

console.log(a > 0 || b > 0); // -- true, тк b > 0
console.log(a > 0 || b === 0); // -- false, тк ни одно из условий неверно
console.log(a > 0 || ""); // -- false || "" → "", потому что || возвращает последнее значение, если все значения falsy
console.log(a < 0 || "Hello"); // -- false || "Hello" → "Hello", потому что || возвращает первое truthy значение

let xxx: number = 5;
let yyy: number = 10;
let z: number = 15;
let result3 = (xxx > yyy || yyy < z) && !(z === xxx); 
console.log(result3) // -- true

//6. Какого типа данных будет результат выполнения оператора "typeof" для переменной "isAdult", если возраст "age" равен 18?
let age1: number = 18;
let isAdult = age1 >= 18;
let typeOfIsAdult = typeof isAdult;
console.log(typeOfIsAdult);
console.log(typeof(isAdult)); // -- 18 >= 18 (true) поэтому boolean

// 7. Задачки на CodeWars:
// !!! Примечание:
// В CodeWars, некоторые задачи можно писать только в JavaScript, а не в TypeScript.
// Всегда пытайтесь выбрать TypeScript, но если это не возможно, решайте в JavaScript, но пишите чистый код, как бы писали в TypeScript (например, переменная создается только с одним типом данных, не переписывайте переменную с другим типом данных, и т.д.)

// 7.1.  http://www.codewars.com/kata/560f8d41cf6e1fe5c900002e 
// In JavaScript, there is a special case where strict comparison of the same variable returns false! 
// Try to find out what must be done to get such result!

var x = NaN;
console.log(x === x); // returns false!


// http://www.codewars.com/kata/50ee6b0bdeab583673000025 
// This code should store "codewa.rs" as a variable called 
// name but it's not working. Can you figure out why?

var aaa = "code";
var bbb = "wa.rs";
export var name = aaa + bbb;


