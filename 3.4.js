//  Write a program that will display the minimum and maximum elements of a given array.


const readlineSync = require("readline-sync");

let arr = [];
let values = 0;
while (values != "ok"){
    values = readlineSync.question("Enter values of array (enter OK to end) : ");
    if (values != "ok"){
    arr.push(parseInt(values));
    console.log("Array = " +arr);
    }
}


let min = arr[0];
let max = arr[0];


for (let elem of arr){
    if (min > elem){
        min = elem;
    }
}
for (let elem of arr){
    if (max < elem){
        max = elem;
    }
}


console.log("Min = " +min+ " and Max = " +max);
