if (localStorage.getItem('loggedIn') === '1') {
    window.location.href = "index.html";
}

const loginStatus = document.getElementById('user-login');
loginStatus.addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('emailAddressID').value;
    const password = document.getElementById('passwordID').value;

    if (email === "abelavskis@email.com" && password === "password")  {
        localStorage.setItem('loggedIn', "1");
        updateLoginStatus();
        window.location.href = "index.html";
    }
    else {
        alert("Invalid login details");
    }
}