// Make a program that ask the user to enter a number between 1 and 7.
// Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync");

let numDay = readlineSync.question("Enter the number between 1 and 7 : ");

let monday = 1;
let tuesday = 2;
let wednesday = 3;
let thursday = 4;
let fryday = 5;
let saturday = 6;
let sunday = 7;


while (numDay < 1 || numDay > 7) {
    numDay = readlineSync.question("Enter the number between 1 and 7 : ");
}

if (numDay == 1){
    console.log(numDay + " => Monday");
} 
else if (numDay == 2){
    console.log(numDay + " => Tuesday");
}
else if (numDay == 3){
    console.log(numDay + " => Wednesday");
}    
else if (numDay == 4){
    console.log(numDay + " => Thursday");
}    
else if (numDay == 5){
    console.log(numDay + " => Fryday");
}   
else if (numDay == 6){
    console.log(numDay + " => Saturday");
}    
else if (numDay == 7){
    console.log(numDay + " => Sunday");
}   

    
