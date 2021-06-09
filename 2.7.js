// Make a program that ask the user to enter a number named n. 
// Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter the number : ");
console.log("n = " + n);

let i = 0;
let sum = 0;
for (; i < n ; i ++){
    let newNum = readlineSync.question("Enter the new number : ");
    
    sum =  sum + parseInt(newNum);  // convert i to Integer
}
console.log("La somme est : " + sum);