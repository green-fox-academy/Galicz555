'use strict'

const es6 = require('es6-promise');

// setTimeout(() => {
//     console.log("TIMED OUT!");
// }, 300);

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 300)// Your solution here
}).then(function (result) {
    console.log("FULFILLED!");
});
promise;

// 2nd solution!!
let promise = new Promise(function (fulfill, reject) {
    // After the timeout reaches 300ms, fulfill the promise with value
    // 'FULFILLED!'.
    setTimeout(function () {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then(console.log);