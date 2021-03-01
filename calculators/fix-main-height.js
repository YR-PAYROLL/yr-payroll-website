setInterval(() => {
    var header_height = document.querySelector('header').clientHeight;
    var footer_height = document.querySelector('footer').clientHeight;
    var window_height = window.innerHeight;
    
    var page_title = document.querySelector('.page-title');
    var page_title_height = page_title.clientHeight;
    var style = page_title.currentStyle || window.getComputedStyle(page_title);
    var page_title_mTop = style.marginTop.split('px')[0];
    var page_title_mBot = style.marginBottom.split('px')[0];

    var res = window_height - header_height - footer_height - page_title_height - page_title_mTop - page_title_mBot;
    document.querySelector('.fix-height').style.minHeight = `${res}px`;
}, 10);

