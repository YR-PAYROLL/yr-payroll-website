var testimonials_view = document.querySelector('.testimonials-view');
var testimonials_wrapper = document.querySelector('.testimonials-wrapper');
var testimonials = document.querySelectorAll('.testimonials-wrapper .testimonial');
var current_testimonial = 0;
setInterval(() => {
    testimonials_wrapper.style.width = `calc(${testimonials_view.clientWidth}px * ${testimonials.length})`
}, 10);

function slide(){
    testimonials_wrapper.style.transition = 'all .75s ease';
    current_testimonial += 1;
    testimonials_wrapper.style.right = `calc(${current_testimonial} * ${testimonials_view.clientWidth}px * -1)`;
    if (current_testimonial == testimonials.length - 1){
        setTimeout(() => {
            current_testimonial = 0;
            testimonials_wrapper.style.transition = 'all .0s';    
            testimonials_wrapper.style.right = `calc(${current_testimonial} * ${testimonials_view.clientWidth}px * -1)`;
        }, 750);
    }

}

slide();
var interval = setInterval(() => {
    slide()
}, 5000);
