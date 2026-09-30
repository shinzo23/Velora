const productId = new URLSearchParams(window.location.search).get("id");

const detailsProducts = [
    ...face,
    ...eyes,
    ...lips,
    ...cheeks,
    ...tool_and_nails,
    ...trending
];

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

const product = detailsProducts.find(item => item.id == productId);
if (!product) {
    document.querySelector(".product-details").innerHTML = `
        <h2>Product not found</h2>
    `;
}
else {
    const productImage = document.getElementById("productImage");
    const productCategory = document.getElementById("productCategory");
    const productName = document.getElementById("productName");
    const productRating = document.getElementById("productRating");
    const productReviews = document.getElementById("productReviews");
    const productPrice = document.getElementById("productPrice");
    const productOldPrice = document.getElementById("productOldPrice");
    const productDescription = document.getElementById("productDescription");
    const shadeSection = document.getElementById("shadeSection");
    const shadeOptions = document.getElementById("shadeOptions");
    const selectedShade = document.getElementById("selectedShade");
    const sizeSection = document.getElementById("sizeSection");
    const sizeOptions = document.getElementById("sizeOptions");
    const selectedSize = document.getElementById("selectedSize");
    const addToCartButton = document.getElementById("addToCartButton");
    const wishlistButton = document.getElementById("wishlistButton");

    productImage.src = product.image;
    productImage.alt = product.name;
    productCategory.textContent = product.subcategory;
    productName.textContent = product.name;
    productRating.textContent = product.rating;
    productReviews.textContent = `(${product.reviews} reviews)`;
    productDescription.textContent = product.description;

    let currentShade = null;
    let currentSize = null;

    if (product.shades && product.shades.length > 0) {
        shadeSection.style.display = "block";
        currentShade = product.shades[0];
        selectedShade.textContent = currentShade.name;
        product.shades.forEach((shade, index) => {
            const button = document.createElement("button");
            button.className = "shade-option";
            button.type = "button";
            button.style.backgroundColor = shade.color;
            button.title = shade.name;
            if (index === 0) {
                button.classList.add("selected");
            }
            button.addEventListener("click", function () {
                document.querySelectorAll(".shade-option").forEach(item => {
                    item.classList.remove("selected");
                });
                button.classList.add("selected");
                currentShade = shade;
                selectedShade.textContent = shade.name;
            });
            shadeOptions.appendChild(button);
        });
    }
    else {
        shadeSection.style.display = "none";
    }

    if (product.sizes && product.sizes.length > 0) {
        sizeSection.style.display = "block";
        currentSize = product.sizes[product.sizes.length - 1];
        selectedSize.textContent = currentSize.size;
        productPrice.textContent = `₹${currentSize.price}`;
        productOldPrice.textContent = `₹${currentSize.oldPrice}`;
        product.sizes.forEach((size, index) => {
            const button = document.createElement("button");
            button.className = "size-option";
            button.type = "button";
            button.textContent = size.size;
            if (index === product.sizes.length - 1) {
                button.classList.add("selected");
            }
            button.addEventListener("click", function () {
                document.querySelectorAll(".size-option").forEach(item => {
                    item.classList.remove("selected");
                });
                button.classList.add("selected");
                currentSize = size;
                selectedSize.textContent = size.size;
                productPrice.textContent = `₹${size.price}`;
                productOldPrice.textContent = `₹${size.oldPrice}`;
            });
            sizeOptions.appendChild(button);
        });
    }
    else {
        sizeSection.style.display = "none";
        productPrice.textContent = `₹${product.price}`;
        if (product.oldPrice) {
            productOldPrice.textContent = `₹${product.oldPrice}`;
        }
    }
    wishlistButton.dataset.id = product.id;
    updateHeart(wishlistButton);
    wishlistButton.addEventListener("click", function () {
        toggleWishlist(product.id);
        updateHeart(wishlistButton);
    });
    addToCartButton.addEventListener("click", function () {
        const cart = getCart();
        const newItem = {
            id: product.id,
            shade: currentShade ? currentShade.name : null,
            size: currentSize ? currentSize.size : null,
            price: currentSize ? currentSize.price : product.price,
            quantity: 1
        };
        const existingItem = cart.find(item =>
            Number(item.id) === Number(newItem.id) &&
            item.shade === newItem.shade &&
            item.size === newItem.size
        );
        if (existingItem) {
            existingItem.quantity += 1;
        }
        else {
            cart.push(newItem);
        }
        saveCart(cart);
        updateCartCount();
        addToCartButton.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Added to Bag
        `;
        setTimeout(function () {
            addToCartButton.innerHTML = `
                <i class="fa-solid fa-bag-shopping"></i>
                Add to Bag
            `;
        }, 1500);
    });
}