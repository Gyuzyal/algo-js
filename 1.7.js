const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question('Enter your shoe size please :');
let birthYear = readlineSync.question('Enter your birth year please :');

let res = shoeSize * 2;
res += 5;
res *= 50;
res = res - birthYear;
res += 1766;

console.log("Result : " + res)