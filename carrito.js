document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');

    if (cart.length === 0) {
        cartList.innerHTML = '<p>No hay items en el carrito.</p>';
    } else {
        cart.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Precio: $${item.price}</p>
                        <p class="card-text">Condición: ${item.condition}</p>
                    </div>
                </div>
            `;
            cartList.appendChild(col);
        });
    }
});