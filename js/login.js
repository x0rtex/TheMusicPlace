const loginStatus = document.getElementById('user-login');
// add a listener for add to cart if such a button id is pressed
loginStatus.addEventListener("submit", loginUser);

event.preventDefault();

// Wait for submit button to be clicked on login form -
// This code only invoked if login form submit button clicked
function loginUser() {
    const email = document.getElementById('emailAddressID').value;
    const password = document.getElementById('passwordID').value;

    if (email === "abelavskis@email.com" && password === "password")  {
        localStorage.setItem('loggedIn', "1");
        window.location.href = "index.html";  // Redirect to home page
    }
    else {
        alert("Invalid login details");
        // Login unsuccessful, error message appears
        localStorage.setItem('loggedIn', "0");
        // const element = document.getElementById("login-error");

        // element.classList.remove("d-none");
        // element.classList.remove("d-block");
    }

    event.preventDefault();
}

