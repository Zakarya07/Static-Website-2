// Calling the function date with the IFFE Js MSInputMethodContext, that call the function itself
(function date() {
    let span_date = document.querySelector(".date");
    let date = new Date;
    let month, year;

    // get the current year
    year = date.getFullYear();
    // get the current Month
    month = date.getMonth();
    // Add 1 to the current month beacause by default the months begin at 0 not 1 and finish at 11 not 12
    month += 1;
    // Put an zero(0) before the month if is between 1 and 9 ///example ==> before month:march=3 => after:march=03 
    if (month > 0 && month < 10) {
        month = `0${month}`;
    }
    // Innering HTML in the span 
    span_date.innerHTML = `${month}/${year}`;
}())

window.addEventListener('scroll', provideAppear);

function provideAppear() {
    let shots = document.querySelectorAll(".specific_service");
    let windowSize = window.innerHeight;

    shots.forEach(shot => {
        let shotPosition = shot.getBoundingClientRect().top * 1.45;
        if (shotPosition < windowSize) {
            shot.classList.add("fadeUp")
        } else {
            shot.style = "";
            shot.classList.remove("fadeUp")
        }
    })
}


let buttonTop = document.querySelector(".toTopButton");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (document.documentElement.scrollTop > 75) {
        buttonTop.style = "display:block;";
    }
    else {
        buttonTop.style = "display:none";
    }
}

buttonTop.addEventListener('click', scrollToTop);
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

