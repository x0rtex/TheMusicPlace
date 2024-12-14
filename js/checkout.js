const paymentFailureElement = document.getElementById("payment-failure");
paymentFailureElement.style.display = 'none';

const paymentSuccessElement = document.getElementById("payment-success");
paymentSuccessElement.style.display = 'none';

const buyNowButton = document.getElementById('buy-now');

let element = document.getElementById("payment-failure");
element.style.display = 'none';
element = document.getElementById("payment-success");
element.style.display = 'none';

const loggedIn = localStorage.getItem('loggedIn');
if (loggedIn === "0") {
    window.location.href = "login.html";  // Redirect to login page
}

// Add a listener so that we run this code and prevent default for submit...
buyNowButton.addEventListener("click", (event) => {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardCvv = document.getElementById('cardCvv').value;

    if (cardNumber === "1234 5678 9102 3456" && cardCvv === "123") {
        document.getElementById("payment-failure").style.display = 'none';
        document.getElementById("payment-success").style.display = 'block';
    } else {
        document.getElementById("payment-failure").style.display = 'block';
        document.getElementById("payment-success").style.display = 'none';
    }
    return false;
});


