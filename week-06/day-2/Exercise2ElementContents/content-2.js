// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']


'use strict'

let lis = document.getElementsByTagName("li");
let array = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = array[i];
}


// 2) change the <ul> element's background color to 'limegreen'    
//   - use css class to change the color instead of the style property

let ul = document.getElementsByTagName("ul");
ul[0].setAttribute("class", "coloring");
