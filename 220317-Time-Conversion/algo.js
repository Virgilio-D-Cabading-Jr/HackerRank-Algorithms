/////////////////////////////////////////////////
//  Time Conversion Algo.js
/////////////////////////////////////////////////

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Approach:
    // Create a local string to be manipulated then returned
    // Base Case
    // A string that starts with 12 and ends with AM will need to start with 00
    // Start to Evaluate string
    // Check if AM or PM
    // If AM, then remove AM and return string
    // if PM, then remove PM and add 12 hours to start of time
    // return the string

    // Write your code here
    let output = "";
    output += "B";
    output += "A";
    console.log({ output });
}

console.log("\n***** Time Conversion - Algo.js ********\n");
console.log("Time Conversion: 07:05:45PM :", timeConversion( '07:05:45PM' ));