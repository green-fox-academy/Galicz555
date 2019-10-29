'use strict'

let div = document.getElementsByTagName("div");
let section = document.getElementsByTagName("section");
let divNumber = div.innerHTML;

//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent

for (let i = 1; i < 101; i++) {
    let createDiv = document.createElement("div");
    section[0].appendChild(createDiv);
    div[i].innerText = i + 1;
}

//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

//gay version
// let primeNumbers = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
//     73, 79, 83, 89, 97, 101
// ]
// function primeValidator(counter) {
//     primeNumbers.includes(parseInt(div[counter].innerText)) ? div[counter].classList.add("prime") : div[counter].classList.add("not-prime");
// }

//not gay version

function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
};

function primeValidator(counter) {
    isPrime(div[counter].innerText) ?
        div[counter].classList.add("prime") : div[counter].classList.add("not-prime");
};

//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

let counter = 0;
let myInterval = setInterval(function () {
    primeValidator(counter);
    counter++;
    if (counter > 100) {
        clearInterval(myInterval);
    }
}, 100);
