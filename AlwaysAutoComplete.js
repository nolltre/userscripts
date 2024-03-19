// ==UserScript==
// @name        Allow autocomplete everywhere, remove onpaste
// @namespace   Violentmonkey Scripts
// @match       *://*
// @homepage    https://www.nolltre.se/
// @supportURL  https://github.com/nolltre/userscripts
// @downloadURL https://github.com/nolltre/userscripts/raw/master/AlwaysAutoComplete.js
// @version     1.0
// @author      Daniel Karmark
// @description Allows paste and autocomplete everywhere
// ==/UserScript==

// Remove autocomplete off
let allAutocompleteOffFields = document.querySelectorAll(
  '[autocomplete="off"]',
);

[...allAutocompleteOffFields].forEach((field) => {
  field.removeAttribute("autocomplete");
});

// Remove onpaste return false stuff
let allPasteFalseField = document.querySelectorAll('[onpaste="return false"]');

[...allPasteFalseField].forEach((field) => {
  field.removeAttribute("onpaste");
};
