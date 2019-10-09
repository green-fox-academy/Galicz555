
let fs = require('fs');

function copy(x: string, y: string) {
    fs.readFile(x, 'utf8', function (err, data) {
        fs.writeFile(y, data, function (err, result) {
            if (!err) console.log(true);
        })
    });
}

copy('readMe.txt', 'writeMe.txt');