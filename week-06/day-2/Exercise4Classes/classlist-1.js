'use strict'

// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if(document.getElementsByTagName("p")[3].getAttribute("class") == "dolphin"){
    document.getElementsByClassName("apple")[0].textContent = "pear";
}
// If the first p has an 'apple' class, replace cat's content with 'dog'
if(document.getElementsByTagName("p")[0].getAttribute("class") == "apple"){
    document.getElementsByClassName("cat")[0].textContent = "dog";
}
// Make apple red by adding a .red class
let colorer = document.getElementsByClassName("apple")[0];
// colorer.setAttribute("class", "red");
colorer.className += " red";
// Make balloon less balloon-like (change its shape)
document.getElementsByClassName("balloon")[0].style["border-radius"] = "10%";
console.log(document.getElementsByClassName("balloon")[0])