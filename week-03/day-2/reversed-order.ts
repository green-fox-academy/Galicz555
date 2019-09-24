// Create a method that decrypts reversed-order.txt

let fs = require('fs');

let content = "";


content = fs.readFileSync("reversed-order.txt", "utf8");

let lines = content.split('\r\n');

// let result = "";
let newTxt = lines.reverse();
// for(let i = 0;i<lines.length;i++) {
//     result +=  newTxt[i];
// }
let result = newTxt.join("\r\n")

console.log(result);