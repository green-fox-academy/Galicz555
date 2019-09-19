'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');





function Pyramid(x,y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+width,y);
    ctx.lineTo(x+width/2,y-height);
    ctx.lineTo(x,y);
    ctx.stroke();
}

// Pyramid(230,265);
let width = 20;
let height = 15;
let lineCount = 10;
let lsd = 230


for(let i = 0; i < lineCount; i++){
    for(let j = 0; j < (lineCount-i); j++){
    Pyramid(lsd+i*width,265-j*height);
    }
    lsd += width/2;
}
