'use strict'

let bookTitleRequest = new XMLHttpRequest();

let section = document.querySelector("section");
let ul = document.querySelector("ul");

bookTitleRequest.open("GET", "http://localhost:3000/book_mast/bookTitle", true);

bookTitleRequest.onload = function () {
    let ourData = JSON.parse(bookTitleRequest.responseText);
    for(let i = 0; i < ourData.length; i++){
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = ourData[i].book_name;
    }
}
bookTitleRequest.send();

let bookFullDataRequest = new XMLHttpRequest();

bookFullDataRequest.open("GET", "http://localhost:3000/book_mast/bookFullData", true);

bookFullDataRequest.onload = function () { //before refactoring
    let ourData = JSON.parse(bookFullDataRequest.responseText);
    for(let i = 0; i < ourData.length; i++){
        let li = document.createElement("li");
        let la = document.createElement("li");
        let le = document.createElement("li");
        let lo = document.createElement("li");
        let lu = document.createElement("li");
        ul.appendChild(li);
        ul.appendChild(la);
        ul.appendChild(le);
        ul.appendChild(lo);
        ul.appendChild(lu);
        li.innerText = ourData[i].book_name;
        li.innerText = ourData[i].book_name;
        li.innerText = ourData[i].book_name;
        li.innerText = ourData[i].book_name;
        li.innerText = ourData[i].book_name;
    }
}
bookFullDataRequest.send();

