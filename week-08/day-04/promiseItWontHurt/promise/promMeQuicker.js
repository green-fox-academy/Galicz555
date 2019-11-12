'use strict'

// var promise = new Promise(function (fulfill, reject) {
//     fulfill('SECRET VALUE');
//   });

//   // Introducing: Promise.resolve
//   // It does the exact same thing as above:


let promise = Promise.resolve('SECRET VALUE');

promise.catch(function (err) {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
});

promise.then(console.log)

let promise = Promise.reject('ATOMIC BOMB!');

promise.catch(function(err){
    console.error('there is an error!!');
    console.error(err.message);
})

promise.then(null, console.log)