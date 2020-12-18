const result = prompt('Please, type in any 3 numbers');
const firstNumber = Math.floor(result / 100);
const secondNumber = Math.floor((result / 10) % 10);
const thirdNumber = result % 10;
const sumNumbers = firstNumber + secondNumber + thirdNumber;
const multipleNumbers = firstNumber * secondNumber * thirdNumber;

//a
if (sumNumbers & 1) {
    alert(`Your sum is ${sumNumbers}. It is odd`);
} else {
    alert(`Your sum is ${sumNumbers}. It is even`);
}

//b
if (sumNumbers % 5) {
    alert('Sum isn\'t a multiple of 5.');
} else {
    alert('Sum is a multiple of 5.');
}

//c
if (multipleNumbers > 100) {
    alert('Multiplying is more than 100')
} else if (multipleNumbers < 100) {
    alert('Multiplying is less than 100')
} else {
    alert('Multiplying is equal to 100')
}