'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(200, 200);
ctx.lineTo(50,50);
ctx.stroke();

ctx.fillStyle = 'blue';
ctx.fillRect(100, 100, 250, 250);

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.arc(400, 200, 100, 0, Math.PI * 2);
ctx.stroke();
