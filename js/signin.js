const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("passwordToggle");
const rememberCheckbox = document.getElementById("remember");
const urlParams = new URLSearchParams(window.location.search);
const returnUrl = urlParams.get("returnUrl");

// * Show Password Icon
passwordToggle.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } 
    else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
});

// * Login Error Message
function showLoginError(message) {
    let errorMessage = document.getElementById("loginError");
    if (!errorMessage) {
        errorMessage = document.createElement("p");
        errorMessage.id = "loginError";
        errorMessage.style.marginTop = "12px";
        errorMessage.style.fontSize = "12px";
        errorMessage.style.color = "#B34A44";
        errorMessage.style.textAlign = "center";
        loginForm.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
}

// * Clear login error message
function clearLoginError() {
    const errorMessage = document.getElementById("loginError");
    if (errorMessage) {
        errorMessage.remove();
    }
}

// * search for users
function getUsers() {
    const storedUsers = localStorage.getItem("veloraUsers");
    if (!storedUsers) {
        return [];
    }
    try {
        return JSON.parse(storedUsers);
    } 
    catch (error) {
        console.error("Unable to read Velora users:", error);
        return [];
    }
}

function getCurrentUser() {
    const localUser = localStorage.getItem("veloraCurrentUser");
    if (localUser) {
        return JSON.parse(localUser);
    }
    const sessionUser = sessionStorage.getItem("veloraCurrentUser");
    if (sessionUser) {
        return JSON.parse(sessionUser);
    }
    return null;
}

// * Sign In Button event
loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearLoginError();
        const enteredUsername = usernameInput.value.trim().toLowerCase();
        const enteredPassword = passwordInput.value;
        // * Validation
        if (enteredUsername === "") {
            showLoginError("Please enter your username.");
            usernameInput.focus();
            return;
        }
        if (enteredPassword === "") {
            showLoginError("Please enter your password.");
            passwordInput.focus();
            return;
        }

        // * check existing user
        const users = getUsers();
        const existingUser = users.find(function (user) {
                return (user.username.toLowerCase() === enteredUsername);
            });

        // * If user not found
        if (!existingUser) {
            showLoginError("No account found with this username.");
            return;
        }

        // * If password is incorrect
        if (existingUser.password !== enteredPassword) {
            showLoginError("Incorrect password. Please try again.");
            passwordInput.focus();
            return;
        }
        const currentUser = {
            id: existingUser.id,
            fullName: existingUser.fullName,
            username: existingUser.username,
            email: existingUser.email
        };

        // * Remembers user (stays in local storage)
        if (rememberCheckbox.checked) {
            localStorage.setItem("veloraCurrentUser", JSON.stringify(currentUser));
            sessionStorage.removeItem("veloraCurrentUser");
        } 
        // * If Remember me checkbox is not ticked (stays in session storage)
        else {
            sessionStorage.setItem("veloraCurrentUser", JSON.stringify(currentUser));
            localStorage.removeItem("veloraCurrentUser");
        }
        // * Redirection to home page
        if (returnUrl) {
            window.location.href = returnUrl;
        }
        else {
            window.location.href = "index.html";
        }
    }
);