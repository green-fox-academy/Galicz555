'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.




function drawSquare2 ( x, z, y){
    ctx.fillStyle = "black";
    ctx.fillRect(x, z, y, y)
}
for(let o = 0; o < 60; o++){
    for(let i = 0; i < 40; i++)
        if(o % 2 == 0 && i % 2 == 0){
            drawSquare2 (o * 10 ,i * 10, 10);
        } else if(o % 2 != 0 && i % 2 != 0){
            drawSquare2 (o * 10 ,i * 10, 10);
        }
}
