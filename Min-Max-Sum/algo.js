///////////////////////////////////////
//  Algo.js
///////////////////////////////////////

function miniMaxSum(arr) {
    let sArr = arr.sort();          // Create a sorted array

    let min=0;
    for (let x=0; x<4; x++) {
        min += sArr[x];
    }
    console.log("Min", min);

    let max=0;
    for (let x=1; x<5; x++) {
        man += sArr[x];
    }
    console.log("Max", max);
}

console.log("*******************");
console.log( "miniMaxSum( [1,2,3,4,5] )", miniMaxSum( [1,2,3,4,5] ) );