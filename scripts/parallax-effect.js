const parallax_sections = document.querySelectorAll('main section.parallax');

window.addEventListener('scroll', () => {
    parallax_sections.forEach((e) =>{
        parallaxEffectBG(e);
    })
})

function parallaxEffectBG(element) {
    var scroll_position = window.scrollY;
    const element_offset_top = element.offsetTop;
    var parralax = '0 0';
    if (scroll_position < element_offset_top) {
        parralax = `0px 0px`;
    }else {
        parralax = `0px ${(scroll_position * 0.75) - element_offset_top}px`;
    }
    element.style.backgroundPosition = parralax;
}