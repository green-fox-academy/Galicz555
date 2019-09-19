const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let h = 4;

let x = 0;
let y = canvas.width/h;

function drawRectLineplay(x,y,z){
        ctx.fillRect(x, y, z, z);
        ctx.strokeStyle = "white";
        ctx.strokeRect(x, y, z, z);
    function drawNiceThing (x,y){
        ctx.strokeStyle = 'green';
        for(let i = 0; i < y; i+=10){
            ctx.beginPath();
            ctx.moveTo(x, x+i);
            ctx.lineTo(x+i, y);
            ctx.stroke();
        }
    }
    drawNiceThing (x, y);

    function drawNiceThing2 (x,y){
        ctx.strokeStyle = 'purple';
        for(let i = 0; i < y; i+=10){
            ctx.beginPath();
            ctx.moveTo(x+i, x);
            ctx.lineTo(y, x+i);
            ctx.stroke();
        }
    }
    drawNiceThing2 (x, y);
}



let checkSize: number = 20;
for(let i = 0; i < checkSize * 600; i++){
    for(let j = 0; j < 50; j++){
        drawRectLineplay(i*checkSize,j*checkSize,1*checkSize);
    }
}