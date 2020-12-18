const result = prompt('Please, type in any 3 numbers');
const firstNumber = Math.round(result / 100);
const secondNumber = Math.floor((result / 10) % 10);
const thirdNumber = result % 10;

//a
if (firstNumber === secondNumber && secondNumber === thirdNumber && firstNumber === thirdNumber) {
    alert('All your numbers are the same!');
} else {
    alert('Your numbers are different!');
}

//b
if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
    alert('Some of these numbers are the same.');
} else {
    alert('There is no the same numbers.');
}
