function createCalculator() {
    const data = { number: 10 };

    return {
        sum: function (n) {
            data.number += n;
        },
        mult: function (n) {
            data.number *= n;
        },
        sub: function (n) {
            data.number -= n;
        },
        div: function (n) {
            data.number /= n;
        },
        showResult: function () {
            console.log("Result: ", data.number);
        }
    }
}

const calc = createCalculator(10);

calc.sum(5); /// 15
calc.showResult()
calc.mult(10); // 150
calc.showResult()
calc.sub(40); // 110
calc.showResult()
calc.div(10); // 11
calc.showResult()