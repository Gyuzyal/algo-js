const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Enter first integer please :');
let number2 = readlineSync.question('Enter second integer please :');
let rest = number1 % number2;

console.log(number1 + " % " + number2 + " = " + rest);

