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


app.get('/trackList', [headers], (req, res) => {
    let search = `SELECT * FROM musics;`;
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

app.get('/trackList/:playlist_id', [headers], (req, res) => {
    let search = `SELECT * FROM musics WHERE id=${conn.escape(req.params.playlist_id)};`;
    conn.query(`${search}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.post('/trackList/:playlist_id', [headers], (req, res) => {
    console.log(req.body.playlist)
    console.log(req.params.playlist_id)
    let update = `UPDATE musics SET playlist_id=${conn.escape(req.params.playlist_id)} WHERE id=${conn.escape(req.body.playlist)};`;
    conn.query(`${update}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.get('/playLists', [headers], (req, res) => {
    conn.query(`SELECT * FROM playLists;`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.send(rows);
    });
});

app.post('/playLists', [headers], (req, res) => {
    let search = `SELECT * FROM playLists WHERE playlist=${conn.escape(req.body.alias)}`;
    conn.query(search, (err, rows) => {
        if (err) {
            res.status(500).send('Database error1');
            return;
        }
        if (!rows[0]) {
            let sql = `INSERT INTO playLists (playlist, system_info) VALUES (${conn.escape(req.body.playlist)}, 0);`;
            conn.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).send('Database error2');
                    console.log(err)
                    return;
                }
                conn.query(`SELECT * FROM playLists`, (err, rows) => {
                    if (err) {
                        res.status(500).send('Database error1');
                        return;
                    } else { res.send(rows) }
                })
            });
        } else {
            console.log("did nothing");
            res.send(rows);
        }
    })
});

app.delete('/playLists/:id', [headers], (req, res) => {
    let result = `SELECT * FROM playLists WHERE id =${conn.escape(req.params.id)}`;
    let eliminate = `DELETE FROM playLists WHERE id =${conn.escape(req.params.id)} AND system_info = 0`;
    conn.query(`${result}`, (err, rows) => {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        if (!rows[0]) {
            res.json({ "error": "Couldn't find the playlist" });
        } else {
            conn.query(`${eliminate}`, (err, rows) => {
                if (err) {
                    console.log(err.toString());
                    res.status(500).send('Database error');
                    return;
                }
                if (rows.affectedRows == 1) {
                    res.send("Fatality!!!");
                } else if (rows.affectedRows == 0) {
                    res.sendStatus(403);
                }
            })
        }
    });
});

module.exports = app;