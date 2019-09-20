'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawLineplay (x, y, a, b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width / 2; i += 20){
        ctx.beginPath();
        ctx.moveTo(x - i, y);
        ctx.lineTo(a, b - i);
        ctx.stroke();
    }
}
drawLineplay (500, 250, 250, 250);

function drawLineplay2 (x, y, a, b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width / 2; i += 20){
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(a, b - i);
        ctx.stroke();
    }
}
drawLineplay2 (0, 250, 250, 250);

function drawLineplay3 (x, y, a, b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width / 2; i += 20){
        ctx.beginPath();
        ctx.moveTo(x + i, y);
        ctx.lineTo(a, b + i);
        ctx.stroke();
    }
}
drawLineplay3 (0, 250, 250, 250);

function drawLineplay4 (x, y, a, b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width / 2; i += 20){
        ctx.beginPath();
        ctx.moveTo(x - i, y);
        ctx.lineTo(a, b + i);
        ctx.stroke();
    }
}
drawLineplay4 (500, 250, 250, 250);

