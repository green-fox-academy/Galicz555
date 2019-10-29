// let myCat = {
//     "name": "Meowsalot",
//     "species": "Cat",
//     "favFood": "Tuna"
// }

// myCat.name

// let myFavColors = [
//     "blue", "green", "purple"
// ];

// myFavColors[1]

// JASON!!

// let thePets = [
//     {
//     "name": "Meowsalot",
//     "species": "cat",
//     "favFood": "tuna"}
//     ,
//     {"name": "Barky",
//     "species": "dog",
//     "favFood": "carrots"}
// ];

// thePets[1].favFood

let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function () {
        if(ourRequest.status >= 200 && ourRequest.status < 400){ //error handling
            let ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else { //error handling
            console.log("We connected to the server, but it returned an error.") //error handling
        }

    };

    ourRequest.onerror = function() {     // error handling
        console.log("Connection error");     // error handling
    }

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add('hide-me')
    }
});

function renderHTML(data) {
    let htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}



