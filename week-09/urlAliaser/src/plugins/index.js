'use strict'

const url = "http://localhost:3000/aliaser";
let result = document.getElementById("result");
let getResult = document.getElementById("button");
let myForm = document.getElementById("myForm")
let button = document.getElementById("button")


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/links");
    request.onload = function () {
    }
    let data = new FormData(myForm)

    let json = JSON.stringify(Object.fromEntries(data));
    request.setRequestHeader("Content-Type", "application/json");
    request.send(json);
})

button.addEventListener("click", function (event) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].alias == event.path[1][1].value) {
                    result.innerHTML = `Your URL is aliased to <strong>${data[i].alias}</strong> and your secret code is <strong>${data[i].secretCode}</strong>`;
                } else {
                    result.innerHTML = `Your alias is already in use!`;
                }
            }
        })
        .catch(function (error) {
            throw error
        });
})

