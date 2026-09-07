/*
1. Строки. Установить какие методы строк изменяют начальное значение строки.
*/


let s: string = "Knowledge of built-in JavaScript methods speeds up a tester's work."
console.log(s.length)
let newS: string = "";
let len: number;
let arr: string[];


console.log("1. Method charAt(3)");
console.log("Orig has value '" + s + "'");
newS = s.charAt(3); 
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'w' (значение под индексом 3) 


console.log("2. Method s[3]");
console.log("Orig has value '" + s + "'");
newS = s[3];
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'w' (значение под индексом 3) 


console.log("3. Method charAt(s.length - 1)");
console.log("Orig has value '" + s + "'");
newS = s.charAt(s.length - 1);
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает '.' (значение под индексом 66) 


console.log("4. Method substring(1, 4)");
console.log("Orig has value '" + s + "'");
newS = s.substring(1, 4);
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'now' (c первого по 4ый индекс НЕ включительно)


console.log("5. Method slice(1, 4)");
console.log("Orig has value '" + s + "'");
newS = s.slice(1, 4);
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'now' (c первого по 4ый индекс НЕ включительно)


console.log("6. Method slice(-3)");
console.log("Orig has value '" + s + "'");
newS = s.slice(-3);
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'rk.' - последние 3 символа (минус = отсчёт с конца строки)


console.log('7. Method indexof("l")');
console.log("Orig has value '" + s + "'");
len = s.indexOf("l");
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + len + "'\n"); //возвращает 4 (индекс первой l = 4)


console.log('8. Method lastIndexOf("l")');
console.log("Orig has value '" + s + "'");
len = s.lastIndexOf("l");
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + len + "'\n"); //возвращает 16 (индекс последней l = 16)


console.log('9. Method split("\'")');
console.log("Orig has value '" + s + "'");
arr = s.split("'");
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + arr + "'\n"); //возвращает [ "Knowledge of built-in JavaScript methods speeds up a tester", "s work." ] значения через запятую разделенные с помощью '


console.log('10. Method replace("l", "L")');
console.log("Orig has value '" + s + "'");
newS = s.replace("l", "L");
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); //возвращает "KnowLedge of built-in JavaScript methods speeds up a tester's work." заменяет только первую l на L


console.log('11. Method replaceAll("l", "L")');
console.log("Orig has value '" + s + "'");
newS = s.replaceAll("l", "L");
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); //возвращает "KnowLedge of buiLt-in JavaScript methods speeds up a tester's work." заменяет все l на L


console.log("12. Method toUpperCase()");
console.log("Orig has value '" + s + "'");
newS = s.toUpperCase();
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'KNOWLEDGE OF BUILT-IN JAVASCRIPT METHODS SPEEDS UP A TESTER'S WORK.' (все в верхнем регистре)


console.log("13. Method toLowerCase()");
console.log("Orig has value '" + s + "'");
newS = s.toLowerCase();
console.log("New has value  '" + s + "'"); //не меняет начальное значение строки
console.log("--- String did not change.");
console.log("Return value   '" + newS + "'\n"); // возвращает 'knowledge of built-in javascript methods speeds up a tester's work.' все в нижнем регистре 



/*
2. Заполнить таблицу методов строк. 
Она находится в той же папке, где и домашние задания. Копируем табличку к себе и заполняем.

Решение (заполненная таблица):
https://docs.google.com/spreadsheets/d/1f-S88J_MQZ_g53BhIgPEbLvz3pnkQzkqC42S8P0bgj0/edit?hl=ru&gid=0#gid=0
*/


/*
3. Массивы. Установить какие методы массивов изменяют начальное значение массива
*/


let arr1: string[] = ["1", "2", "3", "a", "b", "c"];
let res;


console.log("1. Method at()");
console.log("Orig array ", arr1);
arr1.at(3);
console.log("New array  ", arr1); //не меняет начальное значение массива
console.log("--- Array did not change.");
console.log("Return value   ", arr1.at(3), "\n"); //возвращает "a" (элемент под индексом 3)


