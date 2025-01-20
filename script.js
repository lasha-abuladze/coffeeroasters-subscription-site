`use strict`;

const menuButton = document.querySelector(`.close-open--btns`);

const line1 = document.querySelector(`.line--1`);
const line2 = document.querySelector(`.line--2`);
const line3 = document.querySelector(`.line--3`);





menuButton.addEventListener(`click`, () => {


    if(!line1.classList.contains(`line--1__close`)) {

        line1.classList.remove(`line--1__burger`);
        line2.classList.remove(`line--2__burger`);
        line3.classList.remove(`line--3__burger`);

        line1.classList.add(`line--1__close`);
        line2.classList.add(`line--2__close`);
        line3.classList.add(`line--3__close`);
    } else {
        line1.classList.remove(`line--1__close`);
        line2.classList.remove(`line--2__close`);
        line3.classList.remove(`line--3__close`);

        line1.classList.add(`line--1__burger`);
        line2.classList.add(`line--2__burger`);
        line3.classList.add(`line--3__burger`);
    }

})