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
//         let n = a * i;
//         return n;
//     }
// }
// let myResult = factorio(3);
// console.log(myResult);

// function factorio(a: number) {
//     if (a === 0 || a === 1)
//     return 1;

//     for (let i = a - 1; i >= 1; i--) {
//       a = a * i;
//     }
//     return a;
// }
// let myResult = factorio(5);
// console.log(myResult)

//-  Create a function called `printParams`
//   which logs to the console the input parameters
//  (can have multiple number of arguments)
function printParams(...params) {
    console.log(arguments);
    console.log(params);
}
printParams(6,5,898989);
