'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();
const path = require('path');
const headers = (req, res, next) => {
    req.headers.accept["application/json"];
    res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "application/json");
    res.status(200);
    next();
};

app.use(express.static(path.join(__dirname, 'src')));
app.use(jsonParser);
app.use(urlencodedParser);

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
});

conn.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/pages/index.html");
})

// app.post('/posts/:id', [headers], (req, res) => {
//     let update = `UPDATE posts SET title=${conn.escape(req.body.title)}, url=${conn.escape(req.body.url)} WHERE id =${conn.escape(req.params.id)}`;
//     let result = `SELECT * FROM posts WHERE id =${conn.escape(req.params.id)}`;
//     conn.query(`${update}; ${result}`, (err, rows) => {
//         if (err) {
//             console.log(err.toString());
//             res.status(500).send('Database error');
//             return;
//         }
//         res.redirect("http://localhost:3000");
//     });
// });

app.get('/aliaser', [headers], (req, res) => {
    console.log(req.body)
    let search = `SELECT * FROM aliaser WHERE alias=${conn.escape(req.body.alias)}`;
    if (search) {
        conn.query(`${search}`, (err, rows) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.send(rows[0]);
        });
    }
});

app.post('/api/links', [headers], (req, res) => {
    let search = `SELECT * FROM aliaser WHERE alias=${conn.escape(req.body.alias)}`;
    conn.query(search, (err, rows) => {
        if (err) {
            res.status(500).send('Database error');
            return;
        }
        if (!rows[0]) {
            let secretCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            let sql = `INSERT INTO aliaser (url, alias, hitCount, secretCode) VALUES (${conn.escape(req.body.url)}, ${conn.escape(req.body.alias)}, 0, ${secretCode});`;
            conn.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).send('Database error');
                    return;
                }
                res.send(rows[0]);
            });
        } else {
            console.log("did nothing")
        }
    })
});






// app.get('/add', (req, res) => {
//     res.sendFile(__dirname + '/src/pages/addPost.html');
// })
// app.get('/edit.html', (req, res) => {
//     res.sendFile(__dirname + '/src/pages/edit.html');
// })
// app.get('/loginPage.html', (req, res) => {
//     res.sendFile(__dirname + '/src/pages/loginPage.html');
// })

// app.get('/hello', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*' && "Content-type", "text")
//     res.status(200);
//     res.send('hello world');
// });

// app.get('/posts', [headers], (req, res) => {
//     if (!req.query.id) {
//         conn.query('SELECT * FROM posts;', (err, rows) => {
//             if (err) {
//                 res.status(500).send('Database error');
//                 return;
//             }
//             let data = { "posts": [] };
//             for (let i = 0; i < rows.length; i++) {
//                 data.posts.push(rows[i]);
//             }
//             res.send(data);
//         });
//     } else if (req.query.id) {
//         let result = `SELECT * FROM posts WHERE id="${req.query.id}"`;
//         conn.query(`${result}`, (err, rows) => {
//             if (err) {
//                 console.log(err.toString());
//                 res.status(500).send('Database error');
//                 return;
//             }
//             res.send(rows[0]);
//         });
//     }
// });

// app.post('/posts', [headers], (req, res) => {
//     let sql = `INSERT INTO posts (title, url, timestamp) VALUES ("${req.body.title}", "${req.body.url}", ${Date.now()});`;
//     conn.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).send('Database error');
//             return;
//         }
//         res.redirect("http://localhost:3000")
//     });
// });



// app.put('/posts/:id/:action', [headers], (req, res) => {
//     let x = 0;
//     if (req.params.action === "upvote") {
//         x = 1;
//     } else if (req.params.action === "downvote") {
//         x = -1;
//     }
//     let actionQuery = `UPDATE posts SET score=score+${conn.escape(x)} WHERE id =${conn.escape(req.params.id)}`;
//     let resultQuery = `SELECT * FROM posts WHERE id =${conn.escape(req.params.id)}`;
//     conn.query(`${actionQuery}; ${resultQuery}`, (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         res.send(rows[1]);
//     });
// });

// app.delete('/posts/:id', [headers], (req, res) => {
//     let result = `SELECT * FROM posts WHERE id =${conn.escape(req.params.id)}`;
//     let eliminate = `DELETE FROM posts WHERE id =${conn.escape(req.params.id)}`;
//     conn.query(`${result}; ${eliminate}`, (err, rows) => {
//         if (err) {
//             console.log(err.toString());
//             res.status(500).send('Database error');
//             return;
//         }
//         res.send(rows[0]);
//     });
// });

module.exports = app;