const express = require('express')

let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // render `home.ejs`
    console.log(req.query);
    res.render('home', {
        qs: Object.entries(req.query).length == 0 ? { name: 'Guest' } : req.query,
        title: 'Greetings!'
    });
});

app.listen(3000);