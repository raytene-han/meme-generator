"use strict";

let memes = [];

function showMemes() {
  console.log("showMemes");

  let memeArea = document.getElementById("memes");
  let html = "";

  for (let i = 0; i < memes.length; i++) {
    let meme = memes[i];
    let url = meme.url;
    let topText = meme.topText;
    let bottomText = meme.bottomText;

    html += `<div id="meme-${i}" class="container">
              <h3 class="toptext">${topText.toUpperCase()}</h3>
              <img class="img" src="${url}" width="400">
              <h3 class="bottomtext">${bottomText.toUpperCase()}</h3>
              <button class="delbutton" id="delete-meme-${i}">DELETE</button>
            </div>
    `
  }

  memeArea.innerHTML = html;
}

function addMeme(url, topText, bottomText) {
  console.log("addMeme", url, topText, bottomText);

  let memeObj = {
    url: url,
    topText: topText,
    bottomText: bottomText,
  };

  memes.push(memeObj);

}

function handleSubmit(evt) {
  console.log("handleSubmit", evt);
  evt.preventDefault();

  let form = document.getElementById("meme-form");
  let url = form.url.value;
  let topText = form.topText.value;
  let bottomText = form.bottomText.value;

  if (url !== '' && (topText !== '' || bottomText !== '')) {
    addMeme(url, topText, bottomText);
    showMemes();
    form.url.value = '';
    form.topText.value = '';
    form.bottomText.value = '';
  }

}

function deleteMeme(name) {
  console.log("deleteMeme", name);
  let id = Number(name.replace("meme-", ""));
  memes.splice(id, 1);
}

function handleButton(evt) {
  console.log("handleButton", evt);
  let name = evt.target.id.replace("delete-", "");
  if (evt.target.id.startsWith("delete-")) {
    deleteMeme(name);
  }

  showMemes();
}


showMemes();
document.getElementById("meme-form").addEventListener("submit", handleSubmit);
document.getElementById("memes").addEventListener("click", handleButton);
