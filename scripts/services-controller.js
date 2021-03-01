const services_divs = document.querySelectorAll('section.services .service');
const desc_divs = document.querySelectorAll('section.services .service .desc');

services_divs.forEach((s) => {
    s.setAttribute('data-open', 'false');
})

function closeAll() {
    services_divs.forEach((s) => {
        s.setAttribute('data-open', 'false');
    })
    desc_divs.forEach((d) => {
        d.classList.remove('show');
        d.style.height = '0px';
    })
}

function openDiv(s_div_clicked) {
    s_div_clicked.setAttribute('data-open', 'true');
    var current_d_div = s_div_clicked.children[2];
    current_d_div.classList.add('show')
    current_d_div.style.height = `${current_d_div.scrollHeight}px`;
}

services_divs.forEach((s) => {
    s.addEventListener('click', () => {
        if (s.getAttribute('data-open') == 'false'){
            console.log('close')
            closeAll();
            openDiv(s);
        }else{
            closeAll();
        }
    })
})