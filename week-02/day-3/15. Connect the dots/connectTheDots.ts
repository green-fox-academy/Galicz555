'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let ListA = [[10, 10], [290,  10], [290, 290], [10, 290]];
let ListB = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

function something (ListA){
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(ListA[0][0],ListA[0][1]);
    for(let i=0; i<ListA.length; i++) {
        ctx.lineTo(ListA[i][0],ListA[i][1]);
        ctx.stroke()
    }
    ctx.lineTo(ListA[0][0],ListA[0][1]);
    ctx.stroke()
}
something(ListA);
//?
//ListA.forEach(e){
    // ctx.lineTo(ListA[i][0])
    // ctx.stroke();}
// }