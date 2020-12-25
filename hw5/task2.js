const taskArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// a ==========================================================================================================================================
let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < taskArray.length; i++) {
    taskArray[i] >= 0 ? positiveNumbers.push(taskArray[i]) : negativeNumbers.push(taskArray[i]);
}

let sumPositiveNumbers = positiveNumbers.reduce((sum, current) => sum + current, 0);
console.log('a)', `Sum of positive numbers is - ${sumPositiveNumbers}. And count of positive elements is - ${positiveNumbers.length}.`);

// b ==========================================================================================================================================
let minValue = taskArray[0];
for (let i = 1; i < taskArray.length; i++) {
    let currentValue = taskArray[i];
    if (currentValue < minValue) {
        minValue = currentValue;
    }
}
let minNumberIndex = taskArray.indexOf(minValue) + 1;
console.log('b)', `Minimal array element is - ${minValue}. Its number in the list is ${minNumberIndex}`);

// c ==========================================================================================================================================
let maxValue = taskArray[0];
for (let i = 1; i < taskArray.length; i++) {
    let currentValue = taskArray[i];
    if (currentValue > maxValue) {
        maxValue = currentValue;
    }
}
let maxNumberIndex = taskArray.indexOf(maxValue) + 1;
console.log('c)', `Maximal array element is - ${maxValue}. Its number in the list is ${maxNumberIndex}`)

// d ==========================================================================================================================================
console.log('d)', `Count of negative elements is - ${negativeNumbers.length}`);

// e ==========================================================================================================================================
let positiveOddNumbers = [];
let positiveEvenNumbers = [];
for (let i = 0; i < positiveNumbers.length; i++) {
    if (positiveNumbers[i] % 2 > 0) {
        positiveOddNumbers.push(positiveNumbers[i])
    } else {
        positiveEvenNumbers.push(positiveNumbers[i])
    }
}
console.log('d)', `Count of odd positive elements is - ${positiveOddNumbers.length}`)

// f ==========================================================================================================================================
console.log('f)', `Count of even positive elements is - ${positiveEvenNumbers.length}`)

// g ==========================================================================================================================================
let sumPositiveEvenNumbers = positiveEvenNumbers.reduce((sum, current) => sum + current, 0);
console.log('g)', `Sum of even positive numbers is - ${sumPositiveEvenNumbers}.`)

// h ==========================================================================================================================================
let sumPositiveOddNumbers = positiveOddNumbers.reduce((sum, current) => sum + current, 0);
console.log('h)', `Sum of odd positive numbers is - ${sumPositiveOddNumbers}.`)

// i ==========================================================================================================================================
let multiplePositiveNumbers = positiveNumbers.reduce(function (sum, current) {
    return sum * current
});

console.log('i)', `The result of multiplication of positive elements is - ${multiplePositiveNumbers}`)

// j ==========================================================================================================================================
let newArray = taskArray.map(elem => elem < maxValue ? 0 : elem);
console.log('j)', 'All elements in the array are equal to zero except the biggest one', newArray)