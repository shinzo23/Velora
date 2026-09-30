// * Get products from cart
function getPaymentCart() {
    return getCart();
}

// * Calulate total amount
function calculateOrder() {
    const cart = getPaymentCart();
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += Number(item.price) * Number(item.quantity);
    });
    const shipping = cart.length > 0 ? SHIPPING_CHARGE : 0;
    const total = subtotal + shipping;
    return {
        subtotal, shipping, total
    };
}

// * Find items from cart to be ordered
function renderPaymentItems() {
    const container = document.getElementById("paymentItems");
    if (!container) {
        return;
    }
    const cart = getPaymentCart();
    container.innerHTML = "";
    cart.forEach(item => {
        const product = getProductById(item.id);
        if (!product) {
            return;
        }
        const itemTotal = Number(item.price) * Number(item.quantity);
        const element = document.createElement("div");
        element.className = "payment-item";
        element.innerHTML = `
            <div class="payment-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="payment-item-details">
                <h3>${product.name}</h3>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="payment-item-price">
                ₹${itemTotal.toFixed(2)}
            </div>
        `;
        container.appendChild(element);
    });
}

// * Payment details
function renderPaymentSummary() {
    const order = calculateOrder();
    const subtotalElement = document.getElementById("paymentSubtotal");
    const shippingElement = document.getElementById("paymentShipping");
    const totalElement = document.getElementById("paymentTotal");
    const qrAmount = document.getElementById("qrAmount");

    // * Total products price
    if (subtotalElement) {
        subtotalElement.textContent = `₹${order.subtotal.toFixed(2)}`;
    }
    // * Shipping price
    if (shippingElement) {
        shippingElement.textContent = `₹${order.shipping.toFixed(2)}`;
    }
    // * Total price
    if (totalElement) {
        totalElement.textContent = `₹${order.total.toFixed(2)}`;
    }
    // * total price for QR
    if (qrAmount) {
        qrAmount.textContent = `₹${order.total.toFixed(2)}`;
    }
}

// * Demo QR generator
function generateDemoQR() {
    const qrContainer = document.getElementById("qrCode");
    if (!qrContainer) {
        return;
    }
    const order = calculateOrder();
    qrContainer.innerHTML = "";
    const demoPaymentData = `VELORA-DEMO-PAYMENT|AMOUNT=${order.total.toFixed(2)}|CURRENCY=INR`;
    if (typeof QRCode === "undefined") {
        qrContainer.innerHTML = `
            <div style=" text-align:center; color:#777; font-size:13px; padding:20px;">
                QR not found.
            </div>
        `;
        return;
    }
    new QRCode(qrContainer, { text: demoPaymentData, width: 190, height: 190 });
}

// * Change payment method
function changePaymentMethod() {
    const selectedMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
    );
    if (!selectedMethod) {
        return;
    }
    const method = selectedMethod.value;
    const upiPayment = document.getElementById("upiPayment");
    const cardPayment = document.getElementById("cardPayment");
    const codPayment = document.getElementById("codPayment");
    upiPayment.style.display = "none";
    cardPayment.style.display = "none";
    codPayment.style.display = "none";
    if (method === "UPI") {
        upiPayment.style.display = "block";
    }
    if (method === "Card") {
        cardPayment.style.display = "block";
    }
    if (method === "COD") {
        codPayment.style.display = "block";
    }
}

// * Payment method selection
function setupPaymentMethods() {
    const paymentMethods = document.querySelectorAll(
        'input[name="paymentMethod"]'
    );
    paymentMethods.forEach(method => {
        method.addEventListener("change", changePaymentMethod);
    });
}

// * Save orders display on my orders page
function saveOrder(order) {
    const existingOrders = JSON.parse(localStorage.getItem("veloraOrders")) || [];
    existingOrders.push(order);
    localStorage.setItem("veloraOrders", JSON.stringify(existingOrders));
}

// * Get currently signed-in user
function getCurrentUser() {
    // * For remember me user
    const localUser = localStorage.getItem("veloraCurrentUser");
    if (localUser) {
        return JSON.parse(localUser);
    }
    // * For no remember me user
    const sessionUser = sessionStorage.getItem("veloraCurrentUser");
    if (sessionUser) {
        return JSON.parse(sessionUser);
    }
    return null;
}

// * Get delivery address
function getDeliveryAddress() {
    const address = localStorage.getItem("veloraDeliveryAddress");
    if (!address) {
        return null;
    }
    try {
        return JSON.parse(address);
    }
    catch (error) {
        console.error("Address data error:", error);
        return null;
    }
}

// * Show delivery address
function renderDeliveryAddress() {
    const addressContainer = document.getElementById("deliveryAddress");
    if (!addressContainer) {
        return;
    }
    const address = getDeliveryAddress();
    if (!address) {
        addressContainer.textContent = "Delivery address not found.";
        return;
    }
    addressContainer.innerHTML = `
        ${address.house}<br>
        ${address.street}<br>
        ${address.city}, ${address.state} - ${address.pincode}
    `;
}

// * Check cart is empty or not then place order
function placeOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your bag is empty.");
        window.location.href = "collections.html";
        return;
    }
    // * Find user for placing order (If user not found)
    const user = getCurrentUser();
    if (!user) {
        alert("Please login before placing your order.");
        window.location.href = "signin.html";
        return;
    }
    const selectedPaymentMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
    );
    if (!selectedPaymentMethod) {
        alert("Please select a payment method.");
        return;
    }
    const paymentMethod = selectedPaymentMethod.value;
    const totals = calculateOrder();
    // * Save the products on my prders page
    const purchasedProductIds = cart.map(item => Number(item.id));
    const deliveryAddress = getDeliveryAddress();
    const order = {
        orderId: "VELORA-" + Date.now(),
        userId: user.id,
        username: user.username,
        items: cart.map(item => {
            const product = getProductById(item.id);
            return {
                productId: Number(item.id),
                name: product.name,
                shade: item.shade || "",
                size: item.size || "",
                price: Number(item.price),
                quantity: Number(item.quantity),
                image: product.image
            };
        }),
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        total: totals.total,
        paymentMethod: paymentMethod,
        status: "Ordered",
        deliveryAddress: deliveryAddress,
        orderDate: new Date().toISOString()
    };
    saveOrder(order);

    // * Clear cart after placing order
    if (typeof removePurchasedProducts === "function") {
        removePurchasedProducts(purchasedProductIds);
    }
    clearCart();
    alert("Payment successful! Your order has been placed successfully.");
    window.location.href = "orders.html";
}

// * If cart is empty
document.addEventListener("DOMContentLoaded", function () {
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your bag is empty.");
        window.location.href = "cart.html";
        return;
    }
    renderPaymentItems();
    renderPaymentSummary();
    renderDeliveryAddress();
    generateDemoQR();
    setupPaymentMethods();
    const button = document.getElementById("placeOrderButton");
    if (button) {
        button.addEventListener("click", placeOrder);
    }
});