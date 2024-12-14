// Some basic functionality for login, checkout, user-details
// Amend and supplement in your project as you see fit

// Set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout', "0");
}

const checkout = localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML = checkout;

// Run to update login/
const logoutElement = document.getElementById('login-logout');

// Add a listener for add to cart if such a button id is pressed
logoutElement.addEventListener("click", logout);

function logout() {
    // If user is logged in, then log them out and redirect to home page
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === "1") {
        localStorage.setItem('loggedIn', "0");
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}

// Check if user is logged in or logged out...
checkLoginStatus()

function checkLoginStatus() {
    const loggedIn = localStorage.getItem('loggedIn');
    let element = document.getElementById("user-details");
    if (loggedIn === "1") {
        // Change the text from Login to Logout
        document.querySelector('#login-logout').innerHTML = "Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else {
        // Use add to hide the display of User Details
        // element.classList.add("d-none");
        // element.classList.remove("d-show");
        document.querySelector('#login-logout').innerHTML = "Login";
        element = document.getElementById("login-logout");
        element.setAttribute("href", "login.html");
        element = document.getElementById("user-details");
        element.style.display = 'none';
    }
}




