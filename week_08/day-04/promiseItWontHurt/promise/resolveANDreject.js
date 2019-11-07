'use strict'

const es6 = require('es6-promise');

let promise = new Promise(function (fulfill, reject) {
        fulfill('I FIRED')
        reject(new Error('I DID NOT FIRE'))
    ;// Your solution here
})

function onReject (error){
    console.log(error.message)
}

promise.then(console.log, onReject);