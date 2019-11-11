'use strict';

let anagramm = require("./anagramm");

let test = require('tape');

let testStringA1 = 'kerek';
let testStringA2 = 'ekker';

let testStringA3 = 'pokol';
let testStringA4 = 'purgatórium';

let testStringB1 = 'alman';
let testStringB2 = 'Malna';

test("isAnagramm", t => {
    let actual = anagramm.checker(testStringA1, testStringA2);
    let result = true;
    t.equal(actual, result);
    t.end();
});

test("isAnagramm", t => {
    let actual = anagramm.checker(testStringA3, testStringA4);
    let result = false;
    t.equal(actual, result);
    t.end();
});

test("isAnagramm", t => {
    let actual = anagramm.checker(testStringB1, testStringB2);
    let result = true;
    t.equal(actual, result);
    t.end();
});