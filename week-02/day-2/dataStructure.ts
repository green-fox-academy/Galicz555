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


//list introduction 2
// let ListA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
// let ListB = [...ListA];
// console.log(ListB);
// console.log(ListA.indexOf("Durian"));
// ListB.splice(3,1);
// console.log(ListB);
// ListA.splice(3,0,"Kiwi");
// console.log(ListA);
// console.log("The length of ListA: " + ListA.length + ", compared to length of ListB: " +ListB.length);
// console.log(ListA.indexOf("Avocado"));
// console.log(ListB.indexOf("Durian"));
// ListB.push("Passion fruit", "Pomelo");
// console.log(ListB);
// console.log(ListA[2]);

// map introduction 2
// let stuff = {
//     "978-1-60309-452-8":"A Letter to Jo",
//     "978-1-60309-459-7":"Lupus",
//     "978-1-60309-444-3":"Red Panda and Moon Bear",
//     "978-1-60309-461-0":"The Lab"
// }
// let keyArray: string[] = Object.keys(stuff);

// for (let i = 0; i < keyArray.length; i++){
//     console.log(`${stuff[keyArray[i]]} (ISBN: ${keyArray[i]})`)
// }

// delete stuff["978-1-60309-444-3"];
// delete stuff["978-1-60309-461-0"]
// stuff["978-1-60309-450-4"] = "They Called Us Enemy";
// stuff["978-1-60309-453-5"] = "Why Did We Trust Him?";

// // 978-1-60309-450-4	They Called Us Enemy
// // 978-1-60309-453-5	Why Did We Trust Him?

// console.log(stuff);
// console.log(Object.hasOwnProperty(478-0-61159-424-8));

// console.log(stuff["978-1-60309-453-5"]);

// We are going to represent our expenses in a list containing integers.

// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

// let expenses : number [] = [500, 1000, 1250, 175, 800, 120];

// function application(x){ 
//     let total = x.reduce(function(a, b) {
//         return a + b;
//     });
//     console.log("We spent " + total);

//     let total2 = x.reduce(function(a, b) {
//         return Math.max(a, b);
//     })
//     console.log("Our greates expense is " + total2);
    
//     let total3 = x.reduce(function(a, b) {
//         return Math.min(a, b);
//     })
//     console.log("Our cheapest expense is " + total3);

//     let total4 = x.reduce(function(a, b) {
//         return (a + b) /2
//     })
//     console.log("Our average spendings " + total4);
// }

// application(expenses);

// let telephoneBook = {
//     "Name (key)":   "Phone number (value)",
//     "William A. Lathan":    "405-709-1865",
//     "John K. Miller":"402-247-8568",
//     "Hortensia E. Foster":	"606-481-6467",
//     "Amanda D. Newland":    "319-243-5613",
//     "Brooke P. Askew":	"307-687-2982",
// }



// console.log(telephoneBook["John K. Miller"]);

// let findName: string = "";
// let names: string[] = Object.keys(telephoneBook);
// for (let i = 0; i < names.length; i++){
//     if(telephoneBook[names[i]] == "307-687-2982"){
//         findName = names[i];
//     }
// };
// console.log('The number 307-687-2982 belongs to ' + findName);

// console.log(telephoneBook.hasOwnProperty("Chris E. Myers"));


// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?

// let shoppingList : string [] = ["Eggs", "milk", "fish", "apples", "bread", "chicken"];

// let x = "milk"
// function doWeHave (e){
//     return 
// console.log(shoppingList.some(doWeHave));(e == x);
// }

// let milk: number = 0;
// let bananas: number = 0;

// for (let i = 0; i < shoppingList.length; i++){
//     if(shoppingList[i] == "milk"){
//         milk++;
//     };
//     if(shoppingList[i] == "bananas"){
//         bananas++;
//     }
// }
// if(milk > 0){
//     console.log("Our shopping list contains milk!");
// } else {
//     console.log("We're not buying milk today.")
// }
// if (bananas > 0) {
//     console.log("Our shopping list contains bananas!")
// } else {
//     console.log("We're not buying bananas today.")
// }

let productDatabase = {
    "Eggs":	200,
    "Milk":	200,
    "Fish":	400,
    "Apples":	150,
    "Bread":	50,
    "Chicken":	550,
}

function application (productDatabase) {
    console.log("The fish costs " + productDatabase["Fish"]);
    let keyArray: number[] = Object.values(productDatabase);
    let total3 = keyArray.reduce(function(a, b) {
        return Math.max(a, b);
    })
    console.log("Our expensive product is " + total3);
}


application(productDatabase)