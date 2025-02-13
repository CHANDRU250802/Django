document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");

    // Function to create or update error messages
    function createErrorMessage(input, message) {
        let errorElement = input.parentNode.querySelector(".error-message");

        if (!errorElement) {
            errorElement = document.createElement("small");
            errorElement.classList.add("error-message");
            errorElement.style.color = "red";
            errorElement.style.display = "block"; // Ensure it's visible
            input.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
    }

    // Function to remove error messages
    function clearErrorMessage(input) {
        let errorElement = input.parentNode.querySelector(".error-message");
        if (errorElement) {
            errorElement.remove(); // Completely remove the element
        }
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // ✅ Username validation (At least 3 characters, no spaces)
        const usernameValue = username.value.trim();
        if (usernameValue.length < 3) {
            createErrorMessage(username, "Username must be at least 3 characters long.");
            isValid = false;
        } else {
            clearErrorMessage(username);
        }

        // ✅ Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            createErrorMessage(email, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearErrorMessage(email);
        }

        // ✅ Password validation (8+ characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
        const passwordValue = password.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;
        if (!passwordRegex.test(passwordValue)) {
            createErrorMessage(password, "Password must be at least 8 characters with an uppercase, lowercase, number, and special character.");
            isValid = false;
        } else {
            clearErrorMessage(password);
        }

        // ✅ Confirm password validation
        if (passwordValue !== confirmPassword.value.trim()) {
            createErrorMessage(confirmPassword, "Passwords do not match.");
            isValid = false;
        } else {
            clearErrorMessage(confirmPassword);
        }

        // ✅ Submit form only if everything is valid
        if (isValid) {
            alert("Sign-up successful!");
            form.submit(); // Proceed with submission
        }
    });
});
