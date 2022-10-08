//* changement d'apparence de la navbar au scroll
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('nav').css('background-color', '#17283d');
    } else {
        $('nav').css('background-color', 'transparent');
    }
});

$(document).ready(function () {
    $('nav ul li').click(function () {
        $('li').removeClass("active");
        $(this).addClass("active");
    });
});


//* Activation ou non de la class active des liens de la NavBar en fonction de la page actuelle lors du scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll("nav ul li");

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(pageYoffset);
        if (pageYOffset >= sectionTop - sectionHeight / 10) {
            current = section.getAttribute('id');
        } 
    })
    navLinks.forEach( link => {
        if(link.classList.contains(current)){
            link.classList.add('active')
        }else {
            link.classList.remove('active');
        }
    })
})