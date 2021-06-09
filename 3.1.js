// Write a program that will add all the elements of an array.

// Test it with the following arrays:
// [1, 2, 3, 4, 5] => 15
// [100, 101, 102] => 303

const readlineSync = require("readline-sync");

let num = 0;
let arr = [];
let sum = 0;

while (num != "ok"){
    num = readlineSync.question("Enter the number (or enter ok to end): ");
    if (num != "ok"){
    arr.push(parseInt(num));
    console.log("num = " +num+ " arr = " +arr);
    }
}

for (let j of arr){
    sum = sum + j;
    console.log("iterSum = " +sum+ " iterArr = " +arr+ " iterj = " +j);
}
console.log("Arr = " + arr +" The sum = " + sum);