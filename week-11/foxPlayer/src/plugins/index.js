'use strict';

const url = "http://localhost:3000/trackList";
const staticList = "http://localhost:3000/playLists";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let tracks = document.getElementsByTagName("main")[0];

let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");
let picture = document.getElementById("poster");
let backStage = document.getElementById("backGround");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let randomSong = document.getElementById("shuffle");
let volumePic = document.getElementById("volume");
let staticPlayList = document.getElementById("staticPlayList");
let forward = document.getElementById("forward");
let rewind = document.getElementById("rewind");

let addPlaylistPlus = document.getElementById("playListPlus");
let formPlaylist = document.getElementById("myForm");

let result = document.getElementById("result");
let getResult = document.getElementById("button");
let button = document.getElementById("button");
let body = document.getElementsByTagName("body")[0];

let bins = document.getElementsByClassName(" bin");

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let song = new Audio();
        let currentSong = 0;
        let counter = 1;
        data.map(function (element) {
            let div = createNode('div');
            div.className += " bin";
            let divTitle = createNode('div');
            let divTime = createNode('div');
            div.setAttribute("id", element.id);
            divTime.setAttribute("id", element.id);
            divTitle.setAttribute("id", element.id);
            divTitle.className += " titleName";
            divTime.className += " exactTime";
            divTitle.innerHTML = `${element.title}`;
            divTime.innerHTML = `${element.time}`;
            append(tracks, div);
            append(div, divTitle);
            append(div, divTime);
            adjustSong();
        })

        pause.addEventListener("click", function () {
            playOrPause();
        });

        randomSong.addEventListener("click", function () {
            shuffle();
        })

        forward.addEventListener("click", function () {
            currentSong += 1;
            if (currentSong == data.length) {
                currentSong = 0
            }
            adjustSong();
            playOrPause();
        })

        rewind.addEventListener("click", function () {
            if (currentSong == 0) {
                currentSong = data.length;
            }
            currentSong -= 1;
            adjustSong();
            playOrPause();
        })

        tracks.addEventListener("click", function (event) {
            console.log(event.target.id)
            if (event.target.className == " titleName" || event.target.className == " exactTime" || event.target.className == " bin") {
                currentSong = parseInt(event.target.id) - 1;
                adjustSong();
                playOrPause();
            }
        })

        function playOrPause() {
            if (song.paused) {
                song.play();
                pause.setAttribute("id", "play")
            } else {
                song.pause();
                pause.setAttribute("id", "pause")
            }
        }

        song.addEventListener('timeupdate', function () {
            let position = song.currentTime / song.duration;
            fillBar.style.width = position * 100 + '%';
        })

        function adjustSong() {
            song.src = data[currentSong].src;
            songTitle.textContent = data[currentSong].title;
            picture.style.backgroundImage = `url(${data[currentSong].pic})`;
            backStage.style.backgroundImage = `url(${data[currentSong].pic})`;
        }

        function shuffle() {
            currentSong = Math.floor(Math.random() * (data.length));
            adjustSong();
            playOrPause();
        }

        volumePic.addEventListener('click', function () {
            if (counter == 0) {
                counter += 1;
                song.volume = 1;
            } else if (counter == 1) {
                counter += 1;
                song.volume = 0.5;
            } else if (counter == 2) {
                song.volume = 0;
                counter = 0;
            }
        })
    })
    .catch(function (error) {
        throw error
    });

fetch(staticList)
    .then((resp) => resp.json())
    .then(function (data) {
        data.map(function (element) {
            let div = createNode('div');
            div.className += " store";
            let divName = createNode('div');
            let divDelete = createNode('div');
            divName.className += " listName";
            divDelete.className += " deleteName";
            divDelete.setAttribute("id", element.id);
            divName.innerHTML = `${element.playlist}`;
            append(staticPlayList, div);
            append(div, divName);
            append(div, divDelete);
        })
    })
    .catch(function (error) {
        throw error
    });

addPlaylistPlus.addEventListener("click", function () {
    formPlaylist.setAttribute("style", "display:flex")
});

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(myForm)
    let json = JSON.stringify(Object.fromEntries(data));
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/playLists");
    request.onload = function () {
    }
    request.setRequestHeader("Content-Type", "application/json");
    request.send(json);


    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: json
    // })
    // .then((resp) => resp.json())
    // .then()
    ///sort kapok
    //delete, + sorrendszer generálása
})

function getRemoveLinkFromEvent(item) {
    return item.className == " store";
}

let deleteDivs = document.getElementsByClassName(" deleteName");

body.addEventListener("click", function (event) {
    let deleteId = event.target.id;
    let action = event.target.className;
    let lastId = (deleteDivs[deleteDivs.length - 1].id);
    if (action == "button") {
        formPlaylist.setAttribute("style", "display:none");
        let data = new FormData(myForm)
        console.log(data)
        let jsonAdd = JSON.stringify(Object.fromEntries(data));
        console.log(jsonAdd);
        console.log(JSON.parse(jsonAdd));
        let div = createNode('div');
        div.className += " store";
        let divName = createNode('div');
        let divDelete = createNode('div');
        divName.className += " listName";
        divDelete.className += " deleteName";
        divDelete.setAttribute("id", parseInt(lastId) + 1);
        divName.innerHTML = `${JSON.parse(jsonAdd).playlist}`;
        append(staticPlayList, div);
        append(div, divName);
        append(div, divDelete);
        lastId = parseInt(lastId) + 1;
    } else if (action == " deleteName") {
        deleteId = event.target.id;
        let temp = event.path.filter(getRemoveLinkFromEvent)[0];
        temp.className = "storeDisappear";
        console.log(deleteId)
        fetch("http://localhost:3000/playLists" + '/' + deleteId, {
            method: 'delete'
        })
    }
})



