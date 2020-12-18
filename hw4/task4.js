let integerNumber = prompt('Please, type in your integer number');
integerNumber = parseInt(integerNumber);

let primeOrCompositeNumber = 'Your number is prime';
for (let i = 2; i < integerNumber; i++) {
    if (integerNumber % i == 0) {
        primeOrCompositeNumber = 'Your number is composite';
        break;
    }
}

console.log(primeOrCompositeNumber);