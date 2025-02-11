// Form validation function
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Get form elements
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    // Validate Full Name
    if (!fullName.value.trim()) {
        nameError.textContent = 'Full name is required';
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validate Message
    if (!message.value.trim()) {
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        // Here you would typically send the data to your server
        alert('Thank you for your message! We will get back to you soon.');
        event.target.reset(); // Reset form
    }

    return isValid;
}

// Optional: Add smooth scrolling for the "Get In Touch" button
document.querySelector('.get-in-touch').addEventListener('click', function() {
    document.querySelector('.contact-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
}); 