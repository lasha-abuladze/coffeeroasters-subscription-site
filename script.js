`use strict`;

// const menuBtn = document.querySelector(`.menu-btn`);
// const closeBtn = document.querySelector(`.close-btn`);


// const togleMenuBtn = function(menuBtn, closeBtn) {
//     menuBtn.classList.toggle(`display-none`);
//     closeBtn.classList.toggle(`display-none`);
// }

// menuBtn.addEventListener(`click`, () => {
//     togleMenuBtn(menuBtn, closeBtn)
// } )

// closeBtn.addEventListener(`click`, () => {
//     togleMenuBtn(menuBtn, closeBtn)
// })




const menuButton = document.querySelector(`.close-open--btns`);

const line1 = document.querySelector(`.line--1`);
const line2 = document.querySelector(`.line--2`);
const line3 = document.querySelector(`.line--3`);


menuButton.addEventListener(`click`, () => {
    line1.classList.add(`line--1__close`);
    line2.classList.add(`line--2__close`);
    line3.classList.add(`line--3__close`);
})