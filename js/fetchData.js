const productsContainer = document.getElementById("productsContainer");
const subcategories = [...new Set(products.map(product => product.subcategory))];

subcategories.forEach(subcategory => {
    const section = document.createElement("section");
    section.className = "subcategory-section";
    section.innerHTML = `
        <div class="subcategory-heading">
            <h2>${subcategory}</h2>
        </div>
        <div class="product-grid"></div>
    `;
    productsContainer.appendChild(section);

    const productGrid = section.querySelector(".product-grid");
    const filteredProducts = products.filter(product => product.subcategory === subcategory);
    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div class="product-image" onclick="openProduct(${product.id})">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : `<i class="fa-regular fa-image"></i>`}
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
                <button class="wishlist-button" data-id="${product.id}" type="button">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <p class="product-category">${product.subcategory}</p>
                <h3 onclick="openProduct(${product.id})">${product.name}</h3>
                <p class="rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    <span>(${product.reviews})</span>
                </p>
                <div class="price">
                    <span>₹${product.price}</span>
                    ${product.oldPrice ? `<del>₹${product.oldPrice}</del>` : ""}
                </div>
                <button class="add-cart-button" data-id="${product.id}" type="button">Add to Bag</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
});

document.querySelectorAll(".wishlist-button").forEach(button => {
    button.addEventListener("click", function () {
        const productId = this.dataset.id;
        toggleWishlist(productId);
        updateHeart(this);
    });
    updateHeart(button);
});

document.querySelectorAll(".add-cart-button").forEach(button => {
    button.addEventListener("click", function () {
        const productId = this.dataset.id;
        addProductToCart(productId);
        alert("Product added to cart.");
    });
});

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

function openProduct(productId) {
    window.location.href = `details.html?id=${productId}`;
}