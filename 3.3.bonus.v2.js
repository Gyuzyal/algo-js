//  Write a program that will create a duplicate of a given array.

// Bonus : make a first version that will only do it using push().
// Make a second version that uses a single method call to perform the copy. 
// (You'll have to search on the MDN or Google for this one.)


// Bonus v2

const readlineSync = require("readline-sync");

let arr = [];
let arr2 = [];
let values = 0;
while (values != "ok"){
    values = readlineSync.question("Enter values of array (enter OK to end) : ");
    if (values != "ok"){
    arr.push(parseInt(values));
    console.log("Array = " +arr);
    }
}


arr2 = Array.from(arr);  // fonction Array.from()

console.log("Array = " +arr+ " and Array2 = " +arr2);
