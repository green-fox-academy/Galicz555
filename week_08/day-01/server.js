'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();
const connection = mysql.createConnection({ multipleStatements: true });

app.use(bodyParser.json());

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

app.get('/hello', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
    res.status(200);
    res.send('<p>hello world</p>');
});

app.get('/posts', function (req, res) {
    conn.query('SELECT * FROM posts;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        let data = { "posts": [] };
        for (let i = 0; i < rows.length; i++) {
            data.posts.push(rows[i]);
        }
        res.send(data);
    });
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
    res.status(200);
    req.accepts("application/json")
});

app.post('/posts', function (req, res) {
    let sql = `INSERT INTO posts (title, url, timestamp) VALUES ("${req.body.title}", "${req.body.url}", NOW());`;
    conn.query(sql, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
    req.headers.accept["application/json"];
    req.headers["content-type", "application/json"];
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json");
    res.status(200);
});

// RÉSZLETES verzió ha 2 apit kérnek
// app.put('/posts/:id/upvote', function (req, res) {
//     let upvote = `UPDATE posts SET score=score+1 WHERE id =${connection.escape(req.params.id)}`;
//     let result = `SELECT * FROM posts WHERE id =${connection.escape(req.params.id)}`;
//     conn.query(`${upvote}; ${result}`, function (err, rows) {
//         if (err) {
//             throw err;
//         }
//         res.send(rows[1]);
//     });
//     req.headers.accept["application/json"];
//     res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
//     res.status(200);
// });

// app.put('/posts/:id/downvote', function (req, res) {
//     let downvote = `UPDATE posts SET score=score-1 WHERE id =${connection.escape(req.params.id)}`;
//     let result = `SELECT * FROM posts WHERE id =${connection.escape(req.params.id)}`;
//     conn.query(`${downvote}; ${result}`, function (err, rows) {
//         if (err) {
//             throw err;
//         }
//         res.send(rows[1]);
//     });
//     req.headers.accept["application/json"];
//     res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
//     res.status(200);
// });

//RÖVIDEBB verzió
app.put('/posts/:id/:action', function (req, res) {
    let x = 0;
    if(req.params.action === "upvote"){
        x = 1;
    } else if(req.params.action === "downvote"){
        x = -1;
    }
    let actionQuery = `UPDATE posts SET score=score+${connection.escape(x)} WHERE id =${connection.escape(req.params.id)}`;
    let resultQuery = `SELECT * FROM posts WHERE id =${connection.escape(req.params.id)}`;
    conn.query(`${actionQuery}; ${resultQuery}`, function (err, rows) {
        if (err) {
            throw err;
        }
        req.headers.accept["application/json"];
        res.set({
        'Access-Control-Allow-Origin': '*',
        "Content-type": "application/json",
        "Status": 200}).send(rows[1]);
    });
});


app.delete('/posts/:id', function (req, res) {
    let result = `SELECT * FROM posts WHERE id ="${req.params.id}"`;
    let eliminate = `DELETE FROM posts WHERE id ="${req.params.id}"`;
    conn.query(`${result}; ${eliminate}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows[0]);
    });
    req.headers.accept["application/json"];
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
    res.status(200);
});

app.put('/posts/:id', function (req, res) {
    let update = `UPDATE posts SET title="${req.body.title}", url="${req.body.url}" WHERE id ="${req.params.id}"`;
    let result = `SELECT * FROM posts WHERE id ="${req.params.id}"`;
    conn.query(`${update}; ${result}`, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows[1]);
    });
    req.headers.accept["application/json"];
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json")
    res.status(200);
});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
