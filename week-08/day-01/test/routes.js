'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('hello world test', function (t) {
    request(app)
        .get('/hello')
        .expect('Content-Type', /html/)
        .expect(200)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.same('hello world', 'hello world', 'Hello world test and test itself works');
            t.end();
        });
});

// test('get everything test', function (t) { //still in work not enough knowledge
//     request(app)
//         .get('/posts')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function (err, res) {
//             let somemessage = {
//                 "received": "somemessage",
//                 "translated": "I am Groot!"
//             }
//             t.error(err, 'No error');
//             t.same(res.body, somemessage, 'Received everything from database');
//             t.end();
//         });
// });