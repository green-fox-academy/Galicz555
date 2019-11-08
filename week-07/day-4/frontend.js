'use strict'

let ul = document.querySelector("ul");
let li = document.createElement("li");


let bookTitleRequest = new XMLHttpRequest();
bookTitleRequest.open("GET", "http://localhost:3000/book_mast/bookTitle", true);

bookTitleRequest.onload = function () {
    let ourData = JSON.parse(bookTitleRequest.responseText);
    for (let i = 0; i < ourData.length; i++) {
        let li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = ourData[i].book_name;
    }
}
bookTitleRequest.send();





let bookFullDataRequest = new XMLHttpRequest();
let section = document.querySelector("section");
let table = document.createElement("table");
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





let bookCategoryDataRequest = new XMLHttpRequest();
let section2 = document.getElementsByTagName("section")[1];
let table2 = document.createElement("table");
bookCategoryDataRequest.open("GET", "http://localhost:3000/book_mast/bookCategoryData?category=Science", true);

bookCategoryDataRequest.onload = function () {
    section2.appendChild(table2);
    let tableContainer2 = document.getElementsByTagName("table")[1];
    console.log(tableContainer2);
    let newData2 = JSON.parse(bookCategoryDataRequest.responseText);
    // for (let i = 0; i < 5; i++) { ////// MOSTMÁR TUDOK LOOPBAN ELEMENTEK CSINÁLNI
    //     let thCreate = document.createElement("th");
    //     thCreate.className = 'titles';
    //     tr[0].appendChild(thCreate);
    // }
    for (let i = 0; i < newData2.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerText = newData2[i].book_name;
        tr.appendChild(td);
        tableContainer2.appendChild(tr);
        let autName = document.createElement("td");
        autName.innerText = newData2[i].aut_name;
        tr.appendChild(autName);
        tableContainer2.appendChild(tr);
        let category = document.createElement("td");
        category.innerText = newData2[i].cate_descrip;
        tr.appendChild(category);
        tableContainer2.appendChild(tr);
        let publisher = document.createElement("td");
        publisher.innerText = newData2[i].pub_name;
        tr.appendChild(publisher);
        tableContainer2.appendChild(tr);
        let price = document.createElement("td");
        price.innerText = newData2[i].book_price;
        tr.appendChild(price);
        tableContainer2.appendChild(tr);
    };
}

bookCategoryDataRequest.send();

