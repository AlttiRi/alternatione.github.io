'use strict';

function simple() {
  console.log("It's working [AlttiRi.github.io]");
}

simple();


let isHover = false;

let elem = document.querySelector("div.nav-btn");
let links = document.querySelector(".nav-links-wrapper");
console.log(elem);


elem.addEventListener("touchstart", function(e) {

  if (isHover) {
    links.setAttribute("style", "display:none;");
    isHover = false;
  } else {
    links.setAttribute("style", "");
    isHover = true;
  }

});

elem.addEventListener("mouseleave", function(e) {

  isHover = false;

});
