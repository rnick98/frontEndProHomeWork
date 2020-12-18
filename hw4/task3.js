const userNumber = prompt('Please, type in your number below');

for (let i = 1; i <= 100; i++) {
    const squareNumber = Math.pow(i, 2);
    if (squareNumber > userNumber) {
        break;
    }
    console.log(`Squared ${i} is less than your number(${userNumber})`)
}