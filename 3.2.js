// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:
// [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101

const readlineSync = require("readline-sync");

let num = 0;
let arr = [];

let numElements = readlineSync.question("Enter the odd number : ");
console.log(" Array length = " +numElements);

let i = 0;    
while (i < numElements){
    let values = readlineSync.question("Enter the values : ");
    arr.push(parseInt(values));
    console.log("Array = " +arr);
    i++;
}


num = arr.length / 2 ;           // the average of the array length found by dividing by 2.
num = parseInt(num);           //  num (ex : 2.5 -> 2) average of array arr[0.1.2.3.4]

console.log("The average of array = " + arr[num]);  

