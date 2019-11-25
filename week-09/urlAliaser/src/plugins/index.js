'use strict'

const url = "http://localhost:3000/";
let result = document.getElementById("result");
let getResult = document.getElementById("button");
let form = document.getElementById("form")

form.addEventListener("submit", function (event){
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open("POST", "/api/links");
    let data = event.formData;
    console.log(event)
    console.log(new FormData(form))
    request.send(data);

})

// button.addEventListener("click", function (event) {
//     console.log("clicked");
//     console.log(event)
//     fetch(url)
//         .then((resp) => resp.json())
//         .then(function (data) {
//             console.log(data);
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].alias == event.path[1][1].value) {
//                     result.innerHTML = `Your URL is aliased to <strong>${data[i].alias}</strong> and your secret code is <strong>${data[i].secretCode}</strong>`;
//                 } else {
//                     result.innerHTML = `Your alias is already in use!`;
//                 }
//             }
//         })
//         .catch(function (error) {
//             throw error
//         });
// })

