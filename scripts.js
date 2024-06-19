document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));
            addToCart(product, price);
        });
    });

    function addToCart(product, price) {
        const item = cart.find(i => i.product === product);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ product, price, quantity: 1 });
        }
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
});
