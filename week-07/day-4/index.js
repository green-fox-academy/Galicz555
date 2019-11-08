'use strict'

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();


let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

conn.query('SELECT * FROM book_mast;', function (err, rows) {
    if (err) {
        console.log(err.toString());
    }

    console.log('Data received from Db:\n');
    console.log(rows);
});


app.get('/', function (req, res) {
    conn.query('SELECT * FROM book_mast;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(rows);
    });
});

app.get('/book_mast/bookTitle', function (req, res) {
    conn.query('SELECT book_name FROM book_mast;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(rows);
    });
});

app.get('/book_mast/bookFullData', function (req, res) {
    conn.query('SELECT book_name, aut_name, book_price, pub_name, cate_descrip FROM book_mast\
    INNER JOIN author ON book_mast.aut_id = author.aut_id\
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id\
    INNER JOIN category ON book_mast.cate_id = category.cate_id;', function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(rows);
    });
});


app.get('/book_mast/bookCategoryData', function (req, res) {
    if (req.query.category == 'Science') {
        // conn.query(`SELECT book_mast.book_name FROM book_mast,category WHERE category.cate_descrip=? AND book_mast.cate_id=category.cate_id;`,[req.query.category],
        conn.query(`SELECT book_name, aut_name, book_price, pub_name, cate_descrip
    FROM book_mast
    INNER JOIN author ON book_mast.aut_id = author.aut_id
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id
    INNER JOIN category ON book_mast.cate_id = category.cate_id
    WHERE cate_descrip ="${req.query.category}";`, function (err, rows) {
    // WHERE cate_id =?;`[req.query.category], function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            console.log("hej")
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(rows);
        });
    } else {
        console.log(req.query.category);
        conn.query(`SELECT book_name, aut_name, book_price, pub_name, cate_descrip FROM book_mast
    INNER JOIN author ON book_mast.aut_id = author.aut_id
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id
    INNER JOIN category ON book_mast.cate_id = category.cate_id;`, function (err, rows) {
            if (err) {
                console.log(err.toString());
                res.status(500).send('Database error');
                return;
            }
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.send(rows);
        });
    }
});





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

