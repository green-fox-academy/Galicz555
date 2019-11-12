'use strict'

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyButton = document.querySelector(".create-candies");
let lollipopButton = document.querySelector(".buy-lollypops");
let candyRainButton = document.querySelector(".candy-machine");

let candyCounter = document.querySelector('.candies');
let lollyCounter = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let counter = 9999;

document.querySelector(".candies").innerText = counter;

function candyCreate() {
    counter++;
    candyCounter.innerText = counter;
}
candyButton.addEventListener("click", candyCreate);


function buyLollipop() {
    if (counter >= 100) {
        counter -= 100;
        candyCounter.innerText = counter;
        lollyCounter.innerText += "🍭";
    }
}

lollipopButton.addEventListener("click", buyLollipop);

setInterval(() => {
    if ((lollyCounter.innerText.length / 2) % 10 == 0) {
        speed.innerText = (lollyCounter.innerText.length / 2) / 10;
    }
}, 5000);


setInterval(() => {
    addCandyCreate();
}, 1000);

let addCandyCreate = () => {
    for (let i = 0; i < speed.innerText; i++) {
        candyCreate()
    }
}

function candyRain() {
    speed.innerText = speed.innerText * 10;
}

candyRainButton.addEventListener("click", candyRain)



