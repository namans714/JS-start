//read data from user
const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I know your name? ")
const userAge = readlineSync.question("May I know your age? ")

console.log(`Welcome, ${userName}!`);
const yob = 2025 - Number(userAge);
console.log(`You were born in ${yob}.`)