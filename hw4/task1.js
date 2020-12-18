let stringNumbers = '';

for (let i = 20; i <= 30; i += 0.5) {
    stringNumbers += i === 20 ? i : ` ${i}`
}
console.log(`Numbers with 0,5 interval - ${stringNumbers}`);