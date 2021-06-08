const readlineSync = require("readline-sync");

let min = readlineSync.question("Enter minimum number : ");
let max = readlineSync.question("Enter maximum number : ");
let current = readlineSync.question("Enter current number : ");

if (min < current && current < max) {
    console.log(min + " < " + current + " < " + max);
}
else {
    console.log("You understand anything ! ");
}