'use strict'

let NYRequest = new XMLHttpRequest();
let section = document.querySelector("section");
let ul = document.querySelector("ul");

NYRequest.open("GET", "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Apollo11&api-key=sJXaZJVSFGmvS1mHx6cdsUc6nOBjMaWo", true);

NYRequest.onload = function () {
    let ourData = JSON.parse(NYRequest.responseText);
    for(let i = 0; i < 3; i++){
        let li = document.createElement("li");
        let la = document.createElement("li");
        let lu = document.createElement("li");
        ul.appendChild(li);
        ul.appendChild(la);
        ul.appendChild(lu);
        li.innerText = ourData.response.docs[i].headline.main;
        la.innerText = ourData.response.docs[i].snippet
        lu.innerText = ourData.response.docs[i].pub_date
        let a = document.createElement("a");
        a.setAttribute("href", ourData.response.docs[i].web_url);
        a.innerHTML = "Click to read the article";
        ul.appendChild(a);
    }
}
NYRequest.send();

