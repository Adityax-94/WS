// Simple Theme JavaScript - Student Project
// This file contains basic theme functionality

console.log('Theme loaded');

// Initialize basic theme functions
(function() {
    'use strict';

    // Simple form validation
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Handle form submission
    function initForms() {
        var forms = document.querySelectorAll('form');
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                var emailInputs = form.querySelectorAll('input[type="email"]');
                emailInputs.forEach(function(input) {
                    if(!validateEmail(input.value)) {
                        e.preventDefault();
                        alert('Please enter a valid email');
                    }
                });
            });
        });
    }

    // Simple navigation toggle
    function initNavigation() {
        var navToggle = document.querySelector('.nav-toggle');
        var nav = document.querySelector('.nav-menu');
        
        if(navToggle && nav) {
            navToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
            });
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        initForms();
        initNavigation();
        console.log('Theme initialized');
    });
})();

// Prevent default hash links
document.addEventListener('click', function(e) {
    if(e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});
