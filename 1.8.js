const readlineSync = require("readline-sync");

let rest = 4;
let color = readlineSync.question('Enter a color : '+'(reste '+rest+' questions) ');
rest = 3;
let city = readlineSync.question('Enter a city : '+'(reste '+rest+' questions) ');
rest = 2;
let animal = readlineSync.question('Enter an animal : '+'(reste '+rest+' questions) ');
rest = 1;
let creature = readlineSync.question('Enter a mythical creature : '+'(reste '+rest+' question) ');

let month = readlineSync.question('Enter a month : ');



console.log("-------------------------------");
console.log("   In a faraway city : " + city + ", lived a unique couple — " + animal + " and his wife " + creature + ".");

console.log("One day in " +month+ ", while returning home on their " +color+ " scooter after a long day’s work, happens something unexpected. They meet with an accident and " +animal+ " gets badly wounded, but the " +creature+ " escapes scratch proof.");

console.log("Guess how? Because the "+creature+ " is a safe rider and was wearing a helmet.");
console.log("-------------------------------");
console.log("-------------------------------");


console.log("Source : Ant's accident : https://www.momjunction.com/articles/funny-stories-for-kids_00496859/ ");
console.log("-------------------------------");