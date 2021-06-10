// By reusing the function rand10() created in Exercise 2, 
// write a function named multiRand(n) that returns an array of n numbers between 1 and 10. 
// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.



function rand10(){
    return Math.floor(Math.random() * 10) + 1; 
}

function multiRand(n){
    let arr = [];
    let values = 0;
    let i = 0;

    while (i < n){           
        values = rand10();  // random number passes to values
        arr.push(values);     // adding values to  array
        i++;                // iterates i until number n
}
    return arr;
}

const readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a number (lenght of array) : ");




console.log("Array = " + multiRand(n));