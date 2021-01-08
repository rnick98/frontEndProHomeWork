const symbolInput = prompt('Enter one of these symbols: + - * /');

if (!isMathOperation(symbolInput)) {
    alert('Sorry, try again with valid symbol!');
} else {
    const numberInput = prompt('Enter a few numbers with spaces between each:');

    const userNumbers = numberInput.split(' ');
    
    const numberArray = userNumbers.map((item) => parseFloat(item));

    const filteredNumbers = numberArray.filter(function (item) {
        return !isNaN(item)
    });

    if (filteredNumbers.length === 0) {
        alert('Please, type in valid numbers! Try again')
    } else {
        const numberCalculation = calculation(filteredNumbers);
        alert(`Awesome, your result is ${numberCalculation}!`);
    }
};

function calculation(filteredNumbers) {
    return filteredNumbers.reduce(function (previousValue, value) {
        switch (symbolInput) {
            case '+':
                return previousValue + value;
            case '-':
                return previousValue - value;
            case '*':
                return previousValue * value;
            case '/':
                return previousValue / value;
        }
    });
}

function isMathOperation() {
    return symbolInput === '+' || symbolInput === '-' || symbolInput === '*' || symbolInput === '/'
}

