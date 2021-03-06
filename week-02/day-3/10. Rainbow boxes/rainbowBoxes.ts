'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function drawSquare (x, y) {
    ctx.fillRect((canvas.width-x)/2, (canvas.height-x)/2, x, x);
    ctx.fillStyle = y ;
}

for(let i = 0; i<50 ; i++) {
    drawSquare (Math.random()*600 , `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})` );
}
