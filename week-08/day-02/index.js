'use strict'

const button = document.querySelector('button');
const alertGreenFox = () => {
    alert('Green Fox!');
};
// Try mouseover too
button.addEventListener('click', alertGreenFox);