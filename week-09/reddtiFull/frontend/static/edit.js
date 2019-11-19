'use strict';

const postsUrl = `http://localhost:3000/posts`;
let main = document.querySelector("main");

fetch(postsUrl)
    .then((resp) => resp.json())
    .then(function (data) {
        let posts = data.posts;
        return posts.map(function (user) {
            console.log(user)
            document.getElementsByTagName("textarea")[0].innerHTML = user.title;
            document.getElementsByTagName("input")[0].value = user.url;
        })
    })
    .catch(function (error) {
        throw error
    });

