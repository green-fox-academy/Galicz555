// 'use strict';

// let example: string = 'In a dishwasher far far away';
// let changed = /dishwasher/;
// // I would like to replace "dishwasher" with "galaxy" in this example
// // Please fix it for me!
// // Expected ouput: In a galaxy far far away
// let newExample = example.replace(changed, 'galaxy');

// real solution:
// console.log(example.replace(/dishwasher/, "galaxy"));




// console.log(newExample);

// export = example;

// let list: string [] = ["dile", "stuff"];
// console.log(list.length);

'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods


// Still have to do!!!!!
// let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
// // Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"
// let newPlanetList = planetList.splice(5, 0, "Saturn");
// console.log(planetList);

// function putSaturn(list) {
//     newPlanetList.splice(6,1);
//     return list;
// }
// console.log(putSaturn(list));

// // export = putSaturn;


'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
function reverse(reversed){
    let splitString = reversed.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverse(reversed));

// export = reverse;

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }
 
// reverseString("hello");