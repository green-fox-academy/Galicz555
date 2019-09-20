'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');





function Pyramid(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width,y);
    ctx.lineTo(x + width / 2, y - height);
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Pyramid(230,265);
let width = 20;
let height = 17;
let lineCount = 25;
let startingWidth = 250;
let startingHeight = 30;




for(let i = 0; i < lineCount; i++){
    for(let j = 0; j < i ; j++){
    Pyramid(startingWidth+j*width , startingHeight);
    }
    startingWidth -= width/2;
    startingHeight += height;
}