console.log("2. Method push()");
console.log("Orig array ", arr1);
res = arr1.push("10");
console.log("New array  ", arr1); //печатает тк arr1 теперь с "10" в конце итого ["1", "2", "3", "a", "b", "c", "10"]
console.log("---!!! Array changed"); //меняет начальное значение массива
console.log("Return value   ", res, "(длина нового массива) \n"); //возвращает 7 (то есть длину нового массива)


arr1 = ["1", "2", "3", "a", "b", "c"];


console.log("3. Method unshift()");
console.log("Orig has value ", arr1);
res = arr1.unshift("10");
console.log("New has value  ", arr1); //печатает тк arr1 теперь с "10" В НАЧАЛЕ итого ["10", "1", "2", "3", "a", "b", "c"];
console.log("---!!! Array changed"); //меняет начальное значение массива
console.log("Return value   ", res, "(длина нового массива) \n"); //возвращает 7 (то есть длину нового массива)


arr1 = ["1", "2", "3", "a", "b", "c"];


console.log("4. Method pop()");
console.log("Orig has value ", arr1);
res = arr1.pop();
console.log("New has value  ", arr1); //печатает тк arr1 теперь без ПОСЛЕДНЕГО элемента в КОНЦЕ итого ["1", "2", "3", "a", "b"];
console.log("---!!! Array changed"); //меняет начальное значение массива
console.log("Return value   ", res, "\n"); //возвращает c (то есть удаленный элемент)


arr1 = ["1", "2", "3", "a", "b", "c"];


console.log("5. Method shift()");
console.log("Orig has value ", arr1);
res = arr1.shift(); 
console.log("New has value  ", arr1); //печатает тк arr1 теперь без ПЕРВОГО элемента в НАЧАЛЕ итого ["2", "3", "a", "b", "c"];
console.log("---!!! Array changed"); //меняет начальное значение массива
console.log("Return value   ", res, "\n"); //возвращает 1 (то есть удаленный элемент)


arr1 = ["1", "2", "3", "a", "b", "c"];


console.log("6. Method indexOf()");
console.log("Orig has value ", arr1);
res = arr1.indexOf("a");
console.log("New has value  ", arr1); //не меняет начальное значение массива
console.log("--- Array did not change.");
console.log("Return value   ", res, "\n"); //возвращает 3 (индекс первого найденного элемента)


console.log("7. Method concat()");
console.log("Orig has value ", arr1);
res = arr1.concat(["A", "B"]);
console.log("New has value  ", arr1); //не меняет начальное значение массива
console.log("--- Array did not change.");
console.log("Return value   ", res, "\n"); //возвращает ['1', '2', '3', 'a', 'b', 'c', 'A', 'B'] тк объединяет исходный массив с другим массивом/значениями


/*
4. Заполнить табличку методов массивов.
Она находится в той же папке, где и домашние задания. Копируем табличку к себе и заполняем.

Решение (заполненная таблица):
https://docs.google.com/spreadsheets/d/1f-S88J_MQZ_g53BhIgPEbLvz3pnkQzkqC42S8P0bgj0/edit?hl=ru&gid=0#gid=0
*/


/*
5. Область тестирования программных продуктов активно развивается и появляются новые
названия профессии тестировщик. С помощью какого метода можно добавить название профессии
"SDET" и "Lead SDET" в конец массива testerPositions? Напишите решение и распечатайте результат.


const testerPositions: string[] = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];
*/


const testerPositions: string[] = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];


console.log(testerPositions);
testerPositions.push("SDET", "Lead SDET");
console.log(testerPositions);






/*
6. В этом коде что-то не так. Найдите ошибки, покажите какие и переделайте код, чтобы он работал правильно


- Переменная day определяется с маленькой буквы, а проверяется с большой. Можно преобразовать в маленькие.
- Теперь, нужно поменять все сравнения на маленькие буквы (и исправить ошибки в Tuesday и Thursday)
- Для субботы, печатаем воскресенье
- Для субботы - забыли апостроф
*/


let day: string = "Monday";
let message: string;


day = day.toLowerCase();


