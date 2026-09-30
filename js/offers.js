const offersContainer = document.getElementById("offersProducts");
const offerProducts = allProducts.filter(product =>
    product.oldPrice && product.oldPrice > product.price
);

function getDiscount(oldPrice, price) {
    return Math.round(
        ((oldPrice - price) / oldPrice) * 100
    );

}

function showMaximumDiscount() {
    if (offerProducts.length === 0) {
        return;
    }
    const discounts = offerProducts.map(product =>
        getDiscount(product.oldPrice, product.price)
    );
    const maximumDiscount = Math.max(...discounts);
    document.getElementById("maxDiscount").textContent = maximumDiscount + "%";
}

function updateHeart(button) {
    const icon = button.querySelector("i");
    if (isInWishlist(button.dataset.id)) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    } 
    else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}

function displayOffers() {
    offersContainer.innerHTML = "";
    if (offerProducts.length === 0) {
        offersContainer.innerHTML = `
            <div class="no-offers">
                <i class="fa-regular fa-face-smile"></i>
                <h3>No offers available</h3>
                <p>Check back soon for exclusive Velora offers.</p>
            </div>
        `;
        return;
    }
    offerProducts.forEach(product => {
        const discount = getDiscount(product.oldPrice, product.price);
        offersContainer.innerHTML += `
            <article class="offer-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="discount-badge">${discount}% OFF</span>
                    <button class="wishlist-button" data-id="${product.id}" onclick="toggleWishlist(${product.id}); updateHeart(this)">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h3>${product.name}</h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${product.rating}</span>
                        <span class="reviews">(${product.reviews})</span>
                    </div>
                    <div class="price-section">
                        <span class="current-price">₹${product.price}</span>
                        <span class="old-price">₹${product.oldPrice}</span>
                        <span class="save-text">Save ₹${product.oldPrice - product.price}</span>
                    </div>
                    <button class="add-cart-button" onclick="addProductToCart(${product.id})">
                        <i class="fa-solid fa-bag-shopping"></i>
                        Add to Bag
                    </button>
                </div>
            </article>
        `;
    });
    document.querySelectorAll(".wishlist-button").forEach(button => {
        updateHeart(button);
    });
}
showMaximumDiscount();
displayOffers();