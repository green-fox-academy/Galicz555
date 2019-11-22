'use strict';

const postsUrl = `http://localhost:3000/posts`;
let main = document.querySelector("main");

let query = parseInt(window.location.href.split('=')[1]);

let destination = document.getElementsByTagName("form")[0].action = `/posts/${query}`;
destination;

fetch(postsUrl)
    .then((resp) => resp.json())
    .then(function (data) {
        let posts = data.posts;
        for (let i = 0; i < posts.length; i++) {
            if (query == posts[i].id) {
                document.getElementById("title").innerHTML = posts[i].title;
                document.getElementById("url").value = posts[i].url;
            }
        }
    })
    .catch(function (error) {
        throw error
    }
);

