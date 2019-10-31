'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;
app.use(bodyParser.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (typeof req.query.input === undefined) {
        let error = {
            "error": "Please provide an input!"
        }
        res.send(error);
    } else {
        let doubling = {
            received: parseInt(req.query.input),
            result: req.query.input * 2
        }
        res.send(doubling);
    }
});

app.get('/greeter', (req, res) => {
    if (req.query.name === undefined && req.query.title === undefined) {
        let errorAll = {
            "error": "Please provide a name and a title!"
        }
        res.send(errorAll);
    } else if (req.query.name === undefined && req.query.title !== undefined) {
        let errorName = {
            "error": "Please provide a name!"
        }
        res.send(errorName);
    } else if (req.query.name !== undefined && req.query.title === undefined) {
        let errorTitle = {
            "error": "Please provide a title!"
        }
        res.send(errorTitle);
    } else {
        let greeter = {
            "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
        }
        res.send(greeter);
    }
});

app.get('/appenda/:appendable', (req, res) => {
    let add = {
        "appended": req.params.appendable + "a"
    }
    res.send(add);
});

app.post('/dountil/:action', (req, res) => {
    let number = req.body.until;
    let dountil = {};
    console.log(req.body.until);
    if (req.params.action === "sum") {
        dountil['result'] = sumTo(number);
    } else if (req.params.action === 'factor') {
        dountil['result'] = factorio(number);
    } else {
        dountil["error"] = "Please provide a number!";
    }
    res.send(dountil);
});

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

function factorio(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

// app.post('/arrays', (req, res) => {
//     let number = req.body.until;
//     let receives = {
//         "what": "sum",
//         "numbers": [1, 2, 5, 10]
//     }
//     let dountil = {};
//     console.log(req.body.until);
//     if (req.params.action === "sum") {
//         dountil['result'] = sumTo(number);
//     } else if (req.params.action === 'factor') {
//         dountil['result'] = factorio(number);
//     } else {
//         dountil["error"] = "Please provide a number!";
//     }
//     res.send(dountil);
// });



app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});