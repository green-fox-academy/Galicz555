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
            divButtonDown.className += " down";
            divButtonDown.setAttribute("id", user.id);
            titleLink.className += " tLink";
            titleLink.innerHTML = `<a class="path" href=${user.url}>${user.title}</a>`;
            actions.className += " actions";
            actions.innerHTML = `${ago(user.timestamp)} <a class="actionLink" href=${user.url}>Modify</a><div id=${user.id} class="removeLink">Remove</div>`;
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

let submitButton = document.querySelector("button");
function goToAddPost() {
    window.location.assign('http://localhost:3000/add');
}
submitButton.addEventListener("click", goToAddPost);

