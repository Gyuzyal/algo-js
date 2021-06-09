//  Write a program that will create a duplicate of a given array.

// Bonus : make a first version that will only do it using push().
// Make a second version that uses a single method call to perform the copy. 
// (You'll have to search on the MDN or Google for this one.)

const readlineSync = require("readline-sync");

let arr = [];
let arr2 = [];
let values = 0;
while (values != "ok"){
    values = readlineSync.question("Enter values of array (enter OK to end) : ");
    if (values != "ok"){
    arr.push(parseInt(values));                                                     // values ---> arr
    console.log("Array = " +arr);
    }
}


let i=0;
for (let elem of arr){ 
    arr2[i] = elem;
    i++;
console.log("Elem = " +elem +" i = "+ i + " arr2 = " +arr2+ " arr = " +arr);
}

console.log("Array = " +arr+ " and Array2 = " +arr2);



// See next exercice for bonus version1 (3.3.bonus.v1)


