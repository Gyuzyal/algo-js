const readlineSync = require("readline-sync");


let name = readlineSync.question("Enter your name : "); 

let firstName = readlineSync.question("Enter your firstname : ");
let city = readlineSync.question("Enter your city : ");

console.log("Your name is " + name +" "+ firstName + " and you live in " + city + ".");



