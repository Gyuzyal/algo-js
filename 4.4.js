// Create a function named average(arr) that takes an array of numbers as argument and returns the average.

// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

// Create a program that asks a number to the user then generate that same amount of random numbers 
// but also displays their average, min and max. 
// To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.


function average(arr){
    
    let num = arr.length / 2 ;      // the average of the array length found by dividing by 2.
    num = parseInt(num);           //  num (ex : 2.5 -> 2) average of array arr[0.1.2.3.4]
    return arr[num];               // returns the average of array
}

function min(arr){
    let min = arr[1];          // initializes min to a value of array

    for (let elem of arr){     // Passes each value of array to elem
        if (min > elem){       // Controls condition and assign minimum number to min
            min = elem;
        }              
    }
  return min;                   // returns minimum value  
}

function max(arr){
    let max = arr[0];          // initializes max to a value of array
    for (let elem of arr){     // Passes each value of array to elem
        if (max < elem){       // Controls condition and assign maximum number to max
            max = elem;
        }
    }
 return max;                    // returns maximum value
}

function rand10(){
    return Math.floor(Math.random() * 10) + 1;   // Math.random() => random number between 0 and 1
}                                               // Math.floor() => round decimals to integers (ex: 0.5 -> 0)
                                                // Math.random() * 10 => convert decimal to unit (ex : 0.5 -> 5)
                                                // + 1 => from 1 to 10

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

let arr = multiRand(n);                        // assigns array with random values to arr
console.log("Array = " + arr + "\nAverage = " + average(arr) + "\nMin = " + min(arr) + "\nMax = " + max(arr));   // call finctions  
                                                                                                                // "\n" -> newline