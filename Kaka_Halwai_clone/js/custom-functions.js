/*
  Student JavaScript - Learning Project
  Basic DOM manipulation and event handling
*/

// Student Note: Simple utilities for the website

// Function to validate email addresses
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
        console.log('Menu toggled');
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    
    if (emailInput && !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    console.log('Form submitted successfully');
    alert('Thank you! Your form has been submitted.');
}

// Initialize page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded and ready!');
    
    // Add event listeners to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
            }
        });
    });
    
    console.log('Event listeners attached');
});

// Function to add animation class when element comes into view
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Call observe function after page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

console.log('Custom JavaScript loaded');
