// * Mandatory Shipping charges
const SHIPPING_CHARGE = 99;

const allProducts = [
    ...face,
    ...eyes,
    ...lips,
    ...cheeks,
    ...tool_and_nails,
    ...trending
];

function getProductById(productId) {
    return allProducts.find(product => product.id == productId);
}

// * Get cart from local storage
function getCart() {
    return JSON.parse(localStorage.getItem("veloraCart")) || [];
}

// * Save cart on local storage
function saveCart(cart) {
    localStorage.setItem("veloraCart", JSON.stringify(cart));
}

function addProductToCart(productId) {
    let cart = getCart();
    const product = getProductById(productId);
    if (!product) {
        return;
    }
    const defaultShade = product.shades && product.shades.length > 0 ? product.shades[0].name : null;
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[product.sizes.length - 1] : null;
    const price = defaultSize ? defaultSize.price : product.price;
    const existingProduct = cart.find(item =>
        Number(item.id) === Number(productId) &&
        item.shade === defaultShade &&
        item.size === (defaultSize ? defaultSize.size : null)
    );
    if (existingProduct) {
        existingProduct.quantity += 1;
    }
    else {
        cart.push({
            id: productId,
            shade: defaultShade,
            size: defaultSize ? defaultSize.size : null,
            price: price,
            quantity: 1
        });
    }
    saveCart(cart);
    updateCartCount();
}

// * Updates cart on navbar
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    if (!cartCount) {
        return;
    }
    const cart = getCart();
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// * Increase or Decrease quantity
function changeQuantity(productId, change) {
    let cart = getCart();
    const cartItem = cart.find(item => item.id == productId);
    if (!cartItem) {
        return;
    }
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id != productId);
    }
    saveCart(cart);
    displayCart();
    updateCartCount();
}

// * Remove product from cart
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id != productId);
    saveCart(cart);
    displayCart();
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem("veloraCart");
}

// * Display products in the cart
function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    if (!cartContainer) {
        return;
    }
    const cart = getCart();
    cartContainer.innerHTML = "";
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <h2>Your beauty bag is empty</h2>
                <p>
                    Looks like you haven't added anything yet.
                    Let's find something beautiful for you.
                </p>
                <a href="./collections.html" class="empty-cart-btn">Explore Products</a>
            </div>
        `;
        updateCartSummary();
        return;
    }
    cart.forEach(cartItem => {
        const product = allProducts.find(product => product.id == cartItem.id);
        if (!product) {
            return;
        }
        const card = document.createElement("div");
        card.className = "cart-card";
        card.innerHTML = `
            <img class="cart-product-image" src="${product.image}" alt="${product.name}">
            <div class="cart-product-info">
                <p class="cart-product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="cart-product-description">${product.description || ""}</p>
                ${cartItem.shade ? `<p>Shade: ${cartItem.shade}</p>` : ""}
                ${cartItem.size ? `<p>Size: ${cartItem.size}</p>` : ""}
                <p class="cart-product-price">₹${cartItem.price}</p>
            </div>
            <div class="cart-product-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">−</button>
                    <span class="quantity-value">${cartItem.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${product.id})">
                    <i class="fa-regular fa-trash-can"></i>
                    Remove
                </button>
            </div>
        `;
        cartContainer.appendChild(card);
    });
    updateCartSummary();
}

// * Cart summary
function updateCartSummary() {
    const cart = getCart();
    let subtotal = 0;
    let totalQuantity = 0;
    cart.forEach(cartItem => {
        const product = allProducts.find(product => product.id == cartItem.id);
        if (!product) {
            return;
        }
        subtotal += cartItem.price * cartItem.quantity;
        totalQuantity += cartItem.quantity;
    });

    const shipping = cart.length > 0 ? SHIPPING_CHARGE : 0;
    const total = subtotal + shipping;
    const subtotalElement = document.getElementById("cartSubtotal");
    const shippingElement = document.getElementById("shippingAmount");
    const totalElement = document.getElementById("cartTotal");
    const itemCountElement = document.getElementById("cartItemCount");

    if (subtotalElement) {
        subtotalElement.textContent = `₹${subtotal}`;
    }
    if (shippingElement) {
        shippingElement.textContent = `₹${shipping}`;
    }
    if (totalElement) {
        totalElement.textContent = `₹${total}`;
    }
    if (itemCountElement) {
        itemCountElement.textContent = `${totalQuantity} ${totalQuantity === 1 ? "Item" : "Items"}`;
    }
}
displayCart();

// * Address dialog
const checkoutBtn = document.getElementById("checkoutBtn");
const addressOverlay = document.getElementById("addressOverlay");
const closeAddress = document.getElementById("closeAddress");
const addressForm = document.getElementById("addressForm");

// * Open address dialog
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
        const cart = getCart();
        if (cart.length === 0) {
            alert("Your bag is empty.");
            // window.location.href = "collections.html";
            return;
        }
        addressOverlay.classList.add("show");
    });
}

// * Close address dialog
if (closeAddress) {
    closeAddress.addEventListener("click", function () {
        addressOverlay.classList.remove("show");
    });
}

// * Close dialog when clicking outside
if (addressOverlay) {
    addressOverlay.addEventListener("click", function (event) {
        if (event.target === addressOverlay) {
            addressOverlay.classList.remove("show");
        }
    });
}

// * Save address and go to payment
if (addressForm) {
    addressForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const pincode = document.getElementById("pincode").value.trim();
        if (!/^\d{6}$/.test(pincode)) {
            alert("Please enter a valid 6-digit PIN code.");
            return;
        }
        const address = {
            house: document.getElementById("houseAddress").value.trim(),
            street: document.getElementById("streetAddress").value.trim(),
            city: document.getElementById("city").value.trim(),
            state: document.getElementById("state").value.trim(),
            pincode: pincode
        };
        localStorage.setItem("veloraDeliveryAddress", JSON.stringify(address));
        window.location.href = "./payment.html";
    });
}