const header = document.querySelector("header");
const toTop = document.querySelector(".btn-scrollup");

window.addEventListener("scroll", function(){
    header.classList.toggle('sticky', window.scrollY > 650)
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 650){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menu-options');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

const sr = ScrollReveal({

    distance: '60px',
    duration: 1400,
    reset: true

})
    if (window.innerWidth < 768) {
        ScrollReveal({

        distance: '0px',
        duration: 0,
        reset: false
    })
};


sr.reveal('.home-texts', {delay:90 ,origin:'left'});
sr.reveal('.home-image', {delay:90 ,origin:'right'});
sr.reveal('.rightjs', {delay:90 ,origin:'right'});
sr.reveal('.leftjs', {delay:90 ,origin:'left'});
sr.reveal('.menu-text', {delay:90 ,origin:'top'});
sr.reveal('.best-foods--container', {delay:90 ,origin:'bottom'});