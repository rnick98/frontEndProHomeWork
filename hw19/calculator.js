const addition = require('./add');
const setting = require('./set');
const subtraction = require('./sub');
const multiplication = require('./mult');
const division = require('./div');

const calculator = {
    defaultSet: null,

    set(number) {
        this.defaultSet = setting(number);
    },

    add(number) {
        this.defaultSet = addition(this.defaultSet, number)
        return this.defaultSet;
    },

    sub(number) {
        this.defaultSet = subtraction(this.defaultSet, number)
        return this.defaultSet;
    },

    mult(number) {
        this.defaultSet = multiplication(this.defaultSet, number)
        return this.defaultSet;
    },

    div(number) {
        this.defaultSet = division(this.defaultSet, number)
        return this.defaultSet;
    }
}

module.exports = calculator;