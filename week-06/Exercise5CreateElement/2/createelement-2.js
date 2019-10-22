'use strict'

// Remove the king from the list.
let asteroidList = document.querySelector('ul.asteroids');
let theKing = document.querySelector('li');
asteroidList.removeChild(theKing);

// Fill the list based on the following list of objects.
const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];


// for (let i = 0; i < planetData.length; i++) {
//     asteroidList.appendChild(document.createElement("li"));
// }

// for (let i = 0; i < planetData.length; i++) {
//     asteroidList.getElementsByTagName("li")[i].innerHTML = planetData[i].content;
// }


// Only add the asteroids to the list.

let newAsteroidList = [];
// for (let i = 0; i < planetData.length; i++) {
//     if (planetData[i].asteroid == true) {
//         newAsteroidList.push(planetData[i])
//     }
// }

planetData.forEach(element =>{
    element.asteroid == true ? newAsteroidList.push(element):undefined;
})


for (let i = 0; i < newAsteroidList.length; i++) {
    asteroidList.appendChild(document.createElement("li"));
}

for (let i = 0; i < newAsteroidList.length; i++) {
    asteroidList.getElementsByTagName("li")[i].innerHTML = newAsteroidList[i].content;
}


// Each list item should have its category as a class and its content as text content. -->
for(let i = 0; i < newAsteroidList.length; i++){
    asteroidList.getElementsByTagName("li")[i].setAttribute("class", newAsteroidList[i].category)
}



for(let i = 0; i < newAsteroidList.length; i++){
    asteroidList.getElementsByTagName("li")[i].textContent = newAsteroidList[i].content;
}
