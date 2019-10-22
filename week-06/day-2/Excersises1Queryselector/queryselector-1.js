// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

'use strict';

let king = document.getElementById('b325');
console.log('king', king);
let lamplighter = document.getElementsByClassName('big');
let conceitedKing = document.getElementsByClassName('container')[0].getElementsByClassName('asteroid');
console.log('conceitedKing', conceitedKing);
alert(conceitedKing[0]);
alert(conceitedKing[1]);

let noBusiness = [king, lamplighter, conceitedKing];
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);