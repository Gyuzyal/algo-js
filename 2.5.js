// Make a program that asks the favorite number of the user. 
// If that number is anything other than 42 display "Are you sure?" and ask again. 
// (This program should never end as long as the user didn't chose 42).

const readlineSync = require("readline-sync");

let favNum = readlineSync.question("What is your favorite number ? ");

while (favNum != "42"){   // string
    
    console.log("Favnum : "+ favNum +"  Are you sure ?");
    favNum = readlineSync.question("What is your favorite number ? ");
    
}
console.log("Bravo! Favnum = "+ favNum);