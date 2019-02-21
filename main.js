
let menuContainer = document.querySelector('.menu-container');
let menuLinks = document.querySelectorAll('.lnk');
let menuBarsC = document.querySelector('.menu-bars-container');

function toggleMenu() {
    console.log('fire')
    menuBarsC.classList.toggle("change");
    menuContainer.classList.toggle("change-menu");
}

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', toggleMenu);
}