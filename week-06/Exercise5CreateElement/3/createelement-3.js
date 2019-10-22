'use strict'

const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];
//   1) Create an <article> element for each kid


let body = document.getElementsByTagName('body')[0];
let newElement = document.createElement("article");
let array = []

for (let i = 0; i < kids.length; i++) {
    body.appendChild(document.createElement("article"));
}

for (let i = 0; i < kids.length; i++) {
    array.push(document.createElement("article"));
}
console.log(array)
// body.push(array);

//   2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
//       - The H3 should contain the owner's name
//       - The p should contain the pet's name

for (let i = 0; i < document.getElementsByTagName("article").length; i++) {
    document.getElementsByTagName("article")[i].appendChild(document.createElement("h3"));
    document.getElementsByTagName("article")[i].appendChild(document.createElement("p"));
}

for (let i = 0; i < document.getElementsByTagName("article").length; i++) {
    document.getElementsByTagName("article")[i].getElementsByTagName("h3")[0].innerHTML = kids[i].owner;
    document.getElementsByTagName("article")[i].getElementsByTagName("p")[0].innerHTML = kids[i].petName;
}

//   3) Add the article to the pets div.
let articles = document.getElementsByTagName("article");
// let parent = document.getElementsByTagName("body")

for (let i = 0; i < document.getElementsByTagName("article").length; i++) {
    body.removeChild(document.querySelector("article"));
    i--;
}

for (let i = 0; i < kids.length; i++) {
    document.getElementById("pets").appendChild(document.createElement("article"));
}

for (let i = 0; i < document.getElementsByTagName("article").length; i++) {
    document.getElementsByTagName("article")[i].appendChild(document.createElement("h3"));
    document.getElementsByTagName("article")[i].appendChild(document.createElement("p"));
}

for (let i = 0; i < document.getElementsByTagName("article").length; i++) {
    document.getElementsByTagName("article")[i].getElementsByTagName("h3")[0].innerHTML = kids[i].owner;
    document.getElementsByTagName("article")[i].getElementsByTagName("p")[0].innerHTML = kids[i].petName;
}