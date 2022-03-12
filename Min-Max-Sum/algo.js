///////////////////////////////////////
//  Algo.js
///////////////////////////////////////

function miniMaxSum(arr) {
    let sArr = arr.sort();          // Create a sorted array

    let min=0;
    for (let x=0; x<4; x++) {
        min += sArr[x];
    }

    let max=0;
    for (let x=1; x<5; x++) {
        max += sArr[x];
    }
    console.log(min,max);
}

miniMaxSum( [1,3,5,7,9] );
miniMaxSum( [1,2,3,4,5] );