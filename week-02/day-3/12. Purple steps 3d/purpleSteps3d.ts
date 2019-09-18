'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawSquare ( x, y) {
    ctx.fillStyle = "purple";
    ctx.fillRect(x-y, x-y, y, y);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x-y, x-y, y, y)
}

let sum: number = 0;
for(let i = 0; i < 7; i++){
    sum += (i)*10;
    drawSquare (sum, i * 10);
}
