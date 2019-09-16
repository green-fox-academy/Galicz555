/* Third excercise

// -  Create a variable named `magicNumbers`
//    with the following content: `[1, 3, 5, 7]`
// -  Print the third element of `magicNumbers`

var magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);
*/
// Compare-length exc.

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`
/*
var firstList = [1, 2, 3];
var secondList = [4, 5];
if(secondList.length > firstList.length) {
	console.log("p2 is longer");
}
*/
// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

/* - sum elements excercise
var r = [54, 23, 66, 12];
console.log(r[1] +r[2]);
*/
// swap elemensts excercise
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`


// var abc = ["Arthur", "Boe", "Chloe"].reverse();
// console.log(abc);

// print elements exc.

// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method

//1st version
// var integers = [4, 5, 6, 7];
// for(var i = 0; i<integers.length; i++) { 
// 	console.log(integers[i]) ;
// }
//2nd version
// var integers = [4, 5, 6, 7];
// integers.forEach(function (value) {
//   console.log(value);
// }); 

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

// change element excercise

// var numList = [1, 2, 3, 8, 5, 6].map(function(e){
// 	return e[3] = 4;
// });
// console.log(numList[3]);

//  increment exc.

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

// let numList = [1, 2, 3, 4, 5];
// console.log(numList[2]+1);

// Append a exc.
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

// let animals = ["koal", "pand", "zebr"];
// const product = animals.map(x => x + "a");
// console.log(product);

// double items
// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

// let drinks = ['Gin','Whiskey','Wine','Beer'];
// const product = drinks.map(x => x + x);
// console.log(product);


// -  Create a two dimensional list
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`

//colors excercise

// let colors : string [][] = [
// 	["Shades of green: ", "lime, " + "forest green, " + "olive, " + "pale green, " + "spring green"],
// 	["Shades of red: ", "orange red, " + "red, " + "tomato"],
// 	["Shades of pink: ", "orchid, " + "violet, " + "pink, " + "hot pink"],
// ];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

// sum all elements
// 1st and easies solution
// let ai = [3, 4, 5, 6, 7];
// console.log(ai[0] + ai[1] + ai[2] + ai[3] + ai[4]);
// 2nd solution
// let ai = [3, 4, 5, 6, 7].reduce(function(a, b){return 	a + b; });
// console.log(ai);


// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
/////////////////////////////

// let one = 1;
// let zero = 0;
// let lineCount = 4;

// for(let i: number = 0; i < lineCount; i++) {
// let matrix = [
// 	[0+''+0+''+0+''+1],
// 	[0+''+0+''+1+''+0],
// 	[0+''+1+''+0+''+0],
// 	[1+''+0+''+0+''+0];
// 	console.log(matrix);
// ];
// };
////////////////////////////////////////

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

// let numList = [3, 4, 5, 6, 7].revers();
// console.log(numList);

// let numList = [3, 4, 5, 6, 7];
// for(let i: number = 0; i < lineCount; i++)

// let myArray = [3,4,5,6,7];
// let newArray = [];
// for(let i = 0 ;i < myArray.length; i++){
//    newArray[i] = myArray[myArray.length - i -1];
// }
// console.log(newArray);

