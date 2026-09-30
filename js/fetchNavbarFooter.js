// ! Fetch Navbar 
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    updateCartCount();
    setupUserDropdown();
  })
  .catch(error => console.log("Error loading navbar:", error));

// ! Fetch Footer 
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("page-footer").innerHTML = data;
  })
  .catch(error => console.log("Error loading footer:", error));