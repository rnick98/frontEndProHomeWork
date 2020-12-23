const userArray = Array.from(prompt('Please, type in your favorite name'));
console.log(userArray);

userArray.sort();
console.log(userArray);

if (userArray.length < 4) {
    console.log('Your name has length less than 4')
} else {
    userArray.splice(1, 3);
    console.log(userArray);
}


