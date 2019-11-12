'use strict';

const express = require('express');
const app = express();

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

module.exports = app;