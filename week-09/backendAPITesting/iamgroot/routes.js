'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let shipStatus = {
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 0,
    ready: false
}

app.get('/groot', function (req, res) {
    let message = req.query.message;
    let somemessage = {
        "received": "somemessage",
        "translated": "I am Groot!"
    }

    if (message) {
        res.status(200);
        res.json(somemessage);
    } else {
        res.status(400);
        res.json({ "error": "I am Groot!" })
    };
});

app.get('/yondu', function (req, res) {
    let distance = req.query.distance;
    let time = req.query.time;
    let speed = distance / time;
    if (distance && time) {
        let result = {
            "distance": parseInt(distance),
            "time": parseInt(time),
            "speed": speed,
        }
        res.status(200);
        res.json(result);
    } else {
        res.status(400);
        res.json({ "error": "I am Yondu!" })
    }
});

app.get('/rocket', function (req, res) {
    if (shipStatus.shipstatus == 0) {
        shipStatus.shipstatus = "empty";
    } else if (shipStatus.shipstatus == 100) {
        shipStatus.shipstatus = "full";
    } else if (shipStatus.shipstatus > 100) {
        shipStatus.shipstatus = "overloaded";
    }
    res.status(200);
    res.json(shipStatus);
});

app.post('/rocket/fill', function (req, res) {
    let caliber = req.query.caliber;
    let amount = req.query.amount;
    if (caliber == "50" || caliber == "30" || caliber == "25" && amount) {
        let result = {
            "received": caliber,
            "amount": parseInt(amount),
            "shipstatus": (parseInt(amount) / 12500) * 100 + "%",
            "ready": false
        }

        if (shipStatus.shipstatus == "empty") {
            shipStatus.shipstatus = 0;
        }

        if (caliber === "25") {
            shipStatus.caliber25 += parseInt(amount);
        } else if (caliber === "30") {
            shipStatus.caliber30 += parseInt(amount);
        } else if (caliber === "50") {
            shipStatus.caliber50 += parseInt(amount);
        }
        shipStatus.shipstatus += (parseInt(amount) / 12500) * 100;

        if (shipStatus.shipstatus >= 100) {
            shipStatus.ready = true
        }
        res.status(200);
        res.json(result);
    } else {
        res.status(404);
        res.json({ "error": "You made an error in specification of how much and what" });
    }
});



// function isNaturalNumber(str) {
//     let pattern = /^(0|([1-9]\d*))$/;
//     return pattern.test(str);
// }

module.exports = app;