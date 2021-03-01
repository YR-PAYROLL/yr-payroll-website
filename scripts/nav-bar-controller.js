const nav_bar_btn = document.querySelector('header i.fa-bars');
const nav_bar = document.querySelector('header nav');
const header = document.querySelector('header');
var start_scroll_position;

nav_bar_btn.addEventListener('click', () => {
    navControllerToggleClasses();
})
window.addEventListener('scroll', ()=>{
    if (hasClass(nav_bar_btn, 'clicked')){
        if (window.scrollY - header.offsetHeight >= start_scroll_position){
            navControllerToggleClasses();
        }
    }
})

setInterval(() => {
    fixNavTop();
}, 100);

function fixNavTop() {
    nav_bar.style.top = `${header.offsetHeight}px`;
}

function navControllerToggleClasses() {
    nav_bar_btn.classList.toggle('clicked');
    nav_bar.classList.toggle('open');
    if (hasClass(nav_bar, 'open')){
        start_scroll_position = window.scrollY;
    }
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}