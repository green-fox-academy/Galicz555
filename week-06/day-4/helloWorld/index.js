const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        title: 'Hello World',
        objective: 'Destroy the world',
        reason: 'I don"t like them'
    });
});

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});