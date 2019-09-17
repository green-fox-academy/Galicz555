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

// 'use strict';
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

// export = putSaturn;


// 'use strict';
// // Create a function that can reverse a string, which is passed as the parameter
// // Use it on this reversed string to check it!

// let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
// function reverse(reversed){
//     let splitString = reversed.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
// }
// console.log(reverse(reversed));

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


// 'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

// let url: string = 'https//www.reddit.com/r/nevertellmethebots';
// let bad: string = "bots";
// let good: string = "odds"

// url = url.replace(bad, good);

// url = url.substring(0,5) + ':' + url.substring(5);

// console.log(url);


// console.log();

// 'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

// let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
// quote = quote.substring(0,20) +" always takes longer than" +quote.substring(20);

// console.log(quote);

// 'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

// let todoText: string = ' - Buy milk\n';
// todoText = todoText.substring(0) + "My todo:\n" + todoText.substring(1);
// todoText = todoText.substring(0) + "- Download games\n";
// todoText = todoText.substring(0) + "\t - Diablo";
// // todoText = todoText.substring(0) + " - Diablo:" + todoText.substring(0);

// console.log(todoText);

// 'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

// let out: string = '';
// let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

// let hashmap = {
//   7: 'run around and desert you',
//   50: 'tell a lie and hurt you ',
//   49: 'make you cry, ',
//   2: 'let you down',
//   12: 'give you up, ',
//   1: 'Never gonna ',
//   11: '\n',
//   3: 'say goodbye '
// };

// notSoCrypticMessage.forEach (element=>{
//     out = out.concat(hashmap[element]);
// });


// List introducitons 1
// console.log(out)

// let array: string [] = [];
// array.push("William");
// array.push("Jhon");
// array.push("Amanda");
// for(let i = 0; i<array.length; i++) { 
//     if(i === 0 || i===2){
//     console.log(i+1 + ". "  + array[i])} ;
// };


// let array: string [] = [];
// array.push("William");
// array.push("Jhon");
// array.push("Amanda");
// let n = array.length - 1;
// for(let i = n; i>=0; i--) {
//     if(i === 0 || i===2){
//     console.log(array[i])} ;
// };

// let array: string [] = [];
// array.push("William");
// array.push("Jhon");
// array.push("Amanda");
// let n = array.length - 1;
// for(let i = n; i>=0; i--) {
//     if(i === 0 || i===2){
//     console.log(array[i])} ;
// };
// array.pop();
// array.pop();
// array.pop();
// console.log(array);

// Map introductions 1
// let empty = {
//     97: "a",
//     98:	"b",
//     99:	"c",
//     65:	"A",
//     66:	"B",
//     67:	"C",
// };
// console.log(Object.keys(empty));
// let values = Object.keys(empty).map(function(element){
//     return empty[element];
// });
// console.log(values);
// empty[68] = "D";
// console.log(Object.keys(empty).length);
// console.log(empty[99]);
// delete empty[97];
// console.log(empty);
// console.log(empty[100]);
// Object.keys(empty).forEach(function (key) {delete empty[key]});
// console.log(empty);