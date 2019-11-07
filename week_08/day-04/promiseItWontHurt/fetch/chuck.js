'use strict'



const URL = 'http://api.icndb.com/jokes/random';
const Btn = document.getElementById("jokesBtn");
const div = document.querySelector("div");

function fetchJoke(){
    let p = document.createElement("p");
    div.appendChild(p);
    fetch(URL)
    .then(response => response.json())
    .then(myJson => p.innerText += myJson.value.joke);
}


Btn.addEventListener("click", fetchJoke)
