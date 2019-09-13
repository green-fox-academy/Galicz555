/*
// 2nd excercise

console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');

// 3rd excersice

console.log("Hello, Daniel!");
console.log("Hello, Gábor");
console.log("Hello Kriszti");

let myName: string = "Galicz Mihály";
let myAge: number = 29;
let myHeight: number = 1.71;
console.log(myName);
console.log(myAge);
console.log(myHeight);


let x: number = 22;
let y: number = 13;
console.log(y + x);
console.log(y - x);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let codingPerDay: number = 6;
let semesterInWeekDays: number = 17*5;
let codingHours= (codingPerDay*semesterInWeekDays);

console.log(codingHours)

let workHours: number = 17*52
let percentage: number = (codingHours/workHours*100);
console.log(percentage);


// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8'

let favoriteNumber: number = 5;

console.log("'My favorite number is: " + favoriteNumber +"'");

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

a = 526;
b = 123;


console.log(a);
console.log(b);

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let heightInM2: number = heightInM*heightInM;

// Print the Body mass index (BMI) based on these values

let BMI: number = (massInKg/heightInM2)
console.log(BMI)

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean



let myName: string = "Galicz Mihály";
let myAge: number = 29;
let myHeight: number = 1.71;
let married: boolean = false;

console.log(myName);
console.log(myAge);
console.log(myHeight);
console.log(married);

let a: number = 3;
a = a + 10;
// make it bigger by 10

console.log(a);

let b: number = 100;
b = b - 7;
// make it smaller by 7

console.log(b);

let c: number = 44;
c = c * 2;
// double c's value

console.log(c);

let d: number = 125;
d = d / 5;
// divide d's value by 5

console.log(d);

let e: number = 8;
e *= 8;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let f: Boolean = (f1 > f2)
console.log(f);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
let g: boolean = (g2*2 > g1);
console.log(g);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let zs: boolean = (h / 11 === 0);
console.log(zs);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let i: boolean = (i1 < i2 ** 3 && i1 > i2 ** 2);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let k: boolean = (j / 3 === 0 || j / 5 === 0)
console.log(k)
// tell if j is divisible by 3 or 5 (as a boolean)


// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 4.5;
let b: number = 2.7;
let c: number = 9.8;
let surfaceArea: number = (2 * (a * b + b * c + a * c));
let volume: number = (a * b * c);
console.log("Surface Area: " + surfaceArea);
console.log("Volume: "+ volume);

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentOverallSeconds: number = (currentSeconds + currentMinutes * 60 + currentHours * 60 ** 2);
let currentLeftOverSeconds: number = (24 * 60 **2 - currentOverallSeconds);

console.log(currentLeftOverSeconds);




let a: number = 24;
let out: number = 0;
// if a is even increment out by one
if (a % 2 === 0 ) {
    out++;
}
console.log(out);


let b: number = 13;
let out2: string = '';
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

if ( b > 10 && b < 20 ) {
    out2 = "Sweet!";
    console.log(out2);
} else if ( b < 10 ) {
    out2 = "Less!";
    console.log(out2);
} else if ( b > 20) {
    out2 = "More!";
    console.log(out2);
}




let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false != false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits >= 50 && isBonus == false) {
    console.log(c - 2);
} else if (credits < 50 && isBonus == false) {
    console.log(c--);
} else if (isBonus == true) {
    console.log(c);
}




let d: number =  8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

if (d % 4 === 0 && time <= 200) {
    out3 = '"check"';
} else if (time > 200) {
    out3 = '"Time out"';
} else {
    out3 = '"Run Forest Run!"';
}

console.log(out3);


// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

for (let i: number = 0; i < 100; i++){
    console.log("I won't cheat on the exam!");
}


// Create a program that prints all the even numbers between 0 and 500
for (let i: number = 0; i <= 500; i++){
    console.log(i++);
}

*/

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let x: number = 3;
for (let i: number = 0; i <=10; i++){
    console.log(i * x);
}