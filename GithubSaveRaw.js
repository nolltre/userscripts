// ==UserScript==
// @name        Save button for Github 
// @namespace   Violentmonkey Scripts
// @match       *://github.com/*
// @grant       GM_addStyle
// @homepage    https://www.nolltre.se/
// @supportURL  https://github.com/nolltre/userscripts
// @downloadURL https://github.com/nolltre/userscripts/raw/master/GithubSaveRaw.js
// @version     1.0
// @author      Daniel Karmark
// @description Add a Save button beside the Raw button when viewing a file in Github.and also override the save shortcut (Ctrl/Cmd + S)
// ==/UserScript==

GM_addStyle('body.loadingBlob * { cursor: wait !important; }');

var downloadRawFile = async function() {
  document.body.classList.add('loadingBlob');
  let rawFileSaveLink = document.createElement('a');
  let url = document.getElementById('raw-url').href;
  let blob = await fetch(url).then(r => r.blob());
  rawFileSaveLink.download = url.split('/').slice(-1)[0];
  rawFileSaveLink.href = URL.createObjectURL(blob);
  console.log("Saving blob of source...");
  rawFileSaveLink.click();
  URL.revokeObjectURL(rawFileSaveLink.href);
  rawFileSaveLink.remove();
  document.body.classList.remove('loadingBlob');
}

function addSaveButton() {
  let btnSaveRaw = document.createElement('a');
  btnSaveRaw.text = 'Save';
  btnSaveRaw.id = 'btn-saveraw';
  btnSaveRaw.href = '#';
  btnSaveRaw.setAttribute('data-view-component', 'true');
  btnSaveRaw.setAttribute('class', 'btn-sm btn BtnGroup-item');
  btnSaveRaw.addEventListener('click', downloadRawFile);

  // Insert after the Raw button
  document.getElementById('raw-url').after(btnSaveRaw);
}

var saveFileOverride = function (e) {
  let key = navigator.oscpu.match(/^Linux.*|^Windows.*/) ? e.ctrlKey : e.metaKey;
  if (key && e.key === 's') {
    e.preventDefault();
    downloadRawFile();
  }
}

function addSaveOverride() {
  document.addEventListener('keydown', saveFileOverride);
}

function removeSaveOverride() {
  document.removeEventListener('keydown', saveFileOverride);
}

// This detects changes in the DOM, Github's not reloading the entire page on navigation
const observer = new MutationObserver(function(mutations, observer) {
  if (document.getElementById('raw-url') && !document.getElementById('btn-saveraw')) {
    addSaveButton();
    addSaveOverride();
  } else {
    console.log('The button is no more, remove overrides');
    removeSaveOverride();
  }
});
observer.observe(document.body, { childList: true });

// Add the button and override
if (document.getElementById('raw-url')) {
  addSaveButton();
  addSaveOverride();
}
