// JavaScript functions for MH Synthevia website

document.addEventListener('DOMContentLoaded', function() {
    console.log('MH Synthevia website loaded');
    initializeNavigation();
    initializeForm();
});

// Initialize navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Navigating to: ' + this.textContent);
        });
    });
}

// Initialize form submission
function initializeForm() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
}

// Handle form submissions
function handleFormSubmit(form) {
    const formData = new FormData(form);
    console.log('Form submitted:', formData);
    
    // You can add API call here
    alert('Thank you for your submission!');
    form.reset();
}

// Add to cart function for shop
function addToCart(productName, price) {
    console.log('Added to cart: ' + productName + ' - $' + price);
    alert(productName + ' has been added to your cart!');
}

// Toggle menu for mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
}

// Smooth scroll to section
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Track analytics
function trackEvent(eventName, eventData) {
    console.log('Event tracked: ' + eventName, eventData);
}

// Initialize tooltips
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseover', function() {
            const tooltip = this.getAttribute('data-tooltip');
            console.log('Tooltip: ' + tooltip);
        });
    });
}

// Load external content
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.log('Error loading content:', error));
}

// Export functions for use in HTML
window.addToCart = addToCart;
window.toggleMenu = toggleMenu;
window.smoothScroll = smoothScroll;
window.trackEvent = trackEvent;
window.loadContent = loadContent;