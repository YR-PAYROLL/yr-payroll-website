const trigger_blocks = document.querySelectorAll('.trigger');
var trigger_distance = 150; // px in page
if (window.innerWidth <= 1023) {
    trigger_distance = 125;
}
if (window.innerWidth <= 767) {
    trigger_distance = 100;
}

window.addEventListener('scroll', toggleTrigger);

setInterval(() => {
    toggleTrigger();
}, 100);

function toggleTrigger() {
    var scroll = window.scrollY;
    trigger_blocks.forEach((block) => {
        var offset_top = block.offsetTop;
        if (offset_top <= scroll + window.innerHeight - trigger_distance) {
            block.classList.add('trigger-on');
        } else {
            block.classList.remove('trigger-on');
        }
    })
}