if (day === "monday") {
    message = "It's Monday!";
}
else if (day === "tuesday") {
    message = "It's Tuesday!";
}
else if (day === "wednesday") {
    message = "It's Wednesday!";
}
else if (day === "thursday") {
    message = "It's Thursday!";
}
else if (day === "friday") {
    message = "It's Friday!";
}
else if (day === "saturday") {
    message = "It's Saturday!";
}
else if (day === "sunday") {
    message = "It's Sunday!";
}
else {
    message = "Invalid day!";
}


console.log(message);






/*
7. В этом коде ошибки. Найдите, покажите какие и почините.


- Переменная result3 не может быть создана через const
- Все значения в case кроме 5 и 6 - строки, а переменная monthNumber - число.
- Case со значением 3 - забыли break
- Case со значением 5 - переменная results3, а не result3 (лишняя буква s)
- Case со значением 6 - забыли двоеточие
- Case со значением 6 - используем = (присваивание), а не == (сравнивание)
- Нет дефолтного значения
*/


const monthNumber: number = 1;
let result3: string = "";


switch (monthNumber) {
    case 1:
        result3 = "January";
        break;
    case 2:
        result3 = "February";
        break;
    case 3:
        result3 = "March";
        break;
    case 4:
        result3 = "April";
        break;
    case 5:
        result3 = "May";
        break;
    case 6:
        result3 = "June";
        break;
    default:
        result3 = "Not Specified";
        break;
}


console.log(result3);










/*
8. Используя switch, напишите программу перевода дней недели из цифр в названия
   (перевести дни 1-7 в Пон-Вос)
*/


const dayId: number = 1;
let dayName: string = "";
let error: boolean = false;


switch (dayId) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        error = true;
        dayName = "Sorry, no such day exist!";
        break;
}


if (error) {
    console.log(dayName);
}
else {
    console.log(`Today is ${dayName}.`);
}






/*
9. Напишите программу по согласованию отпуска в зависимости от месяца.
   Если месяц "July" или "August", то программа должна показать - "approved",
   если другие месяцы, то - "denied".
*/


let month: string = "July";
month = month.toLowerCase();


if (month === "july" || month == "august") {
    console.log("Approved");
}
else {
    console.log("Denied");
}


/*
10. Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные
   для исходных чисел и одна для оператора. В зависимости от оператора, должно
   происходить то или иное арифметическое действие и выводиться результат в консоль.
   Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.
*/


const num1: number = 5;
const num2: number = 5;
const operator: string = "+";
let result7: string = "";


if (typeof num1 === "number" && !isNaN(num1) && typeof num2 === "number" && !isNaN(num2)) {
    if (operator === "+") {
        result7 = (num1 + num2).toString();
    }
    else if (operator === "-") {
        result7 = (num1 - num2).toString();
    }
    else if (operator === "*") {
        result7 = (num1 * num2).toString();
    }
    else if (operator === "/") {
        if (num2 === 0) {
            result7 = "Division by 0 is not allowed!";
        }
        else {
            result7 = (num1 / num2).toString();
        }
    }
    else {
        result7 = "Please, enter correct operator!";
    }
}
else {
    result7 = "Check your numbers!";
}


console.log(result7);






/*
11. Напишите программу, которая определяет, является ли заданный год високосным по правилам Григорианского календаря.
   Високосный год делится на 4, за исключением случаев, когда он делится на 100, но не на 400.
*/


const year: number = 1900;
let result8: boolean;


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    result8 = true;
} else {
    result8 = false;
}


console.log(result8);






/*
12. Напишите программу, которая рассчитывает стоимость билета в зависимости от возраста.
   Дети до 2х лет - бесплатно
   Дети до 10 лет - скидка в 50%
   Пожилые (после 65) - скидка в 15%
   Студенты - скидка в 10%
*/


const customerAge: number = 25;
const origTicketPrice: number = 100;
const isStudent: boolean = false;
let salePrice: number = 0;


if (customerAge > 2) {
    if (customerAge < 10) {
        salePrice = origTicketPrice - origTicketPrice * 0.5;
    }
    else if (customerAge >= 65) {
        salePrice = origTicketPrice - origTicketPrice * 0.15;
    }
    else {
        salePrice = isStudent ? origTicketPrice - origTicketPrice * 0.1 : origTicketPrice;
    }
}


