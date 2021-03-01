const form_inputs = document.querySelectorAll('main section.contact-us .contact-form-wrapper form .input-div.reg input');

form_inputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
    })
    input.addEventListener('focusout', () => {
        if (checkValue(input)) {
            input.parentElement.classList.remove('active');
        }
    })
})

function checkValue(input) {
    return ('' == input.value)
}