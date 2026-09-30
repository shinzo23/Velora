const urlParams = new URLSearchParams(window.location.search);
const returnUrl = urlParams.get("returnUrl");
const signupForm = document.getElementById("signupForm");
const fullName = document.getElementById("fullName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");
const successMessage = document.getElementById("successMessage");

// * Show Password Icon
function setupPasswordToggle(input, button) {
    button.addEventListener("click", function () {
            if (input.type === "password") {
                input.type = "text";
                button.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
            } 
            else {
                input.type = "password";
                button.innerHTML = '<i class="fa-regular fa-eye"></i>';
            }
        }
    );
}
setupPasswordToggle(password, document.getElementById("passwordToggle"));
setupPasswordToggle(confirmPassword, document.getElementById("confirmPasswordToggle"));

// * Show error message
function showError(input, errorElement, message) {
    input.classList.add("input-error");
    errorElement.textContent = message;
}

// * Clear error message
function clearError(input, errorElement) {
    input.classList.remove("input-error");
    errorElement.textContent = "";
}

// ! Validations
// * Full Name validation
function validateFullName() {
    const value = fullName.value.trim();
    const error = document.getElementById("fullNameError");
    if (value === "") {
        showError(fullName, error, "Please enter your full name.");
        return false;
    }
    if (value.length < 3) {
        showError(fullName, error, "Name must contain at least 3 characters.");
        return false;
    }
    clearError(fullName, error);
    return true;
}

// * Username validation
function validateUsername() {
    const value = username.value.trim();
    const error = document.getElementById("usernameError");
    if (value === "") {
        showError(username, error, "Please choose a username.");
        return false;
    }
    if (value.length < 4) {
        showError(username, error, "Username must contain at least 4 characters.");
        return false;
    }
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    if (!usernamePattern.test(value)) {
        showError(username, error, "Use only letters, numbers and underscores.");
        return false;
    }
    clearError(username, error);
    return true;
}

// * Email validation
function validateEmail() {
    const value = email.value.trim();
    const error = document.getElementById("emailError");
    if (value === "") {
        showError(email, error, "Please enter your email address.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
        showError(email, error, "Please enter a valid email address.");
        return false;
    }
    clearError(email, error);
    return true;
}

// * Password validation
function validatePassword() {
    const value = password.value;
    const error = document.getElementById("passwordError");
    if (value === "") {
        showError(password, error, "Please create a password.");
        return false;
    }
    if (value.length < 8) {
        showError(password, error, "Password must contain at least 8 characters.");
        return false;
    }
    if (!/[A-Z]/.test(value)) {
        showError(password, error, "Password must contain at least one uppercase letter.");
        return false;
    }
    if (!/[0-9]/.test(value)) {
        showError(password, error, "Password must contain at least one number."
        );
        return false;
    }
    clearError(password, error);
    return true;
}

// * Confirm password field 
function validateConfirmPassword() {
    const value = confirmPassword.value;
    const error = document.getElementById("confirmPasswordError");
    if (value === "") {
        showError(confirmPassword, error, "Please confirm your password.");
        return false;
    }
    if (value !== password.value) {
        showError(confirmPassword, error, "Passwords do not match.");
        return false;
    }
    clearError(confirmPassword, error);
    return true;
}

// * Terms & Conditions checkbox
function validateTerms() {
    const error = document.getElementById("termsError");
    if (!terms.checked) {
        error.textContent = "Please accept the Terms & Conditions.";
        return false;
    }
    error.textContent = "";
    return true;
}

function getUsers() {
    const users = localStorage.getItem("veloraUsers");
    if (!users) {
        return [];
    }
    try {
        return JSON.parse(users);
    } 
    catch (error) {
        return [];
    }
}

// * Check no existing user with similar validation fields
function checkExistingUser() {
    const users = getUsers();
    const enteredUsername = username.value.trim().toLowerCase();
    const enteredEmail = email.value.trim().toLowerCase();
    // * Username & email should be unique
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const usernameExists = users.some(function (user) {
                return (user.username.toLowerCase() === enteredUsername);
            }
        );
    if (usernameExists) {
        showError(username, usernameError, "This username is already taken.");
        return false;
    }
    const emailExists = users.some(function (user) {
        return (user.email.toLowerCase() === enteredEmail);
            }
        );
    if (emailExists) {
        showError(email, emailError, "An account with this email already exists.");
        return false;
    }
    return true;
}
signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        successMessage.classList.remove("show");
        const validName = validateFullName();
        const validUsername = validateUsername();
        const validEmail = validateEmail();
        const validPassword = validatePassword();
        const validConfirmPassword = validateConfirmPassword();
        const validTerms = validateTerms();
        if (!validName || !validUsername || !validEmail || !validPassword || !validConfirmPassword || !validTerms) {
            return;
        }
        if (!checkExistingUser()) {
            return;
        }
        const users = getUsers();
        // * Add new user signed up
        const newUser = {
            id: Date.now(),
            fullName: fullName.value.trim(),
            username: username.value.trim(),
            email: email.value.trim().toLowerCase(),
            password: password.value,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem("veloraUsers", JSON.stringify(users));
        localStorage.setItem("veloraCurrentUser", JSON.stringify({
                id: newUser.id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email
            })
        );
        successMessage.classList.add("show");
        signupForm.reset();
        // * Redirection to home page
        setTimeout(function () {
                if (returnUrl) {
                    window.location.href = "signin.html?returnUrl=" + encodeURIComponent(returnUrl);
                }
                else {
                    window.location.href = "signin.html";
                }
            },
            1500
        );
    }
);