"use strict"

const hideInput = document.querySelector(".hide-input");
const searchForm = document.querySelector(".search-form");
const bxSearchAlt = document.querySelector(".bx-search-alt");



bxSearchAlt.addEventListener("click", function(e) {
    searchForm.style.display = "flex";
});

hideInput.addEventListener("click", function(e) {
    searchForm.style.display = "none";
});

