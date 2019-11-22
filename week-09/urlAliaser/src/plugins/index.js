'use strict'

const url = "http://localhost:3000/aliaser";
let result = document.getElementById("result");
let getResult = document.getElementById("button");





button.addEventListener("click", function () {
    console.log("clicked")
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data);
        if (data) {
                result.innerHTML = `Your URL is aliased to <strong>${data.alias}</strong> and your secret code is <strong>${data.secretCode}</strong>`;
        } else {
            return result.innerHTML = `Your alias is already in use!`;
        }
    })
    .catch(function (error) {
        throw error
    });
})

// let submitButton = document.querySelector("button");
// function goToAddPost() {
//     window.location.assign('http://localhost:3000/add');
// }
// submitButton.addEventListener("click", goToAddPost);