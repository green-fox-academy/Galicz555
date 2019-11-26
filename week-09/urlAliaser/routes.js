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
    res.setHeader('Access-Control-Allow-Origin', "*");
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


app.get('/aliaser', [headers], (req, res) => {
    let search = `SELECT * FROM aliaser;`;
    if (search) {
        conn.query(`${search}`, (err, rows) => {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.send(rows);
        });
    }
});

app.post('/api/links', [headers], (req, res) => {
    let search = `SELECT * FROM aliaser WHERE alias=${conn.escape(req.body.alias)}`;
    conn.query(search, (err, rows) => {
        if (err) {
            res.status(500).send('Database error1');
            return;
        }
        if (!rows[0]) {
            let secretCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
            let sql = `INSERT INTO aliaser (url, alias, hitCount, secretCode) VALUES (${conn.escape(req.body.url)}, ${conn.escape(req.body.alias)}, 0, ${secretCode});`;
            conn.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).send('Database error2');
                    console.log(err)
                    return;
                }
                res.send(rows);
            });
        } else {
            console.log("did nothing");
            res.send(rows);
        }
    })
});

app.get('/a/:alias', [headers], (req, res) => {
    let search = `SELECT * FROM aliaser WHERE alias=${conn.escape(req.params.alias)};`;
    conn.query(`${search}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        if (rows[0]) {
            let count = rows[0].hitCount;
            count += 1;
            let update = `UPDATE aliaser SET hitCount=${count} WHERE alias =${conn.escape(rows[0].alias)}`;
            conn.query(`${update}`, (err, rows) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
                res.redirect("http://localhost:3000");
            });
        } else {
            res.sendStatus(404)
        }
    });
});

app.get('/api/links', [headers], (req, res) => {
    let search = `SELECT id, url, alias, hitCount FROM aliaser;`;
    conn.query(`${search}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        let data = [];
        for (let i = 0; i < rows.length; i++) {
            data.push(rows[i]);
        }
        res.send(data);
    });
});

app.delete('/api/links/:id', [headers], (req, res) => {
    let result = `SELECT * FROM aliaser WHERE id =${conn.escape(req.params.id)}`;
    let eliminate = `DELETE FROM aliaser WHERE secretCode =${conn.escape(req.body.secretCode)}`;
    conn.query(`${result}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        if (!rows[0]) {
            res.sendStatus(404);
        } else {
            conn.query(`${eliminate}`, (err, rows) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
                if (!rows[0]) {
                    res.sendStatus(403);
                } else {
                    res.sendStatus(204)
                    res.send(rows[0]);
                }
            })
        }
    });
});

module.exports = app;