console.log("Ticket Price: $" + salePrice);




/*
13. Решите задачу с помощью пройденных тем (исключительно с помощью пройденных тем):
   Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает
   вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она
   доползет до вершины стены.
*/


const wall: number = 5;
const dayDistance: number = 3;
const nightDistance: number = 2;
let totalMeters: number = 0;
let dayNumber: number = 0;


// день 1
if ((totalMeters = totalMeters + dayDistance) < wall) {  //3 метра меньше 5, иди дальше
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). Go forward!`);
}
else if (totalMeters === wall) {
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). You've reached your destination!`);
}
totalMeters = totalMeters - nightDistance; //теперь 1 метр


// день 2
if ((totalMeters = totalMeters + dayDistance) < wall) {  //4 метра меньше 5, иди дальше
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). Go forward!`);
}
else if (totalMeters === wall) {
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). You've reached your destination!`);
}
totalMeters = totalMeters - nightDistance; //теперь 2 метра


// день 3
if ((totalMeters = totalMeters + dayDistance) < wall) {  //5 метра не меньше 5, доползла!
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). Go forward!`);
}
else if (totalMeters === wall) {
    console.log(`Day ${++dayNumber}, your distance is ${totalMeters} meter(s). You've reached your destination!`);
}
totalMeters = totalMeters - nightDistance;








/*
14. Креативное задание:
   Напишите следующую программу:
      - У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
      - Дайте названия вашим видам кофе.
      - Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
      - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для
        изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).
      - Компоненты кофе не влияют на стоимость.
      - Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.
*/


const smallCup: string = "small cup";
const mediumCup: string = "medium cup";
const largeCup: string = "large cup";


const hotWater: string = "hot water";
const coldWater: string = "cold water";


const latte: string = "Latte";
const icedCoffee: string = "Iced Coffee";


//make your choice here
let price: number = 5;
let coffeeType: string = icedCoffee;
let cup: string = smallCup;
let water: string = "";


if (coffeeType === icedCoffee) {
    water = coldWater;
}
else {
    water = hotWater;
}


if (cup === mediumCup) {
    price *= 1.5;
}
else if (cup === largeCup) {
    price *= 2;
}




const step1 = `1. Take a ${cup}.`;
const step2 = "2. Put 1 spoon of coffee in it.";
const step3 = `3. Pour ${water} in the cup with coffee.`;
const step4 = "4. Pour a splash of milk in the cup.";
const step5 = "5. Stir coffee in the cup with a spoon.";


const customerOrder = `
Make one ${cup} of ${coffeeType}:
${step1}
${step2}
${step3}
${step4}
${step5}


The order price is $${price}.


Enjoy your coffee!
`;


console.log(customerOrder);









/*
15. Создайте программу, которая определяет, имеет ли человек право на определенное мероприятие, на основе нескольких критериев: возраста, статуса членства и посещения предыдущих мероприятий.
    Критерии участия:
    - Возраст должен быть не менее 18 лет.
    - Для членов клуба другие ограничения не применяются.
    - Если человек не является членом клуба, необходимо посетить не менее 3 предыдущих мероприятий.
    - Если человек не является членом клуба, но посетил 5 или больше предыдущих мероприятий, он получает специальный VIP-пропуск.  
*/


const memberAge: number = 5;
const isMember: boolean = false;
const previousEventsAttended: number = 0;
let eligibilityResult: string = "";


if (memberAge < 18) {
    eligibilityResult = "🔴 Not eligible: Must be at least 18 years old.";
}
else {
    if (isMember) {
        eligibilityResult = "🟢 Eligible: Member.";
    }
    else {
        if (previousEventsAttended >= 5) {
            eligibilityResult = "🟢 Eligible: VIP Pass!";
        }
        else if (previousEventsAttended >= 3) {
            eligibilityResult = "🟢 Eligible: Non-member with sufficient attendance.";
        }
        else {
            eligibilityResult = "🔴 Not eligible: Non-member with insufficient attendance.";
        }
    }
}


console.log(eligibilityResult);
