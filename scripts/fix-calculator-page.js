setInterval(() => {
    var header_height = document.querySelector('header').clientHeight;
    var footer_height = document.querySelector('footer').clientHeight;
    var window_height = window.innerHeight;

    console.log(window_height)

    document.querySelector('.all-calculators').style.minHeight = `${window_height - footer_height - header_height}px`;
}, 10);