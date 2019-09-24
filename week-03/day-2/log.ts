// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let fs = require('fs');

let content = fs.readFileSync("log.txt", "utf8");

// function ipAddressess (){
    
// }

let lines = content.split('\r\n');
// for(let i = 0; i<lines.length; i++) {
//     lines[i].splice(0,26, )
// }


console.log(lines);