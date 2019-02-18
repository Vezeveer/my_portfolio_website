

let menu_btn = document.querySelector('.menu-btn');
let navbar =  document.querySelector('.navbar');
let navlinks =  document.querySelectorAll('.navbar a');
let navfiller = document.querySelector('.nav-cnt')

function toggleMenu(){
    if(navbar.style.top == '80px'){
        navbar.style.top = '-500px';
        navfiller.style.height = '0';
    }else{
        navbar.style.top = '80px';
        navfiller.style.height = '80px';
    }
}

menu_btn.addEventListener('click', toggleMenu);

//need to refactor this part
navlinks[1].addEventListener('click', toggleMenu);
navlinks[2].addEventListener('click', toggleMenu);
navlinks[3].addEventListener('click', toggleMenu);
navlinks[4].addEventListener('click', toggleMenu);
