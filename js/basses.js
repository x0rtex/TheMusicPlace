async function loadProducts() {
    const products = await parseData();
    const basses = document.getElementById('basses');

    products.basses.forEach(bass => {
        const card = document.createElement('div');
        const img = document.createElement('img');
        const cardBody = document.createElement('div');
        const cardBody2 = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardText = document.createElement('p');
        const stock = document.createElement('p');
        const price = document.createElement('p');
        const button = document.createElement('a');

        card.setAttribute('class', 'card m-4 mx-auto');
        img.setAttribute('class', 'card-img-top');
        img.setAttribute('src', bass.image);
        cardBody.setAttribute('class', 'card-body');
        cardBody2.setAttribute('class', 'card-body d-flex');
        cardTitle.setAttribute('class', 'card-title');
        cardText.setAttribute('class', 'card-text');
        stock.setAttribute('class', 'card-text');
        price.setAttribute('class', 'card-text');
        button.setAttribute('class', 'btn btn-primary');

        card.style.width = '16rem';
        cardTitle.textContent = bass.name;
        cardBody.textContent = bass.description;
        cardBody2.style.alignItems = 'stretch';
        stock.textContent = `${bass.stock} in stock`;
        price.textContent = `€${bass.price}`;
        price.style.flex = '1 1 auto';
        button.textContent = 'Add to cart';
        button.style.flex = '1 1 auto';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(stock);
        cardBody2.appendChild(price);
        cardBody2.appendChild(button);
        card.appendChild(img);
        card.appendChild(cardBody);
        card.appendChild(cardBody2);
        basses.appendChild(card);
    });
}

async function parseData() {
    const response = await fetch('../data/products/products.json');
    const products = await response.json();
    return products;
}

loadProducts();