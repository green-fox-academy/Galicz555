'use strict';

let converter = require("./converter");

let test = require('tape');

let testCase1 = 2;
let testCase2 = 745;
let testCase3 = 12;
let testCase4 = 990;
let testCase5 = 418;

test("convertNumberToString", t => {
    let actual = converter.converter(testCase1);
    let result = 'two dollars';
    t.equal(actual, result);
    t.end();
});

test("convertNumberToString", t => {
    let actual = converter.converter(testCase2);
    let result = 'seven hundred and fourty five dollars';
    t.equal(actual, result);
    t.end();
});

test("convertNumberToString", t => {
    let actual = converter.converter(testCase3);
    let result = 'twelve dollars';
    t.equal(actual, result);
    t.end();
});

test("convertNumberToString", t => {
    let actual = converter.converter(testCase4);
    let result = 'nine hundred and ninety dollars';
    t.equal(actual, result);
    t.end();
});

test("convertNumberToString", t => {
    let actual = converter.converter(testCase5);
    let result = 'four hundred and eighteen dollars';
    t.equal(actual, result);
    t.end();
});