const currencyCost = 30;

for (let i = 10; i <= 100; i += 10) {
    const uahResult = i * currencyCost;
    console.log(`${i} USD * ${currencyCost} UAH = ${uahResult} UAH`);
}