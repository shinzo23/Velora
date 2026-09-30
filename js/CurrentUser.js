// ! Get current logged-in user
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

// ! Setup user dropdown
function setupUserDropdown() {
    const userButton = document.getElementById("userButton");
    const userDropdownMenu = document.getElementById("userDropdownMenu");
    const welcomeUser = document.getElementById("welcomeUser");
    const logoutButton = document.getElementById("logoutButton");
    if (!userButton || !userDropdownMenu || !welcomeUser || !logoutButton) {
        return;
    }
    // ! Show current username
    const user = getCurrentUser();
    if (user) {
        welcomeUser.textContent = `Welcome, ${user.username}`;
        logoutButton.querySelector("span").textContent = "Sign Out";
    }
    else {
        welcomeUser.textContent = "Welcome, Guest";
        logoutButton.querySelector("span").textContent = "Sign In";
    }
    // ! Open / close dropdown
    userButton.addEventListener("click", function () {
        userDropdownMenu.classList.toggle("show");

    });
    // ! Logout
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("veloraCurrentUser");
        sessionStorage.removeItem("veloraCurrentUser");
        window.location.href = "signin.html";
    });
}