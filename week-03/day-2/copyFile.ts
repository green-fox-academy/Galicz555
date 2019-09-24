// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function copy (x: string, y: string) {
    // try{
        fs.readFile(x, 'utf8', function(err, data) {
            fs.writeFile(y, data);
        });
    // }
    // catch (err) {
    //     if (!err){
    //             console.log(true);
    //     } else {
    //             console.log(false);
    //     }
    // }
}

copy('readMe.txt', 'writeMe.txt');