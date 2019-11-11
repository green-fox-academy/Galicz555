'use strict';

let search = require("./index");

let test = require('tape');

// Get index
// Create a function that takes a list and a value, and returns the index of that value in the list. If the value is not it the list, the function should return -1.

let x = "brain";
let z = "Torso";
let y = "eyes";
let a = "hand";
let b = 2;
let bodyParts = ["head", "torso", "brain", "Hand", "2"];

test("indexOfTest", t => {
    let actual = search.search(bodyParts, x);
    let result = 2;
    t.equal(actual, result);
    t.end();
});

test("indexOfTest", t => {
    let actual = search.search(bodyParts, y);
    let result = -1;
    t.equal(actual, result);
    t.end();
});

test("indexOfTest", t => {
    let actual = search.search(bodyParts, z);
    let result = 1;
    t.equal(actual, result);
    t.end();
});

test("indexOfTest", t => {
    let actual = search.search(bodyParts, a);
    let result = 3;
    t.equal(actual, result);
    t.end();
});

test("indexOfTest", t => {
    let actual = search.search(bodyParts, b);
    let result = 4;
    t.equal(actual, result);
    t.end();
});