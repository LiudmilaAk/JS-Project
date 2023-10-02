//Шаблонные строки

const projectName = "Online store";
const price = "2000";
const author = "Peter Pan";

const template = author + " ordered " + projectName + " by price " + price + "$";
console.log (template)

const template2 = `${author} ordered ${projectName} by price ${price}$;`
console.log (template2);

const template3 = "Project \n" + "Price: " + price + "$";
console.log (template3);

const template4 = `Project: ${projectName}
Price: ${price} $`;
console.log (template4);

//Преобразование типов 

const age = "18";
console.log(Number(age) + 5);
console.log(age - 3); // -*/ JS распознает как матем функции, а + считает конкатинацией

const userName = "Peter";
console.log(Number(userName) + 5); //NaN - not a number
console.log (String(4) + 7);

console.log(Boolean(-34));
console.log(Boolean(3));
console.log(Boolean(0)); //Все числа (+ -) true, только 0 дает false

console.log(Boolean("Stasya")); // с заполнением - true
console.log(Boolean("")); // пустое - false


// False из других типов

console.log(Boolean(0));
console.log(Boolean("")); 
console.log(Boolean(undefined)); 
console.log(Boolean(null)); 

console.log(Boolean(Number("kds"))); 
console.log(Boolean(NaN)); 