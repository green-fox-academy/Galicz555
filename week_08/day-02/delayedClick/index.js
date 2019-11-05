// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

'use strict'

const btn = document.querySelector("button");
const body = document.getElementsByTagName("body")[0]
const p = document.createElement("p");

let timer = setTimeout(() => {
    body.appendChild(p);
    document.getElementsByTagName("p")[0].innerText = "2 seconds ellapsed";
}, 2000);


btn.addEventListener("click", timer)