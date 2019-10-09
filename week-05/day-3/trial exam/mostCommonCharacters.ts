// Most Common Characters
// Write a function that takes a filename as a parameter. Return the 2 most common characters and their occurrences in the file's content.

// If the file does not exist throw an exception with the following message: "File does not exist!"

// Example

// Example file can be found here

// Output

// {
//     "e": 6,
//     "l": 4
// }

'use strict';

const fs = require('fs');

// Try functionality verified by modifying a letter in the filename and changing the filepath.
try {
    if(!fs.readFileSync('./../countchar.txt', 'utf-8')) {
        throw 'error';
    }
} catch(error) {
    console.log('File does not exist!');
}


let stringToEvaluate: string = fs.readFileSync('./../countchar.txt', 'utf-8')

function countLetters (string): any {
    let charCounterObject: any = {};

    string.replace(/\S/g, function(letter: string){charCounterObject[letter] = (isNaN(charCounterObject[letter]) ? 1 : charCounterObject[letter] + 1);});
    
    let theTwoLargest: any = {};

    // Finding the key belonging to the largest value with .reduce, then assigning it to the output array. Then setting it to 0, and running it again to find the 2nd biggest.
    for (let i: number = 0; i < 2; i++){
        theTwoLargest[Object.keys(charCounterObject).reduce((a, b) => charCounterObject[a] > charCounterObject[b] ? a : b)] = charCounterObject[Object.keys(charCounterObject).reduce((a, b) => charCounterObject[a] > charCounterObject[b] ? a : b)];

        charCounterObject[Object.keys(charCounterObject).reduce((a, b) => charCounterObject[a] > charCounterObject[b] ? a : b)] = 0;
    }

    return theTwoLargest;
}

console.log(countLetters(stringToEvaluate));