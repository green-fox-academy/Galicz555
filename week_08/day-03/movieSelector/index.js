'use strict'

const select = document.getElementById("genre");
const movie = document.getElementById("movie");


let genreArray = ["Sci-fi", "Drama", "Comedy"];
let movieArray = ["Moon", "2001: A Space Odyssey", "Contact", "Darkest Hour", "There Will Be Blood", "American Beauty", "Airplane!", "Deadpool", "Wayne's World"];

for (let i = 0; i < genreArray.length; i++) {
    let option = document.createElement("option");
    option.value = genreArray[i];
    option.innerText = genreArray[i];
    select.appendChild(option);
}

// for (let i = 0; i < movieArray.length; i++) {
//     let option = document.createElement("option");
//     option.value = movieArray[i];
//     option.innerText = movieArray[i];
//     movie.appendChild(option);
// }


function show() {
    for (let i = 0; i < movie.length; i++) {
        movie[i].style.display = "none";
        if (select.value === movie[i].value) {
            movie[i].style.display = "";
        }
    }
}

select.addEventListener("click", show);

function showMovie() {
    let text = movie.options[movie.selectedIndex].text;
    let result = text.fontcolor("#8390cc");
    document.getElementsByTagName("p")[0].innerHTML = "The selected movie is: " + result;
}

movie.addEventListener("click", showMovie)
