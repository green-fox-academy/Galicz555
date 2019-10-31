'use strict'

// let bookTitleRequest = new XMLHttpRequest();

let section = document.querySelector("section");
let ul = document.querySelector("ul");
let li = document.createElement("li");
let table = document.createElement("table");


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

let bookFullDataRequest = new XMLHttpRequest();

bookFullDataRequest.open("GET", "http://localhost:3000/book_mast/bookFullData", true);

bookFullDataRequest.onload = function () {
    section.appendChild(table);
    let tableContainer = document.getElementsByTagName("table")[0];
    let newData = JSON.parse(bookFullDataRequest.responseText);
    // for (let i = 0; i < 5; i++) { ////// MOSTMÁR TUDOK LOOPBAN ELEMENTEK CSINÁLNI
    //     let thCreate = document.createElement("th");
    //     thCreate.className = 'titles';
    //     tr[0].appendChild(thCreate);
    // }
    for (let i = 0; i < newData.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = newData[i].book_name;
        tr.appendChild(td);
        tableContainer.appendChild(tr);
        let autName = document.createElement("td");
        autName.innerText = newData[i].aut_name;
        tr.appendChild(autName);
        tableContainer.appendChild(tr);
        let category = document.createElement("td");
        category.innerText = newData[i].cate_descrip;
        tr.appendChild(category);
        tableContainer.appendChild(tr);
        let publisher = document.createElement("td");
        publisher.innerText = newData[i].pub_name;
        tr.appendChild(publisher);
        tableContainer.appendChild(tr);
        let price = document.createElement("td");
        price.innerText = newData[i].book_price;
        tr.appendChild(price);
        tableContainer.appendChild(tr);
    };
}


bookFullDataRequest.send();

