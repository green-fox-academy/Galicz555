'use strict';

const postsUrl = "http://localhost:3000/posts";
let main = document.querySelector("main");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function getVoteNumFromEvent(item) {
    return item.className == " voting"
}

function getRemoveLinkFromEvent(item) {
    return item.className == " container"
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
            voteNum.className += " vote";
            divButtonUp.className += " up";
            divButtonUp.setAttribute("id", user.id);
            // divButtonUp.setAttribute("onclick", `upVote(${user.id})`); 
            divButtonDown.className += " down";
            divButtonDown.setAttribute("id", user.id);
            // divButtonDown.setAttribute("onclick", `downVote(${user.id})`); 
            titleLink.className += " tLink";
            titleLink.innerHTML = `<a class="path" href=${user.url}>${user.title}</a>`;
            actions.className += " actions";
            actions.innerHTML = `${ago(user.timestamp)} <a class="actionLink" href=${user.url}>Modify</a><div id=${user.id} class="removeLink">Remove</div>`;
            // actions.innerHTML = `${ago(user.timestamp)} <a class="actionLink" href=${user.url}>Modify</a><div class="removeLink" onclick=deleteData(${user.id})>Remove</div>`;
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
        throw error
    });


//                since (timestamp) calculator
let ago = function (timestamp) {
    let difference = (Date.now() - timestamp) / 1000 / 60;
    if (difference > 60 * 24) {
        difference = difference / 60 / 24;
        return `${Math.floor(difference)} days ago`
    } else if (difference > 60) {
        difference = difference / 60;
        return `${Math.floor(difference)} hours ago`;
    } else {
        return `${Math.floor(difference)} minutes ago`;
    }
}

//            event bubbling for upvoting/downvoting/deleting
main.addEventListener("click", function (event) {
    let voteId = event.target.id;
    let action = event.target.className;
    if (voteId !== undefined && action == " up") {
        let number = event.path.filter(getVoteNumFromEvent)[0].getElementsByClassName(" vote")[0];
        event.target.className = " upped";
        fetch("http://localhost:3000/posts" + '/' + voteId + '/' + "upvote", {
            method: 'put'
        });
        number.innerHTML = parseInt(number.innerHTML) + 1;
        // .then(res => res(window.location.assign('http://localhost:3000')))
    } else if (voteId !== undefined && action == " down") {
        let number = event.path.filter(getVoteNumFromEvent)[0].getElementsByClassName(" vote")[0];
        event.target.className = " downed";
        fetch("http://localhost:3000/posts" + '/' + voteId + '/' + "downvote", {
            method: 'put'
        });
        number.innerHTML = parseInt(number.innerHTML) - 1;
    } else if (action == "removeLink") {
        console.log(voteId)
        let container = event.path.filter(getRemoveLinkFromEvent)[0];
        container.className = "containerDisappear";
        fetch("http://localhost:3000/posts" + '/' + voteId, {
            method: 'delete'
        })
    }
})

//                              gay solution for upvoting/downvoting
// function upVote(item) {
//     return fetch("http://localhost:3000/posts" + '/' + item + '/' + "upvote", {
//         method: 'put'
//     })
//         .then(res => res(window.location.assign('http://localhost:3000')))
// }

// function downVote(item) {
//     return fetch("http://localhost:3000/posts" + '/' + item + '/' + "downvote", {
//         method: 'put'
//     })
//         .then(res => res(window.location.assign('http://localhost:3000')))
// }


// main.addEventListener("click", function (event) {
//     let voteId = event.target.id;
//     let action = event.target.value;
//     let myRequest = new XMLHttpRequest();
//     if (voteId !== undefined && action == "up") {
//         myRequest.open('PUT', `http://localhost:3000/posts/${voteId}/upvote`, true);
//     }
//     if (voteId !== undefined && action == "down") {
//         myRequest.open('PUT', `http://localhost:3000/posts/${voteId}/downvote`, true);
//         // myRequest.onreadystatechange = function () {
//         //     if (myRequest.readyState === XMLHttpRequest.DONE && myRequest.status === 200) {
//         //         let myData = JSON.parse(myRequest.responseText);
//         //         for (let j = 0; j < myData.length; j++) {
//         //             console.log(myData[j].score);
//         //             let p = document.querySelectorAll('.test');
//         //             let test = Array.from(p);
//         //             for (let k = 0; k < test.length; k++) {
//         //                 console.log(test[k].score);
//         //             }

//         //         }
//         //     }
//         // }
//     }
//     myRequest.send();
// });



// function newArrow(event){
//     let base = event.target.className;
//     base = " upped";
// }




//               deleting onclick function
// function deleteData(item) {
//     return fetch("http://localhost:3000/posts" + '/' + item, {
//         method: 'delete'
//     })
//         .then(response => response.json())
//         .then(res => console.log(res))
//         .then(res => res(window.location.assign('http://localhost:3000')))
// }

//                  going to places
let submitButton = document.querySelector("button");
function goToAddPost() {
    window.location.assign('http://localhost:3000/add');
}
submitButton.addEventListener("click", goToAddPost);



// let voting = document.querySelector('body');
// voting.addEventListener('click', function () {
//     console.log(event)
// });