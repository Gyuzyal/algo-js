const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Enter a decimal number please :');
let number2 = readlineSync.question('Enter an integer please :');

let nbInt = Math.trunc(number1);
let produit = nbInt * number2;

console.log(nbInt + " * " + number2 + " = " + produit);
