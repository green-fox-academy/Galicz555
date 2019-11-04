'use strict'

let hello = new XMLHttpRequest();

// bookTitleRequest.open("GET", "http://localhost:3000/book_mast/bookTitle", true);

// bookTitleRequest.onload = function () {
//     let ourData = JSON.parse(bookTitleRequest.responseText);
//     for (let i = 0; i < ourData.length; i++) {
//         let li = document.createElement("li");
//         ul.appendChild(li);
//         li.innerText = ourData[i].book_name;
//     }
// }
// bookTitleRequest.send();

hello.open("GET", "http://localhost:3000/book_mast/hello", true);

hello.onload = function () {
    let ourData = JSON.parse(hello.responseText);
}
hello.send();