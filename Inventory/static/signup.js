document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate email format
    if (!validateEmail(email)) {
        showMessage('Invalid email format!', 'danger');
        return;
    }

    // Validate password strength
    if (!validatePassword(password)) {
        showMessage('Password must be at least 8 characters long and contain letters & numbers!', 'danger');
        return;
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'danger');
        return;
    }

    // Simulated user registration (Replace with backend API call)
    registerUser(email, password);
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

// Simulated registration function (replace with backend API)
function registerUser(email, password) {
    // Simulated user storage (In real implementation, send this
