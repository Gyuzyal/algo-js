// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. 
// That function must return the distance between those two points.

function calcDistance(arrA,arrB){     // a[0,1] , b[0,1]
    a = arrB[0] - arrA[0];       // a = b0 - a0
    b = arrB[1] - arrA[1];       // b = b1 - 01

    dist = Math.sqrt( (Math.pow(a,2)) + (Math.pow(b,2)) ); // square root of (a²) and (b²)

    console.log("Distance = " + dist)
}

// Testing code

let a = [-2,2];
let b = [2,-2];

calcDistance(a,b);