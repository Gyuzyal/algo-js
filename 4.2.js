// Create a function named rand10() that returns a random integer between 1 and 10. 
// Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

function rand10(){
    return Math.floor(Math.random() * 10) + 1;   // Math.random() => random number between 0 and 1
}                                               // Math.floor() => round decimals to integers (ex: 0.5 -> 0)
                                                // Math.random() * 10 => convert decimal to unit (ex : 0.5 -> 5)
                                                // + 1 => from 1 to 10

console.log(rand10());       // call function