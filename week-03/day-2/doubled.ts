// Create a method that decrypts duplicated-chars.txt

let fs = require('fs');

let content = "";


content = fs.readFileSync("duplicated-chars.txt", "utf8");

let characters = content.split('');

let newTxt: string = "";

// characters.forEach(function (e){
//     if (e !== e+1) {
//     newTxt += e}
// });
for(var i = 0;i<characters.length;i++) { 
    if (characters[i] !== characters[i+1]){
        newTxt += characters[i]
    } 
}


console.log(newTxt);

// let result = newTxt.join();
// console.log(result)
