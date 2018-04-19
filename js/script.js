'use strict';

function simple() {
  console.log("It's working [AlttiRi.github.io]");
}

simple();


/**
 * Добавляет возможность при повторном _таче_ по кнопке показа меню,
 * закрывать меню.
 *
 * Поскольку клик будет считать также hover'ом, используется класс .no-hover,
 * чтобы стили:hover при его наличии не работали. (:not(no-hover))
 *
 */
(function makeBetterMobileMenu() {

  let isHover = false;

  let btn = document.querySelector(".nav-btn");
  // let links = document.querySelector(".nav-links-wrapper");
  let wrapper = document.querySelector(".nav-wrapper");


  btn.addEventListener("touchstart", function (ev) {

    if (isHover) {
      // links.setAttribute("style", "display:none;");
      // links.classList.add("hidden");
      wrapper.classList.add("no-hover");

      isHover = false;
    } else {
      // links.setAttribute("style", "");
      // links.classList.remove("hidden");
      wrapper.classList.remove("no-hover");

      isHover = true;
    }

  }, {passive: true});

  wrapper.addEventListener("mouseleave", function (ev) {

    isHover = false;

  });
})();
