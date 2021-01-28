// size
const SIZE_SMALL = {
    price: 50,
    calories: 20,
};
const SIZE_MEDIUM = {
    price: 75,
    calories: 30,
};
const SIZE_BIG = {
    price: 100,
    calories: 40,
};
// toppings
const TOPPING_CHEESE = {
    price: 10,
    calories: 20,
};
const TOPPING_SALAD = {
    price: 20,
    calories: 5,
};
const TOPPING_POTATO = {
    price: 15,
    calories: 10,
};
const TOPPING_SEASONING = {
    price: 15,
    calories: 0,
};
const TOPPING_MAYO = {
    price: 20,
    calories: 5,
};

const toppings = [];

class Hamburger {
    constructor(hamburgerSize) {
        this.hamburgerSize = hamburgerSize;
        this.toppings = [];
    };
    addTopping(topping) {
        hamburger.toppings.push(topping);
    };

    getPrice() {
        return this.toppings.reduce(function (acc, topping) {
            return acc + topping.price;
        }, this.hamburgerSize.price)
    };
    getCallories() {
        return this.toppings.reduce(function (acc, topping) {
            return acc + topping.calories;
        }, this.hamburgerSize.calories)
    };


};

const hamburger = new Hamburger(SIZE_SMALL);

hamburger.addTopping(TOPPING_MAYO);
hamburger.addTopping(TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCallories());










