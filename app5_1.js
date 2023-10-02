// If else (Conditional Statements)

const money = 23;

if (money > 50) {
    console.log ("You can buy our product");
} else {
    console.log ("Not enough money");
}
console.log("Thank you!")


const money2 = 15;

if (money2 > 50) {
    console.log ("You can buy our product");
} else if (money2 > 5) {
    console.log ("You can buy our mini product");
} else {
    console.log ("Not enough money");
}
console.log("Thank you!")


//Упражнение на Conditional Statements
/*
Вася положил 12 000 на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500 через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ** срок в месяцах
*/

const startSum = 12000;
const finalSum = 12000 * (1 + 0.07/12) ** 24;

if (finalSum >= 13500) {
    console.log ("Vasya can buy the house");
} else {
    console.log ("Not enough money");
}
console.log (finalSum - 13500);


const deposit = 12000;
const rate = 0.07;
const depositTime = 24;
const housePrice = 13500;

const resultSum = deposit * (1 + rate/12) ** 24;

if (resultSum >= housePrice) {
    console.log (`Vasya can buy the house. The rest is ${resultSum - housePrice}`);
} else {
    console.log ("Not enough money");
}