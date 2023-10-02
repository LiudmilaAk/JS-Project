//Базовые арифметические операторы
const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4;
const newWidth2 = width + 4;
const division = newWidth / newWidth2;
const volume = 2 ** 5;
console.log(volume);


// Строки 
const city = "Minsk";
const street = "Aerodromnaya";
console.log (city + ', ' + street + ' ' + 17);


//Операторы присваивания
let age = 18 + 5;
age +=2; //age = age + 2 
age -=3; // age = age - 3
age *= 2; // age = age * 2
age /= 2; // age = age / 2

age ++; // age = age + 1 
age --; // age = age - 1 

console.log (age);


//Операторы сравнения
const vasya = 20;
console.log (age > vasya);
console.log (age >= vasya);
console.log (age < vasya);
console.log (age <= vasya);
console.log (age == vasya);


//Порядок операторов
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

const isSuited = 100 - 10 > 90 - 5;
console.log (isSuited);
// 100 -(12 priority) 10 >(10 priority) 90 -(12 priority) 5;
// Чем выше приоритет - тем раньше выполняется оператор

const a = 6 + 10 / 2;
console.log (a);

const b = (6 + 10) / 2; //скобки - это группировка, приоритет 19 (max)
console.log (b);

let c;
let d;
c = d = 100 + 50;
console.log (c);
console.log (d);


//Типы данных
let v = 5;
let f = 5.6;
console.log (typeof v);
console.log (typeof f);

v = 'string';
console.log (typeof v);

let isAdmin = false;
console.log(typeof isAdmin);

isAdmin = a > 10;
console.log(typeof isAdmin);

let p;
console.log(typeof p);
p=5;
console.log(typeof p);

let g = null;
console.log (typeof g);
console.log (g == null);

//Упражнение 1

/* 
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?
*/

const payHourUSD = 80;

const orderPayment= 40 * 80;
console.log (orderPayment);

const workingDays = 5;
const workingHoursPerDay = 5;
const workingHoursPerWeek = workingDays * workingHoursPerDay;

const orderTime = 40;
const availiableDays = 9;
const availiableTime = availiableDays * 5;
console.log (availiableTime > orderTime);

//Решение

const payRateUSD = 80;
const projectHours = 40;
const availiableHours = (11 - 2) * 5;

console.log ('Смогу ли я работать? ' + (availiableHours > projectHours));
console.log ("Стоимость работ: " + projectHours * payRateUSD +  '$');




