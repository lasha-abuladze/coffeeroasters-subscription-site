`use strict`;

const menuButton = document.querySelector(`.close-open--btns`);

const line1 = document.querySelector(`.line--1`);
const line2 = document.querySelector(`.line--2`);
const line3 = document.querySelector(`.line--3`);



const liHome = document.querySelector(`.li--home`);
const liabout = document.querySelector(`.li--about`);
const licreate = document.querySelector(`.li--create`);

const navigation = document.querySelector(`.main--navigation`)





menuButton.addEventListener(`click`, () => {


    if(!line1.classList.contains(`line--1__close`)) {

        line1.classList.remove(`line--1__burger`);
        line2.classList.remove(`line--2__burger`);
        line3.classList.remove(`line--3__burger`);

        line1.classList.add(`line--1__close`);
        line2.classList.add(`line--2__close`);
        line3.classList.add(`line--3__close`);


        liHome.classList.remove(`li-home--close`);
        liabout.classList.remove(`li-about--close`);
        licreate.classList.remove(`li-create--close`);       

        liHome.classList.add(`li-home--open`);
        liabout.classList.add(`li-about--open`);
        licreate.classList.add(`li-create--open`);

        navigation.style.display = `block`;

    } else {
        line1.classList.remove(`line--1__close`);
        line2.classList.remove(`line--2__close`);
        line3.classList.remove(`line--3__close`);

        line1.classList.add(`line--1__burger`);
        line2.classList.add(`line--2__burger`);
        line3.classList.add(`line--3__burger`);

        liHome.classList.remove(`li-home--open`);
        liabout.classList.remove(`li-about--open`);
        licreate.classList.remove(`li-create--open`);

        liHome.classList.add(`li-home--close`);
        liabout.classList.add(`li-about--close`);
        licreate.classList.add(`li-create--close`);

        const intervalId = setInterval(() => {
            navigation.style.display = 'none';
          
            clearInterval(intervalId);
          }, 1000);
        
    }

})