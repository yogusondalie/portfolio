'user strict'
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
    scrollIntoView(link);
});

// contact btn links to contact page
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
    scrollIntoView('#contact');
});

function scrollIntoView(slector) {
    const scrollTo = document.querySelector(slector);
    scrollTo.scrollIntoView({
        behavior: 'smooth'
    });
}

//change home opacity when user scrolls down the page
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
console.log(window.scrollY);
console.log(`homeHeight: ${homeHeight}`);
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
});
// const homeChange = document.addEventListener('scroll',
//     function (e) {
//         if (window.scrollY > 500) {
//             const home = document.getElementById("#home");
//             home.classList.add("reduced-opacity");
//         }
//     });