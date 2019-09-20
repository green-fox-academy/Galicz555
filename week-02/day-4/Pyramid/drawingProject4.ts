'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let width = 20;
let height = Math.sqrt((width**2) - (width/2) ** 2);
let lineCount = 25;
let startingWidth = canvas.width / 2 - width / 2; 
let startingHeight = 30;

function Pyramid(x : number, y : number) : void{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y - height);
    ctx.lineTo(x, y);
    ctx.stroke();
}

for(let i : number = 0; i < lineCount; i++) {
    for(let j = 0; j <= i ; j++){
        Pyramid(startingWidth + j * width, startingHeight);
    }
    startingWidth -= width/2;
    startingHeight += height;
}

