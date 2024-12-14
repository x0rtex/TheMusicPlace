export async function loadProducts(category) {
    const products = await parseData();
    const productsElement = document.getElementById('products');

    if (products[category] === undefined) {
        console.error(`No products found for index ${category}`)
        return;
    }

    products[category].forEach(product => {
        const productHTML = createCard(product);
        productsElement.innerHTML += productHTML;
    });

    const addToCartElements = productsElement.querySelectorAll('#add-to-cart');
    addToCartElements.forEach(element => {
        element.addEventListener("click", addToCart);
    });
}

async function parseData() {
    const productsPath = '../data/products/products.json';
    const response = await fetch(productsPath);
    return await response.json();
}

function createCard(product) {
    return `
    <div class="card m-4 mx-auto col-12 col-sm-6">
      <img class="card-img-top" src="${product.image}" alt="Product">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.stock} in stock</p>
      </div>
      <div class="card-body card-footer">
        <p class="card-price">€${product.price}</p>
        <a id="add-to-cart" class="btn btn-primary card-button">Add to cart</a>
      </div>
    </div>
  `;
}