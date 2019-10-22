// 1)  Fill every paragraph with the last one's content.

let text = document.getElementsByClassName("animals");
let p = document.getElementsByTagName("p");

for(let i = 0; i < p.length; i++){  
    p[i].textContent = text[0].textContent;
}
console.log(p);


// 2)  Do the same again, but you should keep the cat strong.

let text = document.getElementsByClassName("animals");
let p = document.getElementsByTagName("p");

for(let i = 0; i < p.length; i++){  
    p[i].innerHTML = text[0].innerHTML;
}
console.log(p);