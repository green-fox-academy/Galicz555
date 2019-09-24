// Create a method that decrypts reversed-lines.txt

let fs = require('fs');

let content = "";


content = fs.readFileSync("reversed-lines.txt", "utf8");

let characters = content.split('');

// let newTxt: string = "";

// for(var i = 0;i<characters.length;i++) { 
//     if (characters[i] !== characters[i+1]){
//         newTxt += characters[i]
//     } 
// }
let result = "";
let newTxt = characters.reverse();
for(let i = 0;i<characters.length;i++) {
    result +=  newTxt[i];
}


console.log(result);
