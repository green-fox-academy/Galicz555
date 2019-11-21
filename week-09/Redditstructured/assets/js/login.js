'use strict';

let login = function identification(name, key){
    localStorage.setItem('userName', name);
    localStorage.setItem('password', key);
}

login("Michael", "123");

console.log(localStorage)