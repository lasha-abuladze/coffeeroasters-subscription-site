`use strict`




const answers = document.querySelectorAll(`.ul--answers`);

let count = 0;



document.addEventListener(`click`, (e) => {

    if(e.target.parentElement.classList.contains(`li--answer`)) {
        
        
        const perent = e.target.parentElement.parentElement;
        const radioInputs = perent.querySelectorAll(`.radio-inp`);
        const liArr = perent.querySelectorAll(`.li--answer`);


        radioInputs.forEach((el, i) => {
            if(el.checked) {

                count ++
                console.log(count)

                liArr.forEach(el => {
                    if(el.classList.contains(`checked`)) {
                        el.classList.remove(`checked`)
                    }
                })



                liArr[i].classList.add(`checked`)
            }
        })





                // // count ++;

        // console.log(answers[count])

        // // answers.forEach((el, i) => {
        // //     el[count].classList.remove(`display-none`)
        // // })

    } 

    else if (e.target.classList.contains(`li--answer`)) {

        const perent = e.target;
        const radioInputs = perent.querySelectorAll(`.radio-inp`)
        const liArr = perent.parentElement.querySelectorAll(`.li--answer`);


        radioInputs.forEach((el, i) => {
            if(el.checked) {
                liArr.forEach(el => {
                    if(el.classList.contains(`checked`)) {
                        el.classList.remove(`checked`)
                    }
                })
                liArr[i].classList.add(`checked`)
            }
        })

    }
})