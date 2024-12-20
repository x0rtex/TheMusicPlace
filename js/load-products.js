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
        <a id="add-to-cart" class="btn btn-primary card-button">Add to cart</a>
      </div>
    </div>
  `;
}

function addEventListeners() {
    const addToCartElements = document.querySelectorAll('#add-to-cart');
    addToCartElements.forEach(element => {
        element.addEventListener("click", addToCart);
    });
}