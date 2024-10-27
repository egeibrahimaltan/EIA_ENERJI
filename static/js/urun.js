// Sepet verileri
let cart = [];
let totalPrice = 0;

// Sepeti ve toplam fiyatı güncelleme fonksiyonları
function updateCartDisplay() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = `${totalPrice.toFixed(2)} TL`;
}

function updateTotalPriceModal() {
    document.getElementById('modal-total-price').textContent = `${totalPrice.toFixed(2)} TL`;
}

// Sepete ürün ekleme fonksiyonu
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        let productName = button.getAttribute('data-name');
        let productPrice = parseFloat(button.getAttribute('data-price'));

        // Sepette aynı ürün varsa adedi artır
        let existingProduct = cart.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity++;
            existingProduct.totalPrice += productPrice;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1,
                totalPrice: productPrice
            });
        }

        totalPrice += productPrice;

        // Sepet görünümünü güncelle
        updateCartDisplay();
    });
});

// Sepet butonuna tıklayınca ödeme ekranını aç
document.querySelector('.cart-button').addEventListener('click', function() {
    if (cart.length > 0) {
        document.getElementById('checkout-modal').style.display = 'block';
        updateTotalPriceModal();
        displayCartItems();
    } else {
        alert("Sepetiniz boş!");
    }
});

// Sepetteki ürünleri gösterme fonksiyonu
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Mevcut içeriği temizle

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - ${item.quantity} Adet - ${item.totalPrice.toFixed(2)} TL`;
        cartItemsList.appendChild(li);
    });
}

// Ödeme ekranını kapatma
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('checkout-modal').style.display = 'none';
});

// Siparişi Tamamla
document.querySelector('.complete-order-btn').addEventListener('click', function() {
    alert("Siparişiniz başarıyla tamamlandı!");
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
    document.getElementById('checkout-modal').style.display = 'none';
});

// Modal dışında tıklanınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('checkout-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
