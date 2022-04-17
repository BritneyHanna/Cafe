let menuToggler = document.querySelector('.nav-button');
let navlinks = document.querySelectorAll('.nav-link');
let body = document.querySelector('body');

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open')
})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.toggle("open");
    })
})