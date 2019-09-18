'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.



function drawRect (x, y, c, v, b){
    ctx.fillStyle = b;
    ctx.fillRect (x, y, c, v);
}

drawRect (10, 10, 50, 50, "red");
drawRect (100, 10, 10, 10, "green");
drawRect (10, 100, 100, 100, "blue");
drawRect (200, 200, 75, 75, "yellow");