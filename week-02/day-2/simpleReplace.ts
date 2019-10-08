'use strict';

let example: string = 'In a dishwasher far far away';
let changed = /dishwasher/;
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

// real solution:
console.log(example.replace(/dishwasher/, "galaxy"));