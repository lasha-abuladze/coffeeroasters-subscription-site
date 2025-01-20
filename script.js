`use strict`;

const menuBtn = document.querySelector(`.menu-btn`);
const closeBtn = document.querySelector(`.close-btn`);




const togleMenuBtn = function(menuBtn, closeBtn) {
    menuBtn.classList.toggle(`display-none`);
    closeBtn.classList.toggle(`display-none`);
}







menuBtn.addEventListener(`click`, () => {
    togleMenuBtn(menuBtn, closeBtn)
} )

closeBtn.addEventListener(`click`, () => {
    togleMenuBtn(menuBtn, closeBtn)
})