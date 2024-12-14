const checkout = document.getElementById('buy-now');
// Add a listener for add to cart if such a button id is pressed

let element = document.getElementById("payment-failure");
element.style.display = 'none';
element = document.getElementById("payment-success");
element.style.display = 'none';

const loggedIn = localStorage.getItem('loggedIn');
if (loggedIn === "0") {
    window.location.href = "login.html";  // Redirect to login page
}

// Add a listener so that we run this code and prevent default for submit...
checkout.addEventListener("click", () => {
    let element;
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    const cardCvv = document.getElementById('cardCvv').value;

    if (cardNumber === "1234 5678 9102 3456" && cardCvv === "123") {
        alert("payment success");
        element = document.getElementById("payment-failure");
        element.style.display = 'none';
        // element.classList.add("d-none");  // Bootstrap hide
        element = document.getElementById("payment-success");
        element.style.display = 'block';
        // element.classList.remove("d-none");  // Bootstrap hide
        // Now set cart total to zero
        const total = 0;
        // Makes sure that when we goto another page the total is zero
        localStorage.setItem('checkout', `${total}`);

    } else {
        alert("payment failure");
        element = document.getElementById("payment-failure");
        element.style.display = 'block';
        element = document.getElementById("payment-success");
        element.style.display = 'none';
        // element.classList.add("d-none");
        // element = document.getElementById("payment-failure");
        // element.classList.remove("d-none");
    }
    return false;
})


