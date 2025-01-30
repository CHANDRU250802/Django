document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded credentials for authentication
    const correctEmail = 'user@example.com';
    const correctPassword = 'password123';

    // Validate credentials
    if (email === correctEmail && password === correctPassword) {
        alert('Login successful!');
        // Redirect to home page or profile page
        window.location.href = 'home.html';  // Change to your landing page URL
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
