'use strict';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

let tracks = document.getElementsByTagName("main")[0];

let musics = [
    { title: "BlackHeart", pic: "/week-11/foxPlayer/src/assets/img/BlackHeart.jpg", time: "8:14", src: "/week-11/foxPlayer/src/assets/music/Two Steps From Hell - Blackheart [Music Video].mp3" },
    { title: "Shake it off", pic: "/week-11/foxPlayer/src/assets/img/shakeitoff.png", time: "4:01", src: "/week-11/foxPlayer/src/assets/music/Taylor Swift - Shake It Off.mp3" },
    { title: "Never give up", pic: "/week-11/foxPlayer/src/assets/img/something.jpg", time: "2:15", src: "/week-11/foxPlayer/src/assets/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3" }]


let tracksRecord = musics.map(function (element) {
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

let songTitle = document.getElementById("songTitle");
let fillBar = document.getElementById("fill");
let picture = document.getElementById("poster");
let backStage = document.getElementById("backGround");
let pause = document.getElementById("pause");
let volumePic = document.getElementById("volume");

let song = new Audio();
let currentSong = 0;

window.onload = playSong;


function playSong() {
    song.src = musics[currentSong].src;
    songTitle.textContent = musics[currentSong].title;
    picture.style.backgroundImage = `url(${musics[currentSong].pic})`;
    backStage.style.backgroundImage = `url(${musics[currentSong].pic})`
}

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

function shuffle() {
    currentSong = Math.floor(Math.random() * (3));
    playSong();
    playOrPause();
}

let counter = 1;

volumePic.addEventListener('click', function(){
    if(counter == 0){
        counter += 1;
        song.volume = 1;
    } else if(counter == 1){
        counter += 1;
        song.volume = 0.5;
    } else if(counter == 2){
        song.volume = 0;
        counter = 0;
    }
})
