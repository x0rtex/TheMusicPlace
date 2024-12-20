import { loadProducts } from "./load-products.js";

function loadProductPage(productType) {
    document.addEventListener('DOMContentLoaded', async () => {
        await loadProducts(productType);
    });
}

export { loadProductPage };
