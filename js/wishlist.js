// * Find user signed in
function getWishlistUser() {
    if (typeof getCurrentUser !== "function") {
        return null;
    }
    return getCurrentUser();
}

// * Wishlist is unique for every user
//* Checks wishlist for the signed in user
function getWishlistKey() {
    const user = getWishlistUser();
    if (!user) {
        return null;
    }
    return `veloraWishlist_${user.id}`;
}

// * Find wishlist
function getWishlist() {
    const key = getWishlistKey();
    if (!key) {
        return [];
    }
    const wishlist = localStorage.getItem(key);
    if (!wishlist) {
        return [];
    }
    try {
        return JSON.parse(wishlist);
    } 
    catch (error) {
        console.error("Wishlist data error:", error);
        return [];
    }
}

// * Storing wishlist
function saveWishlist(wishlist) {
    const key = getWishlistKey();
    if (!key) {
        return;
    }
    localStorage.setItem(key, JSON.stringify(wishlist));
}

// * Check whether already in wishlist
function isInWishlist(productId) {
    const wishlist = getWishlist();
    return wishlist.some(id => Number(id) === Number(productId)
    );
}

// * If user is signed in or not
function toggleWishlist(productId) {
    const user = getWishlistUser();
    if (!user) {
        alert("Please login to add products to your wishlist.");
        window.location.href = "signin.html";
        return;
    }
    let wishlist = getWishlist();
    const productExists = wishlist.some(id => Number(id) === Number(productId));
    if (productExists) {

        wishlist = wishlist.filter(id => Number(id) !== Number(productId));
    }
    else {
        wishlist.push(Number(productId));
    }
    saveWishlist(wishlist);
}

// * Remove from wishlist
function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(id => Number(id) !== Number(productId));
    saveWishlist(wishlist);
    renderWishlist();
}

// * Remove purchased products from wishlist
function removePurchasedProducts(productIds) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(wishlistProductId => !productIds.some(purchasedId => Number(purchasedId) === Number(wishlistProductId)));
    saveWishlist(wishlist);
}

// * Show wishlist
function renderWishlist() {
    const wishlistContainer = document.getElementById("wishlistItems");
    if (!wishlistContainer) {
        return;
    }
    const user = getWishlistUser();
    if (!user) {
        wishlistContainer.innerHTML = `
            <div class="empty-wishlist">
                <i class="fa-regular fa-heart"></i>
                <p>Sign in to view your wishlist.</p>
                <a href="./signin.html" class="continue-shopping-button">Sign In</a>
            </div>
        `;
        return;
    }
    const wishlist = getWishlist();
    // * If wishlish is empty redirection to products
    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = `
            <div class="empty-wishlist">
                <i class="fa-regular fa-heart"></i>
                <h2>Your wishlist is empty</h2>
                <p>Add your favourite products here.</p>
                <a href="./collections.html" class="continue-shopping-button">Explore Products</a>
            </div>
        `;
        return;
    }
    // * Wishlist product cards
    wishlistContainer.innerHTML = "";
    wishlist.forEach(productId => {
        const product = getProductById(productId);
        if (!product) {
            return;
        }
        const card = document.createElement("div");
        card.className = "wishlist-card";
        card.innerHTML = `
            <div class="wishlist-image">
                <a href="details.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
            <div class="wishlist-details">
                <p class="wishlist-category">${product.category || ""}</p>
                <h3>${product.name}</h3>
                <p class="wishlist-price">₹${Number(product.price).toFixed(2)}</p>
                <div class="wishlist-actions">
                    <button type="button" class="wishlist-cart-button" data-id="${product.id}">Add to Bag</button>
                    <button type="button" class="wishlist-remove-button" data-id="${product.id}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
        wishlistContainer.appendChild(card);
    });
    addWishlistEvents();
}

// * Add products from wishlist to cart or remove them from wishlist
function addWishlistEvents() {
    const removeButtons = document.querySelectorAll(".wishlist-remove-button");
    const cartButtons = document.querySelectorAll(".wishlist-cart-button");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
                const productId = this.dataset.id;
                removeFromWishlist(productId);
            }
        );
    });
    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
                const productId = this.dataset.id;
                addProductToCart(productId);
                alert("Product added to cart.");
            }
        );
    });
}
document.addEventListener("DOMContentLoaded", function () {
        renderWishlist();
    }
);