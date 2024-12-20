function addToCart() {
    let total = localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = document.querySelector('#checkout').innerHTML = `<span class="checkout-count"> ${total}</span>`;
}
