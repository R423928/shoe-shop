// Products data
const products = [
    { id: 1, name: 'Nike Air Max', price: 4500, category: 'Men', emoji: '👟' },
    { id: 2, name: 'Adidas Ultraboost', price: 5200, category: 'Men', emoji: '🥾' },
    { id: 3, name: 'Puma RS-X', price: 3800, category: 'Men', emoji: '👞' },
    { id: 4, name: 'New Balance 574', price: 4200, category: 'Men', emoji: '👢' },
    { id: 5, name: 'Nike React', price: 4800, category: 'Women', emoji: '👠' },
    { id: 6, name: 'Adidas Swift Run', price: 3500, category: 'Women', emoji: '👡' },
    { id: 7, name: 'Puma Cali', price: 3200, category: 'Women', emoji: '👗' },
    { id: 8, name: 'Kids Power Shoes', price: 1800, category: 'Kids', emoji: '🧒' },
    { id: 9, name: 'Kids Sports Shoes', price: 2200, category: 'Kids', emoji: '⚽' }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartModal = document.getElementById('cart-modal');
const successModal = document.getElementById('success-modal');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartBtn = document.querySelector('.cart-btn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

// Render products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p style="color: #666; font-size: 0.9rem;">${product.category}</p>
                <div class="product-price">৳${product.price}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show success message
    showToast('Product added to cart!');
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Show cart modal
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderCart();
    cartModal.style.display = 'block';
});

// Render cart items
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
        cartTotal.textContent = '৳0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>৳${item.price} x ${item.quantity}</p>
            </div>
            <div>
                <span style="font-weight: bold;">৳${item.price * item.quantity}</span>
                <br>
                <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 5px;">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `৳${total}`;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartUI();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const customerName = prompt('riyajsarkar:');
    const customerPhone = prompt('1234567890:');
    const customerAddress = prompt('petla dimhata coochbehar:');
    
    if (atikhassain && 900015961 && petla coochbehar) {
        cartModal.style.display = 'none';
        successModal.style.display = 'block';
        
        // Clear cart
        cart = [];
        localStorage.removeItem('cart');
       