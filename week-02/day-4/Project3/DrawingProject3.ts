'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawNiceThing (x,y,a,b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width/2; i+=20){
        ctx.beginPath();
        ctx.moveTo(x-i, y);
        ctx.lineTo(a, b-i);
        ctx.stroke();
    }
}
drawNiceThing (500, 250, 250, 250);

function drawNiceThing2 (x,y,a,b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width/2; i+=20){
        ctx.beginPath();
        ctx.moveTo(x+i, y);
        ctx.lineTo(a, b-i);
        ctx.stroke();
    }
}
drawNiceThing2 (0, 250, 250, 250);

function drawNiceThing3 (x,y,a,b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width/2; i+=20){
        ctx.beginPath();
        ctx.moveTo(x+i, y);
        ctx.lineTo(a, b+i);
        ctx.stroke();
    }
}
drawNiceThing3 (0, 250, 250, 250);

function drawNiceThing4 (x,y,a,b){
    ctx.strokeStyle = 'green';
    for(let i = 0; i < canvas.width/2; i+=20){
        ctx.beginPath();
        ctx.moveTo(x-i, y);
        ctx.lineTo(a, b+i);
        ctx.stroke();
    }
}
drawNiceThing4 (500, 250, 250, 250);

