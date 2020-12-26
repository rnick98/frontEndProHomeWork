const symbolInput = prompt('Enter one of these symbols: + - * /');

if (!(symbolInput === '+' || symbolInput === '-' || symbolInput === '*' || symbolInput === '/')) {
    alert('Sorry, try again with valid symbol!');
}
else {
    const numberInput = prompt('Enter a few numbers with spaces between each:');

    let userNumbers = numberInput.split(' ');
    let numberArray = userNumbers.map(item => parseInt(item));

    const filteredNumbers = numberArray.filter(function (item) {
        if (isNaN(item)) {
            return false;
        } else {
            return true;
        }
    });

    let numberCalculation = filteredNumbers.reduce(function (previousValue, value) {
        if (symbolInput === '+') {
            return previousValue + value;
        } else if (symbolInput === '-') {
            return previousValue - value;
        } else if (symbolInput === '*') {
            return previousValue * value;
        } else if (symbolInput === '/') {
            return previousValue / value;
        }
    });
    alert(`Awesome, your result is ${numberCalculation}!`);
};


