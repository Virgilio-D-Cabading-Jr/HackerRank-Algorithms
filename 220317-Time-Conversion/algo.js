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
    // Create a local string to be manipulated then returned
    let output = "";

    // Base Case
    // A string that starts with 12 and ends with AM will need to start with 00
    if (s[0] == '1' && s[8] == 'A') {
        output += '00'
        output += ':' + s[3] + s[4] + ':' + s[6] + s[7]
        return output;
    }

    // Start to Evaluate string
    // Check if AM or PM
    if (s[8] == 'A') {
        // If AM, then remove AM and return string
        output = s[0] + s[1] + ':' + s[3] + s[4] + ':' + s[6] + s[7]
    } else {
        // if PM, then remove PM and add 12 hours to start of time
        let hour = parseInt( s[0] + s[1] ) + 12;
        output = hour.toString() + ':' + s[3] + s[4] + ':' + s[6] + s[7]
    }
    return output;
}

console.log("\n***** Time Conversion - Algo.js ********\n");
console.log("Time Conversion: 07:05:45PM :", timeConversion( '07:05:45PM' ));
console.log("Time Conversion: 12:01:00AM :", timeConversion( '12:01:00AM' ));
console.log("Time Conversion: 06:16:32AM :", timeConversion( '06:16:32AM' ));
console.log("Time Conversion: 06:16:32PM :", timeConversion( '06:16:32PM' ));