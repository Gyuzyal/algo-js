
const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a number : ");



function factorial(n){
    if (n <= 1)
        return 1;               // if n = 0 or n = 1 then factorial = 1
    else {
        return (n * factorial(n - 1));  // if n = 4   -->   4 * 3 * 2 * 1
    }
 
}

console.log("The factorial of " +n+ " = " + factorial(n));