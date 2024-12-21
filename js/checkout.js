import { updateCheckoutUI } from './load-products.js';

const buyNowButton = document.getElementById('buy-now');

const loggedIn = localStorage.getItem('loggedIn') === "1";

if (!loggedIn) {
    window.location.href = "login.html";
}

buyNowButton.addEventListener("click", handlePurchaseConfirmation);

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
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartIsEmpty = Object.keys(cart).length === 0;

    if (cardNumber === "1234 5678 9102 3456" && cardCvv === "123" && !cartIsEmpty) {
        showPaymentSuccess();
        resetCart();
    } else {
        showPaymentFailure();
    }
    return false;
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || {};
}

function renderCart() {
  const cart = getCart();
  const cartContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");

  cartContainer.innerHTML = "";
  totalContainer.innerHTML = "";

  if (Object.keys(cart).length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    updateCheckoutUI();
    return;
  }

  Object.entries(cart).forEach(([productId, product]) => {
    const { name, quantity } = product;

    const itemHTML = `
      <div class="cart-item" data-id="${productId}">
        <div class="cart-item-details">
          <h5>${name}</h5>
          <p>Quantity: 
            <button class="update-quantity" data-update="decrement">-</button> 
            <span class="item-quantity">${quantity}</span>
            <button class="update-quantity" data-update="increment">+</button>
          </p>
        </div>
      </div>
    `;

    cartContainer.innerHTML += itemHTML;
  });

  totalContainer.innerHTML = `<h3>Total: Not Applicable</h3>`;

  updateCheckoutUI();
}

function addListeners() {
  const cartItems = document.getElementById("cart-items");

  cartItems.addEventListener("click", (event) => {
    const parentItem = event.target.closest(".cart-item");
    const productId = parentItem.getAttribute("data-id");

    if (event.target.classList.contains("update-quantity")) {
      const action = event.target.getAttribute("data-update");
      updateItemQuantity(productId, action);
    }
  });
}

function updateItemQuantity(productId, action) {
  const cart = getCart();

  if (cart[productId]) {
    if (action === "increment") {
      cart[productId].quantity += 1;
    } else if (action === "decrement") {
      cart[productId].quantity -= 1;
      if (cart[productId].quantity <= 0) {
        removeItemFromCart(productId);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function removeItemFromCart(productId) {
  const cart = getCart();

  if (cart[productId]) {
    delete cart[productId];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function resetCart() {
    localStorage.setItem('cart', JSON.stringify({}));
    updateCheckoutUI();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  addListeners();
});


