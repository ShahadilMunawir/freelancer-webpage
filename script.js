let navBar = document.querySelector('nav');
let menuLinks = document.getElementById('menuLinks');

window.onscroll = () => {
    if (window.scrollY > 0) {
        navBar.style.background = '#eefff9';
    } else {
        navBar.style.background = 'transparent';
    }
}

const toggleMenu = () => {
    menuLinks.classList.toggle('show-menu');
}