// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function copy(x: string, y: string) {
    fs.readFile(x, 'utf8', function (err, data) {
        fs.writeFile(y, data, function (err, result) {
            if (!err) console.log(true);
        })
    });
}

copy('readMe.txt', 'writeMe.txt');