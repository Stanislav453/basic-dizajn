"use strict"

const hideInput = document.querySelector(".hide-input");
const searchForm = document.querySelector(".search-form");
const bxSearchAlt = document.querySelector(".bx-search-alt");
const textButton = document.querySelector(".text-button");
const headerInput = document.querySelector(".header-input");
 
// show input-header

textButton.addEventListener("click", function(e) {
    if( headerInput.style.display === "block" ) {
        headerInput.style.display = "none"
    } else {
        headerInput.style.display = "block"
    }

});



// mobile search

bxSearchAlt.addEventListener("click", function(e) {
    searchForm.style.display = "flex";
});

hideInput.addEventListener("click", function(e) {
    searchForm.style.display = "none";
});

