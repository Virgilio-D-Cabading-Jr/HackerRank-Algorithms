///////////////////////////////////////
//  Algo.js
///////////////////////////////////////

function miniMaxSum(arr) {
    let sArr = arr.sort();          // Create a sorted array

    let min=0
    for (let x=0; x<4; x++) {
        min += arr[x];
    }
    console.log("Min", min);
}

console.log("*******************");
console.log( "miniMaxSum( [1,2,3,4,5] )", miniMaxSum( [1,2,3,4,5] ) );