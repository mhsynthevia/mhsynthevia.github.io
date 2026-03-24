// script.js

// JavaScript Functions for Forms, Navigation, Animations, and Interactive Features

// Form functionality
function validateForm() {
    const form = document.getElementById('myForm');
    let isValid = true;

    // Validate inputs
    Array.from(form.elements).forEach((input) => {
        if (input.required && !input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Navigation functionality
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Animation functionality
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    let last = +new Date();
    const fade = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity < 1) {
            requestAnimationFrame(fade);
        }
    };
    fade();
}

// Interactive feature
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myButton').addEventListener('click', () => {
        if (validateForm()) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill all required fields.');
        }
    });
});
