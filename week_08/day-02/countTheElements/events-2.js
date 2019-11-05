// You can work in the html or in a separate js file. Like
//   On the click of the button,
//   Count the items in the list
//   And display the result in the result element.

'use strict'

const button = document.querySelector('button');
const counter = () => {
    alert(document.getElementsByTagName("li").length);
};
button.addEventListener('click', counter);

