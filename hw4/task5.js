let userNumber = prompt('Type in number');
userNumber = parseInt(userNumber);

let exponentiationNumber = `Sorry, you have no chance to get ${userNumber} by raising 3 to any power.`;

for (let i = 1; i <= userNumber; i++) {
    const exponentiationAction = Math.pow(3, i);
    if (userNumber === exponentiationAction) {
        exponentiationNumber = `You can get ${userNumber} by raising 3 to the ${i} power.`;
        break;
    }
}

alert(exponentiationNumber);


