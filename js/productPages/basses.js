import { loadProducts } from "../load-products.js";

const basses = 'basses';

document.addEventListener('DOMContentLoaded', async () => {
    await loadProducts(basses);
});