'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');


test('Groot test 1', function (t) {
    request(app)
        .get('/groot')
        .query({ message: 'somemessage' })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            let somemessage = {
                "received": "somemessage",
                "translated": "I am Groot!"
            }
            t.error(err, 'No error');
            t.same(res.body, somemessage, 'Received right status code and json message');
            t.end();
        });
});

test('Groot test 2', function (t) {
    request(app)
        .get('/groot')
        .query({})
        .expect('Content-Type', /json/)
        .expect(400)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.same(res.body, { "error": "I am Groot!" }, 'Received right status code and json message');
            t.end();
        });
});