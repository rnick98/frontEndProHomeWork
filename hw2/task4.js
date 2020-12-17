let defaultValue = prompt("Script4. Please, type in 5 numbers");

let num1 = defaultValue % 10000;
let num2 = defaultValue % 1000;
let num3 = defaultValue % 100;
let num4 = defaultValue % 10;
let num5 = defaultValue % 1;

let newValue1 = (defaultValue - num1) / 10000;
let newValue2 = ((defaultValue - num2) % 10000) / 1000;
let newValue3 = ((defaultValue - num3) % 1000) / 100;
let newValue4 = ((defaultValue - num4) % 100) / 10;
let newValue5 = ((defaultValue - num5) % 10) / 1;

alert(newValue1 + ' ' + newValue2 + ' ' + newValue3 + ' ' + newValue4 + ' ' + newValue5 + ' ');
