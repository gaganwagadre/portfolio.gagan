document.addEventListener('DOMContentLoaded', function () {
    // Bubble creation logic
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
        const bubbleSize = Math.random() * 40 + 20; // Random size between 20 and 60px
        const bubbleDuration = Math.random() * 15 + 10; // Random duration between 10 and 25s
        const bubbleDelay = Math.random() * 5; // Random delay between 0 and 5s

        bubble.style.width = `${bubbleSize}px`;
        bubble.style.height = `${bubbleSize}px`;
        bubble.style.animationDuration = `${bubbleDuration}s`;
        bubble.style.animationDelay = `${bubbleDelay}s`;
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }
    });

    
});

//contact info----------------------------------


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // You can handle form submission here (e.g., send data to backend)
        // For demonstration, we'll just log the form data
        console.log(`Name: ${name}, Email: ${gagan}, Message: ${message}`);

        // Optional: Clear form fields after submission
        form.reset();
    });
});
