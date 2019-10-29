'use strict'

let giphRequest = new XMLHttpRequest();
let section = document.querySelector("section");

giphRequest.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=XFB1YKGk9TzoPjoZzYNY1JTCTpybAiKA&q=anime&limit=16&offset=48&rating=R&lang=en", true);

giphRequest.onload = function () {
    let ourData = JSON.parse(giphRequest.responseText);
    console.log(ourData.data[0]);

    for (let i = 1; i < 10; i++) {
        let newImage = document.createElement("img");
        newImage.setAttribute("src", ourData.data[i].images.fixed_height_small_still.url);
        newImage.onclick = function () {
            if(newImage.getAttribute("src") == ourData.data[i].images.fixed_height_small_still.url){
            newImage.setAttribute("src", ourData.data[i].images.fixed_height_small.url);
            } else {newImage.setAttribute("src", ourData.data[i].images.fixed_height_small_still.url)}
        }
        section.appendChild(newImage);  
    }
}
giphRequest.send();

