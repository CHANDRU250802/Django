document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Basic email validation using regex
    if (!validateEmail(email)) {
        showMessage('Invalid email format!', 'error');
        return;
    }

    // Password strength validation
    if (!validatePassword(password)) {
        showMessage('Password must be at least 8 characters long and contain letters & numbers!', 'error');
        return;
    }

    // Simulated database of users (for demo purposes)
    const usersDB = {
        "user@example.com": "hashed_password_123", // Simulated hashed password
    };

    // Simulated hashing function (In a real-world app, use a backend with bcrypt)
    const hashedInputPassword = fakeHash(password);

    // Authentication check
    if (usersDB[email] && usersDB[email] === hashedInputPassword) {
        showMessage('Login successful!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect on success
        }, 1000);
    } else {
        trackLoginAttempts(email);
    }
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

// Function to validate password strength
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}

// Simulated password hashing function (replace with backend authentication)
function fakeHash(password) {
    return btoa(password).split('').reverse().join(''); // Simple encoding for demo (NOT SECURE)
}

// Function to track login attempts and prevent brute force attacks
let loginAttempts = {};
function trackLoginAttempts(email) {
    if (!loginAttempts[email]) {
        loginAttempts[email] = { count: 0, time: Date.now() };
    }

    let attempt = loginAttempts[email];

    if (attempt.count >= 3 && Date.now() - attempt.time < 30000) { // 30 sec lockout
        showMessage('Too many failed attempts! Try again later.', 'error');
        return;
    }

    attempt.count++;

    if (attempt.count >= 3) {
        attempt.time = Date.now();
    }

    showMessage('Invalid email or password. Please try again.', 'error');
}

// Function to display messages
function showMessage(msg, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.innerText = msg;
    messageBox.className = type; // Apply CSS class based on type
    messageBox.style.display = 'block';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}
