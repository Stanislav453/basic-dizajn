"use strict"

const hideInput = document.querySelector(".hide-input");
const searchForm = document.querySelector(".search-form");
const bxSearchAlt = document.querySelector(".bx-search-alt");
const textButton = document.querySelector(".text-button");
const headerInput = document.querySelector(".header-input");
const showForm    = document.querySelector(".show-form");
const formBlock   = document.querySelector(".form-block");
const xButton   = document.querySelector(".x-button");


xButton.addEventListener("click", function(e) {
    formBlock.style.display = "none"
})

//show form 

showForm.addEventListener("click", function(e) {
    if( formBlock.style.display === "block" ) {
        formBlock.style.display = "none"
    } else {
        formBlock.style.display = "block"
    }

});
  
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

