// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

// let baseNum = 123;
// function doubling (baseNum){
//     return baseNum * 2;
// }
// console.log(doubling(baseNum));

// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

// let nameToGreet: string = "Green Fox";
// function greet (nameToGreet){
//     console.log("Greetings, dear " + nameToGreet);
// }
// greet(nameToGreet);

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

// let typo: string = "Chinchill";
// function appendAFunc(typo){
//     return typo + "a";
// }
// console.log(appendAFunc(typo));

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
// function sum (a: number, b: number): number {
//     return (a + b);
// }
// let myResult = sum (7, 8);
// console.log(myResult);

// -  Create a function called `factorio`
//    that returns it's input's factorial

// let i;
// function factorio(a: number) {
//     for(i = 0; i < a; i++){
//          let n = a * i;
//         return n;
//     }
// }
// let myResult = factorio(3);
// console.log(myResult);

// function factorio(a: number) {
//     if (a === 0 || a === 1)
//     return 1;

//     for (let i = a - 1; i >= 1; i--) {
//        a = a * i;
//     }
//     return a;
// }
// let myResult = factorio(16);
// console.log(myResult)

//-  Create a function called `printParams`
//   which logs to the console the input parameters
//  (can have multiple number of arguments)
// function printParams(...params) {
//     console.log(arguments);
//     console.log(params);
// }
// printParams(6,5,898989);


//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

// let numbers: number [] = [];

// let array = [5, 8, 96, 36, 96, 7, 5];

// function unique(array) {
//     let sorted: number = array.sort();
//     for(let i: number = 0; i < array.length; i++) {
//         if(sorted[i] !== sorted[i+1]) {
//             numbers.push(sorted[i])
//         };
//     };
//     return numbers;
// }
// console.log(unique([5, 8, 96, 36, 96, 7, 5]));

// let numbers: number [] = []

// function unique(array){
//     let sorted = array.sort()
//     for(let i:number = 0; i < array.length; i++){
//         if(sorted[i] !== sorted[i+1]){
//             numbers.push(sorted[i]);
//         };
//     };
//     return numbers;
// };
// console.log(unique([345, 265, 2, 3, 66, 2, 345]));

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending


function bubble (array){
        let sorted = array.sort(function(a, b){return a-b})
        return sorted;
};


function advancedBubble (array, decider){

    if(decider === true){
        let sorted = array.sort(function(a, b){return a-b})
        return sorted;
    } else {
        let sorted2 = array.sort(function(a, b){return b-a})
        return sorted2;
    }
}


//console.log(advancedBubble([23, 15, 89, 65]));


//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], false));
//  should print [34, 24, 12, 9, 5]





