class Calc {

    constructor(base) {
        this._base = base;
    }

    set(num) {
        this.base = num;
    }

    add(num) {
        this.base += num;
        return this.base;
    }

    sub(num) {
        this.base -= num;
        return this.base;
    }

    mult(num) {
        this.base *= num;
        return this.base;
    }

    div(num) {
        this.base /= num;
        return this.base;
    }

}

module.exports = Calc;