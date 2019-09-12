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