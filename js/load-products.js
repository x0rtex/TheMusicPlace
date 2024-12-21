export async function loadProducts(category) {
    try {
        const products = await getProducts(category);
        renderProducts(products);
    } catch (error) {
        console.error(`Error loading products: ${error}`);
    }
}

async function getProducts(category) {
    try {
        const response = await fetch('../data/products.json');
        const data = await response.json();
        return data[category];
    } catch (error) {
        console.error(`Error loading products: ${error}`);
        return [];
    }
}

function renderProducts(products) {
    const productsElement = document.getElementById('products');
    productsElement.innerHTML = "";

    products.forEach(product => {
        const productHTML = createCard(product);
        productsElement.innerHTML += productHTML;
    });

    addEventListeners();
}

function createCard(product) {
    return `
    <div class="card m-4 mx-auto col-12 col-sm-6">
      <img class="card-img-top" src="${product.image}" alt="Product">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text card-stock">${product.stock} in stock</p>
      </div>
      <div class="card-body card-footer">
        <p class="card-price">€${product.price}</p>
        <button 
          class="btn btn-primary card-button add-to-cart" 
          data-id="${product.id}" 
          data-name="${product.name}" 
          data-price="${product.price}"
        >Add to Cart</button>
      </div>
    </div>
  `;
}

export function updateCheckoutUI() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  const checkoutElement = document.querySelector("#checkout");
  if (checkoutElement) {
    checkoutElement.innerHTML = `<span class="checkout-count">${totalItems}</span>`;
  }
}

function addToCart(itemId, itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[itemId]) {
        cart[itemId].quantity += 1;
    } else {
        cart[itemId] = {name: itemName, quantity: 1};
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCheckoutUI();
}

function addEventListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productId = event.target.getAttribute('data-id');
            const productName = event.target.getAttribute('data-name');
            const productPrice = event.target.getAttribute('data-price');
            addToCart(productId, productName, productPrice);
        });
    });
}

updateCheckoutUI();
