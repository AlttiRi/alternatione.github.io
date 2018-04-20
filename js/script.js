'use strict';


testConsoleOutput();




/**
 * По клику  по #swapper
 * уберает/показывает содержимое #swappable-content
 */
(function addSwapperListener() {

  let elem = document.getElementById("swapper");

  if (!elem) {
    return;
  }

  elem.addEventListener("click", swap);

})();

function swap() {
  let elem = document.getElementById("swappable-content");
  elem.classList.toggle("hidden");
}


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
  let wrapper = document.querySelector(".nav-wrapper");

  if (!btn || !wrapper) {
    return;
  }


  btn.addEventListener("touchstart", function (ev) {

    if (isHover) {
      wrapper.classList.add("no-hover");
      isHover = false;
    } else {
      wrapper.classList.remove("no-hover");
      isHover = true;
    }

  }, {passive: true});

  wrapper.addEventListener("mouseleave", function (ev) {

    isHover = false;

  });

})();


/**
 * Просто для проверки работs JS.
 */

function testConsoleOutput() {
  console.log("It's working [AlttiRi.github.io]");
}
