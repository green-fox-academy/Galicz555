'use strict'

const es6 = require('es6-promise');

let promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        reject(new Error('REJECTED!'))
    }, 300);// Your solution here
})

function onReject (error){
    console.log(error.message)
}

promise.then(null, onReject);

