const buyNowButton = document.getElementById('buy-now');

const loggedIn = localStorage.getItem('loggedIn') === "1";

if (!loggedIn) {
    window.location.href = "login.html";
}

buyNowButton.addEventListener("click", handlePurchaseConfirmation);

function resetCheckoutNumber() {
    localStorage.setItem('checkout', '0');
    document.querySelector('#checkout').innerHTML = `<span class="checkout-count"> 0</span>`;
}

function showPaymentSuccess() {
    document.getElementById("payment-failure").style.display = 'none';
    document.getElementById("payment-success").style.display = 'block';
}

function showPaymentFailure() {
    document.getElementById("payment-failure").style.display = 'block';
    document.getElementById("payment-success").style.display = 'none';
}

function handlePurchaseConfirmation(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardCvv = document.getElementById('cardCvv').value;

    if (cardNumber === "1234 5678 9102 3456" && cardCvv === "123" && checkout !== "0") {
        showPaymentSuccess();
        resetCheckoutNumber();
    } else {
        showPaymentFailure();
    }
    return false;
}


