// You can work in the html or in a separate js file. Like:

//   Create an event listener which logs the current timestamp to the console once the button is clicked.
//   When the button is clicked for the second or any other times no event listener should be called.
//   Try to solve this two different ways.
//   hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button


// 1st method
// 'use strict'
// let counter = 0;
// const button = document.querySelector("button");
// const oneTimeClicker = () => {
//     let timeStamp = Math.floor(Date.now() / 1000);
//     console.log(timeStamp);
//     counter++;
//     if(counter === 3){
//         button.disabled = true;
//     }
// }
// button.addEventListener("click", oneTimeClicker);

// 2nd method

'use strict'
let counter = 0;
const button = document.querySelector("button");
const oneTimeClicker = () => {
    if (counter === 2) {
        button.addEventListener("click", function (event) {
            event.preventDefault()
        });
    } else {let timeStamp = Math.floor(Date.now() / 1000);
        console.log(timeStamp);
        counter++;}
}
button.addEventListener("click", oneTimeClicker);




