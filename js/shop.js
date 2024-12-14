function addToCart() {
    let total = localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = total;
}


