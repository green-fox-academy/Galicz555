// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

'use strict'

const btn = document.querySelector("button");
const body = document.getElementsByTagName("body")[0];
const p = document.createElement("p");
let counter = 0;

setTimeout(() => {
    if (counter >= 3) {
        body.appendChild(p);
        document.getElementsByTagName("p")[0].innerText = "5 seconds ellapsed, and clicked 3 times";
        counter++;
    }
}, 5000);

function click() {
    counter++;
    console.log(counter);
}

btn.addEventListener("click", click);
