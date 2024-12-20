let isLoggedIn = localStorage.getItem('loggedIn') === '1';

if (localStorage.getItem('checkout') == null) {
    localStorage.setItem('checkout', "0");
}

const checkout = localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML = checkout;

const logoutElement = document.getElementById('login-logout');
logoutElement.addEventListener("click", logout);

function updateLoginStatus() {
    const loginElement = document.getElementById('login-logout');
    const userElement = document.getElementById('user-details');

    if (localStorage.getItem('loggedIn') === null) {
        localStorage.setItem('loggedIn', '0');
    }

    if (localStorage.getItem('loggedIn') === '1') {
        loginElement.innerHTML = 'Logout';
        userElement.style.display = 'block';
    } else {
        loginElement.innerHTML = 'Login';
        userElement.style.display = 'none';
    }
}

function login() {
    window.location.href = "login.html";
}

function logout() {
    localStorage.setItem('loggedIn', '0');
    window.location.replace('home.html');
}

document.getElementById('login-logout').addEventListener('click', () => {
    if (isLoggedIn) {
        logout();
    } else {
        login();
    }
});

updateLoginStatus();




