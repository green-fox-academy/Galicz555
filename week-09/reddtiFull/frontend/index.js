'use strict';

const postsUrl = "http://localhost:3000/posts";
let main = document.querySelector("main");



function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

// let redditPostsRequest = new XMLHttpRequest();
// redditPostsRequest.open("GET", "http://localhost:3000/posts", true);


// redditPostsRequest.onload = function () {
//     let ourData = JSON.parse(redditPostsRequest.responseText);
//     console.log(ourData.posts.length);
//     for (let i = 0; i < ourData.posts.length; i++) {
//         let div = document.createElement("div");
//         div.innerText = ourData.posts[i].title;
//         main.appendChild(div);

//     }
// }
// redditPostsRequest.send();

// fetch(postsUrl)
//     .then(((resp) => resp.json()))
//     .then(function (data) {
//         for (let i = 0; i < data.posts.length; i++) {
//             let div = document.createElement("div");
//             div.innerText = data.posts[i].title;
//             main.appendChild(div);
//         }
//     })
//     .catch(function (error) {
//         throw error;
//     });

fetch(postsUrl)
    .then((resp) => resp.json())
    .then(function (data) {
        let posts = data.posts;
        console.log(posts)
        return posts.map(function (user) {
            console.log(user)
            let div = createNode('div');
            div.className += " container";
            let divButtons = createNode('div');
            let divArticle = createNode('div');
            divButtons.className += " voting";
            divArticle.className += " article";
            let divButtonUp = createNode('div');
            let voteNum = createNode('div');
            let divButtonDown = createNode('div');
            let titleLink = createNode('div');
            let actions = createNode('div');
            voteNum.innerHTML = `${user.score}`;
            voteNum.className += " vote"
            divButtonUp.className += " up";
            divButtonDown.className += " down";
            titleLink.className += " tLink";
            titleLink.innerHTML = `<a class="path" href=${user.url}>${user.title}</a>`;
            actions.className += " actions";
            actions.innerHTML = `<a class="actionLink" href=${user.url}>Modify</a><a class="actionLink" href=${user.url}>Remove</a>`;
            append(divButtons, divButtonUp);
            append(divButtons, voteNum);
            append(divButtons, divButtonDown);
            append(divArticle, titleLink);
            append(divArticle, actions);

            append(div, divButtons);
            append(div, divArticle);
            append(main, div);
        })
    })
    .catch(function (error) {
        throw error;
    });