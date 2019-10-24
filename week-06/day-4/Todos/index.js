const express = require('express');
const app = express();
const PORT = 3000;

const ThingsToDos = {
    title: "ThingsToDo:",
    todos: [
        'get up',
        'survive',
        'go back to bed',
    ]
}

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', ThingsToDos);
});


// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});