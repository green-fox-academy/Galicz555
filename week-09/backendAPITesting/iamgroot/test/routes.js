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

test('yondu', function (t) {
    request(app)
        .get('/yondu')
        .query({ distance: 100.0, time: 10.0 })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            let result = {
                "distance": 100.0,
                "time": 10.0,
                "speed": 100.0 / 10.0,
            }
            t.error(err, 'No error');
            t.same(res.body, result, 'Tested result and calculation');
            t.end();
        });
});

test('yondu 2', function (t) {
    request(app)
        .get('/yondu')
        .query({})
        .expect('Content-Type', /json/)
        .expect(400)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.same(res.body, { "error": "I am Yondu!" }, 'Received right status code and json message');
            t.end();
        });
});

test('ship status', function (t) {
    request(app)
        .get('/rocket')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            let status = {
                "caliber25": 0,
                "caliber30": 0,
                "caliber50": 0,
                "shipstatus": "empty",
                "ready": false
            }
            t.error(err, 'No error');
            t.equal(res.body.length, status.length, 'Correct number of statuses');
            t.same(res.body, status, 'Received ship status');
            t.end();
        });
});

test('ship fill', function (t) {
    request(app)
        .post('/rocket/fill')
        .query({ caliber: '50', amount: '5000' })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
            let status = {
                "received": "50",
                "amount": 5000,
                "shipstatus": "40%",
                "ready": false
            }
            t.error(err, 'No error');
            t.same(res.body, status, 'Received ship status');
            t.end();
        });
});

test('ship fill', function (t) {
    request(app)
        .post('/rocket/fill')
        .query({})
        .expect('Content-Type', /json/)
        .expect(404)
        .end(function (err, res) {
            t.error(err, 'No error');
            t.same(res.body, { "error": "You made an error in specification of how much and what" }, 'Received ship status');
            t.end();
        });
});