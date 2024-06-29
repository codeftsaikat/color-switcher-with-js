const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach((eachBtn) => {
        console.log(eachBtn)
        eachBtn.addEventListener('click', (e) => {
                if (e.target.id === "Gray") {
                        body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === "Red") {
                        body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === "Blue") {
                        body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === "Orange") {
                        body.style.backgroundColor = e.target.id;
                }
        })

})