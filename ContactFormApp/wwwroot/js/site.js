// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault();
            }
        });
    }

    // Initialize any tooltips
    initializeTooltips();

    // Add animation effects to the page
    addAnimationEffects();
});

// Form validation function
function validateForm() {
    let isValid = true;

    // Get form fields
    const nameField = document.getElementById('Name');
    const emailField = document.getElementById('Email');
    const subjectField = document.getElementById('Subject');
    const messageField = document.getElementById('Message');

    // Clear previous error styles
    clearErrorStyles();

    // Validate name
    if (nameField && (nameField.value.trim() === '' || nameField.value.length > 100)) {
        setErrorFor(nameField);
        isValid = false;
    }

    // Validate email
    if (emailField) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() === '' || !emailPattern.test(emailField.value) || emailField.value.length > 100) {
            setErrorFor(emailField);
            isValid = false;
        }
    }

    // Validate subject
    if (subjectField && (subjectField.value.trim() === '' || subjectField.value.length > 200)) {
        setErrorFor(subjectField);
        isValid = false;
    }

    // Validate message
    if (messageField && (messageField.value.trim() === '' || messageField.value.length > 2000)) {
        setErrorFor(messageField);
        isValid = false;
    }

    return isValid;
}

// Set error styles for invalid field
function setErrorFor(input) {
    input.classList.add('is-invalid');
    input.classList.add('border-danger');
    
    // Add shake animation
    input.classList.add('shake-animation');
    setTimeout(function() {
        input.classList.remove('shake-animation');
    }, 500);
}

// Clear all error styles
function clearErrorStyles() {
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.classList.remove('is-invalid');
        field.classList.remove('border-danger');
    });
}

// Initialize tooltips for any elements with data-toggle="tooltip"
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    if (typeof bootstrap !== 'undefined') {
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}

// Add animation effects to elements
function addAnimationEffects() {
    // Fade in the card when page loads
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(function() {
            card.style.opacity = '1';
        }, 200);
    }

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add focus effect for form fields
    const formFields = document.querySelectorAll('.form-control');
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-2px)';
        });
        
        field.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}