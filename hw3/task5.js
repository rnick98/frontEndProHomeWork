const result = prompt('Please, type in any 6 numbers');
const firstNumber = Math.floor(result / 100000);
const secondNumber = Math.floor((result / 10000) % 10);
const thirdNumber = Math.floor((result / 1000) % 10);
const fourthNumber = Math.floor((result / 100) % 10);
const fifthtNumber = Math.floor((result / 10) % 10);
const sixthNumber = Math.floor(result % 10);

if (firstNumber === sixthNumber && secondNumber === fifthtNumber && thirdNumber === fourthNumber) {
    alert('You entered a mirror number.');
} else {
    alert('You number isn\'t mirror.');
}