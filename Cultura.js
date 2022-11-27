// SCROLL REVEAL
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.entradas', { delay: 500 });
ScrollReveal().reveal('.blog-video', { delay: 700 });
ScrollReveal().reveal('.wait', { delay: 700 });

// GO TOP BTN
let mybutton = document.getElementsByClassName('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}