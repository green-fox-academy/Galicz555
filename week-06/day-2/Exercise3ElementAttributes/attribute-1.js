// Write the image's url to the console.
let imgSource = document.querySelector('img');
console.log(imgSource.getAttribute('src'));

// Replace the image with a picture of your favorite animal.
imgSource.setAttribute('src', "https://weneedfun.com/wp-content/uploads/2016/04/Black-Dragon-10.jpg");  

// Make the link point to the Green Fox Academy website.
let link = document.querySelector('a');
link.setAttribute("href", "https://dnd.wizards.com/");

// Disable the second button.

let button2 = document.getElementsByClassName("this-one")[0];
button2.disabled = true;

// Replace its text with 'Don't click me!'.
button2.textContent = "Don't click me!";