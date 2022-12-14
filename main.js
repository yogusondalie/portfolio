'use strict'

// Decorated navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    /**checking navbar Height */
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// link with each page to scroll to view
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    // To fold dropdown menu from toggle button(mobile)
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Toggle button for mobile screen 
const navebarToggleBtn = document.querySelector('.navbar__toggle-btn');
navebarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// contact btn links to contact page
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

//change home opacity when user scrolls down the page
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
// console.log(window.scrollY);
// console.log(`homeHeight: ${homeHeight}`);
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handling arrow-up icon
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});


arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    // Remove selection from the previous item and slect the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    // console.log(filter);
    projectContainer.classList.add('anim-out');
    // ??????????????? ????????? ?????? ????????? ????????? ????????? ???????????? ????????? ?????? 
    // Animaition function is focused out of screen as anim-out.
    // So as time passed the function needs to be removed from code.

    setTimeout(() => {

        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});

function scrollIntoView(slector) {
    const scrollTo = document.querySelector(slector);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
}