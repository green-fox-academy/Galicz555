const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let checksize = 4;

let x = 0;
let newCanvasWidth = canvas.width/checksize;

function drawRectLineplay(x,y){
    // ctx.fillRect(x, y, z, z);
    // ctx.strokeStyle = "white";
    // ctx.strokeRect(x, y, z, z);

    function drawNiceThing (x,y){
        ctx.strokeStyle = 'green';
        for(let i = 0; i < newCanvasWidth; i+=5){
            // for(let k = 0; i < canvas.height; k+=20){
            ctx.beginPath();
            ctx.moveTo(x, y+i);
            ctx.lineTo(x+i,y+newCanvasWidth);
            ctx.stroke();
            // }
        }
    }
    drawNiceThing (x, y);
    
    function drawNiceThing2 (x,y){
        ctx.strokeStyle = 'purple';
        for(let i = 0; i < newCanvasWidth; i+=5){
            // for(let k = 0; i < canvas.height; k+=20){
            ctx.beginPath();
            ctx.moveTo(x+i, y);
            ctx.lineTo(x+newCanvasWidth, y+i);
            ctx.stroke();
            // }
        }
    }
    drawNiceThing2 (x, y);
}

drawRectLineplay(0,0);



// let checkSize: number = 20;
// for(let i = 0; i < checkSize * 600; i++){
//     for(let j = 0; j < 50; j++){
//         drawRectLineplay(i*checkSize,j*checkSize,1*checkSize);
//     }
// }