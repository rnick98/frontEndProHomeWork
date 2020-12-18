const result = prompt('Please, type in any number');
const lastNumber = result % 10;

if (lastNumber & 1) {
    alert(`Your number is ${lastNumber}! You do the odds.`)
} else {
    alert(`Your number is ${lastNumber}! You do the evens.`)
}
