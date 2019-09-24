// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');



function code (x:string){
    try{
        fs.writeFileSync('my-file.txt', x)
    } catch {
        console.log("Unable to write file: my-file.txt")
    }
}

code('galiczMihály')