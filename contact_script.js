// DOM Elements
const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.navigation');
const contactForm = document.querySelector('.contact-left');
const contactInputs = document.querySelectorAll('.contact-inputs');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Form Validation
contactForm.addEventListener('submit', (e) => {
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // Validate each input
    contactInputs.forEach(input => {
        if (!input.value.trim()) {
            showError(input, 'This field is required');
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, 'Please enter a valid email');
            isValid = false;
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    } else {
        // If valid, you could add AJAX submission here
        console.log('Form is valid, submitting...');
        // Uncomment below for AJAX submission
        // submitForm(e);
    }
});

// Helper Functions
function showError(input, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = 'red';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '5px';
    input.parentNode.insertBefore(error, input.nextSibling);
    
    // Highlight the input
    input.style.borderColor = 'red';
    
    // Remove error on input
    input.addEventListener('input', () => {
        error.remove();
        input.style.borderColor = '';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// AJAX Form Submission
function submitForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.text();
    })
    .then(data => {
        // Show success message
        alert(data);
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem submitting your form. Please try again.');
    })
    .finally(() => {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
}