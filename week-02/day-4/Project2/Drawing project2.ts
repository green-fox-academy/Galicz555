const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


let checksize = 1;
let dense = 5;


let newCanvasWidth = canvas.width/checksize;
let startingWidth = 0;
let startingHeight = 0;


function drawRectLineplay(x,y,z){
    ctx.fillRect(x, y, z, z);

    function drawLineplay (x,y){
        ctx.strokeStyle = 'green';
        for(let i = 0; i < newCanvasWidth; i+=dense){
            ctx.beginPath();
            ctx.moveTo(x, y+i);
            ctx.lineTo(x+i,y+newCanvasWidth);
            ctx.stroke();
            // }
        }
    }
    drawLineplay (x, y);
    
    function drawLineplay2 (x,y){
        ctx.strokeStyle = 'green';
        for(let i = 0; i < newCanvasWidth; i+=dense){
            ctx.beginPath();
            ctx.moveTo(x+i, y);
            ctx.lineTo(x+newCanvasWidth, y+i);
            ctx.stroke();
            // }
        }
    }
    drawLineplay2 (x, y);
}

for(let i = 0; i < checksize; i++){
    for( let j = 0; j < checksize; j++){
        drawRectLineplay(startingWidth+j*newCanvasWidth,startingHeight,newCanvasWidth);
    }
    startingHeight += newCanvasWidth;
}

