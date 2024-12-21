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
    return;
  }

  let totalPrice = 0;

  Object.entries(cart).forEach(([productId, product]) => {
    const { name, price, image, quantity } = product;
    const itemTotal = price * quantity;

    const itemHTML = `
      <div class="cart-item" data-id="${productId}">
        <img src="${image}" alt="${name}" class="cart-item-image" style="width: 100px; height: auto;">
        <div class="cart-item-details">
          <h5>${name}</h5> 
          <p>Price: €${price}</p>
          <p>Quantity: 
            <button class="update-quantity" data-update="decrement" data-id="${productId}">-</button> 
            <span class="item-quantity">${quantity}</span>
            <button class="update-quantity" data-update="increment" data-id="${productId}">+</button>
          </p>
          <p>Total: €${itemTotal}</p>
        </div>
      </div>
    `;

    cartContainer.innerHTML += itemHTML;
    totalPrice += itemTotal;
  });

  totalContainer.innerHTML = `<h3>Total: €${totalPrice.toFixed(2)}</h3>`;
  updateCheckoutUI();
}

function addListeners() {
  const cartItems = document.getElementById("cart-items");
  cartItems.addEventListener("click", (event) => {
      if (event.target.classList.contains("update-quantity")) {
          const itemId = event.target.dataset.id
          const change = event.target.dataset.update === "increment" ? 1 : -1;
          updateItemQuantity(itemId, change);
      }
  });
}

function updateItemQuantity(itemId, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (!cart[itemId]) return;

    cart[itemId].quantity += change;
    if (cart[itemId].quantity <= 0) {
        delete cart[itemId];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function resetCart() {
    localStorage.setItem('cart', JSON.stringify({}));
    updateCheckoutUI();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  addListeners();
});


