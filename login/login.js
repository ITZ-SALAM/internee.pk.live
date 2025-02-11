// Function to toggle password visibility
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    // Toggle between password and text type
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '👁️‍🗨️';
    } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
    }
});

// Form validation function
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Get form elements
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages and invalid classes
    emailError.textContent = '';
    passwordError.textContent = '';
    email.classList.remove('invalid');
    password.classList.remove('invalid');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        email.classList.add('invalid');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        email.classList.add('invalid');
        isValid = false;
    }

    // Password validation
    if (!password.value) {
        passwordError.textContent = 'Password is required';
        password.classList.add('invalid');
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        password.classList.add('invalid');
        isValid = false;
    }

    // If form is valid, proceed with login
    if (isValid) {
        // Handle remember me functionality
        if (document.getElementById('rememberMe').checked) {
            localStorage.setItem('rememberedEmail', email.value);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        // Redirect to home page after successful login
        window.location.href = '../index.html';
    }

    return isValid;
}

// Load remembered email on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }
}); 