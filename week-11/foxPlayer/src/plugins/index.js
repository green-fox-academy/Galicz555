'use strict';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let tracks = document.getElementsByTagName("main")[0];

let musics = [{ title: "Never give up", time: "2:15", src: "../assets/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" }]

let tracksRecord = musics.map(function(element){
let div = createNode('div');
div.className += " bin";
let divTitle = createNode('div');
let divTime = createNode('div');
divTitle.className += " titleName";
divTime.className += " exactTime";
divTitle.innerHTML = `${element.title}`;
divTime.innerHTML = `${element.time}`;
append(tracks, div);
append(div, divTitle);
append(div, divTime);
})

