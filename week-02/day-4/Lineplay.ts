'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawNiceThing (x, y, a, b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width; i += 20){
        ctx.beginPath();
        ctx.moveTo(x - i, y);
        ctx.lineTo(a, b - i);
        ctx.stroke();
    }
}
drawNiceThing (500, 500, 0, 500);

function drawNiceThing2 (x, y, a, b){
    ctx.strokeStyle = 'purple';
    for(let i = 0; i < canvas.width; i += 20){
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(a, b + i);
        ctx.stroke();
    }
}
drawNiceThing2 (0, 0, 500, 0);

