


function askTvSerie(){
    const readlineSync = require("readline-sync");

    myObject.name = readlineSync.question("Enter a name of serie : ");
    myObject.year = readlineSync.question("Enter a production year : ");

    
    let i = 0 ;
    
        for (i in myObject){                                                                 // each element of Object passes to i
            i = readlineSync.question("Enter the names of cast members (enter ok to end): ");     // i get values
            
                myObject.members.push(i);                                              /// why maximum 3 values in array members ?          
            
        }    
     
}



let myObject = {    // Initializes Object

    members :[]      // Initializes an array inside object
};

 askTvSerie();

console.log("La liste de l'Objet :");
console.log(myObject);

console.log("La liste JSON :");
let json = JSON.stringify(myObject);   // Converts Object to JSON
console.log(json);