`use strict`




const answers = document.querySelectorAll(`.ul--answers`);




document.addEventListener(`click`, (e) => {

    if(e.target.parentElement.classList.contains(`li--answer`)) {

        // console.log(e.target)
        
        
        const perent = e.target.parentElement.parentElement;
        const radioInputs = perent.querySelectorAll(`.radio-inp`);
        const liArr = perent.querySelectorAll(`.li--answer`);

        const xx = Number(perent.classList[1][(perent.classList[1].length -1)]);
        answers[xx]?.classList?.remove(`display-none`);


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

    else if (e.target.classList.contains(`li--answer`)) {

        // console.log(e.target)

        const perent = e.target;
        const radioInputs = perent.querySelectorAll(`.radio-inp`)
        const liArr = perent.parentElement.querySelectorAll(`.li--answer`);

        // const xx = Number(perent.classList[1][(perent.classList[1].length -1)]);
        // answers[xx]?.classList?.remove(`display-none`);

        const xx = Number(perent.parentElement.classList[1].slice(-1));
        answers[xx]?.classList?.remove(`display-none`);

        console.log(liArr)


        radioInputs.forEach((el, i) => {

            if(el.checked) {
                console.log(`hi`)
            }


            // if(el.checked) {
            //     liArr.forEach(el => {
            //         if(el.classList.contains(`checked`)) {
            //             el.classList.remove(`checked`)
            //         }
            //     })
            //     liArr[i].classList.add(`checked`)
            // }
        })

    }
})