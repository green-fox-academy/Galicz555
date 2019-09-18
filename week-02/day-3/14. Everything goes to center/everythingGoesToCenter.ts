'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine (x,y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

for(let i = 0; i<=600; i+=20){
    drawLine (i,0);
}
for(let o = 0; o<=400; o+=20){
    drawLine (0,o);
}
for(let k = 0; k<=600; k+=20){
    drawLine (k,400);
}
for(let l = 0; l<=400; l+=20){
    drawLine (600,l);
}