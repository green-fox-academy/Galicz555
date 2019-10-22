// Add an item that says 'The Green Fox' to the asteroid list.
'use strict';
let asteroidList = document.querySelector('ul.asteroids');
let newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.
let newAsteroid2 = document.createElement('li');
newAsteroid2.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroid2);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
let parent = document.getElementsByClassName('container')[0];
console.log(parent);
let newElement = document.createElement("h1");
newElement.innerHTML = 'I can add elements to the DOM!';
console.log(newElement);    
parent.appendChild(newElement);

// Add an image, any image, to the container.
let newElement2 = document.createElement("img");
newElement2.setAttribute("src", "http://getwallpapers.com/wallpaper/full/8/3/3/540408.jpg")
console.log(newElement2);
parent.appendChild(newElement2);

