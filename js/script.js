'use strict';

function simple() {
  console.log("It's working [AlttiRi.github.io]");
}

simple();


let isHover = false;

let btn = document.querySelector(".nav-btn");
let links = document.querySelector(".nav-links-wrapper");
let wrapper = document.querySelector(".nav-wrapper");



btn.addEventListener("touchstart", function(ev) {

  if (isHover) {
    // links.setAttribute("style", "display:none;");
    links.classList.add("hidden");
    isHover = false;
  } else {
    // links.setAttribute("style", "");
    links.classList.remove("hidden");
    isHover = true;
  }

});

wrapper.addEventListener("mouseleave", function(ev) {

  isHover = false;

});
