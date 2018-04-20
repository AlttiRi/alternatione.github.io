"use strict";



function addMenuTransient() {

    let widthWhenMenu = 680; // Ширина, при которой появляется мобильное меню

    window.addEventListener("DOMContentLoaded", function () {
        let intFrameWidth = window.innerWidth;

        if (intFrameWidth <= widthWhenMenu) {
            let navWrapper = document.querySelector(".nav-wrapper");
            if (!navWrapper) {
                return;
            }
            navWrapper.classList.add("ready-for-transient");
        }
    });

    window.addEventListener("resize", function () {

        let navWrapper = document.querySelector(".nav-wrapper");
        if (!navWrapper) {
            return;
        }
        let intFrameWidth = window.innerWidth;

        // let elem = document.getElementById("logger");
        // if (!elem) {
        //     return;
        // }
        // elem.innerText = `Width ${intFrameWidth.toString()}`;

        if (intFrameWidth <= widthWhenMenu) {
            navWrapper.classList.add("ready-for-transient");
        } else {
            navWrapper.classList.remove("ready-for-transient");
        }
    });

}



function swap() {
    let elem = document.getElementById("swappable-content");
    elem.classList.toggle("hidden");
}

/**
 * По клику  по #swapper
 * уберает/показывает содержимое #swappable-content
 */
function addSwapperListener() {

    let elem = document.getElementById("swapper");

    if (!elem) {
        return;
    }

    elem.addEventListener("click", swap);

}



/**
 * Добавляет возможность при повторном _таче_ по кнопке показа меню,
 * закрывать меню.
 *
 * Поскольку клик будет считать также hover'ом, используется класс .no-hover,
 * чтобы стили:hover при его наличии не работали. (:not(no-hover))
 *
 */
function addClosingMenuOnTouch() {

    let isHover = false;

    let btn = document.querySelector(".nav-btn");
    let wrapper = document.querySelector(".nav-wrapper");

    if (!btn || !wrapper) {
        return;
    }


    btn.addEventListener("touchstart", function () {

        if (isHover) {
            wrapper.classList.add("no-hover");
            isHover = false;
        } else {
            wrapper.classList.remove("no-hover");
            isHover = true;
        }

    }, {passive: true});

    wrapper.addEventListener("mouseleave", function () {

        isHover = false;

    });

}


/**
 * Просто для проверки работы JS.
 */
function testConsoleOutput() {
    console.log("It's working [AlttiRi.github.io]");
}


testConsoleOutput();

addSwapperListener();

addClosingMenuOnTouch();
addMenuTransient();
