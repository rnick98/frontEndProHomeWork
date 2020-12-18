const result = prompt('Please, type in any 2 numbers');
const firstNumber = Math.floor(result / 10);
const secondNumber = result % 10;

if (firstNumber > secondNumber) {
    alert(`${firstNumber} is more than ${secondNumber}`)
} else if (firstNumber < secondNumber) {
    alert(`${secondNumber} is more than ${firstNumber}`)
} else
    alert('The numbers are equal!')