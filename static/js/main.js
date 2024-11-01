document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();

    // Form validation
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Handle form submission
            const email = document.getElementById('email').value;
            alert(`Thank you! We'll contact you at ${email} soon.`);
            form.reset();
        }
        
        form.classList.add('was-validated');
    });
});
