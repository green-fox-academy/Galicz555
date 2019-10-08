'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(reversed) {
    let splitString = reversed.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverse(reversed));

export = reverse;

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}