// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
// Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.

function calcSurface (a,b){     // function has parameters a and b
    return(a*b)                 // function returns the product of a and b
}

const readlineSync = require("readline-sync");


let length = readlineSync.question("Enter the length of rectangle : ");         
let width = readlineSync.question("Enter the width of rectangle : "); 

console.log("Surface = " + calcSurface(length,width));    // when calling function, it receives arguments length and width
