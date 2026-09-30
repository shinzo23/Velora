const ordersContainer = document.getElementById("ordersContainer");

// * Get currently signed-in user
function getCurrentUser() {
    const localUser = localStorage.getItem("veloraCurrentUser");
    if (localUser) {
        return JSON.parse(localUser);
    }
    const sessionUser = sessionStorage.getItem("veloraCurrentUser");
    if (sessionUser) {
        return JSON.parse(sessionUser);
    }
    return null;
}

// * Get current user
const currentUser = getCurrentUser();

// * If user is not logged in
if (!currentUser) {
    ordersContainer.innerHTML = `
        <div class="empty-orders">
            <div class="empty-orders-icon">
                <i class="fa-solid fa-box-open"></i>
            </div>
            <h2>Please Sign In</h2>
            <p>Please sign in to view your orders and purchase history.</p>
            <a href="./signin.html" class="shop-button">Sign In</a>
        </div>
    `;
}
else {

    // * Get all orders
    const allOrders = JSON.parse(localStorage.getItem("veloraOrders")) || [];

    // * Get only current user's orders
    const orders = allOrders.filter(order =>
        Number(order.userId) === Number(currentUser.id)
    );

    // * Format date
    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }

    // * Calculate delivery date
    function getDeliveryDate(orderDate) {
        const date = new Date(orderDate);
        date.setDate(date.getDate() + 5);
        return date;
    }

    // * Get delivery status
    function getDeliveryStatus(orderDate) {
        const today = new Date();
        const deliveryDate = getDeliveryDate(orderDate);
        today.setHours(0, 0, 0, 0);
        deliveryDate.setHours(0, 0, 0, 0);
        if (today >= deliveryDate) {
            return {
                status: "Delivered",
                className: "delivered",
                date: deliveryDate
            };
        }
        return {
            status: "Ordered",
            className: "ordered",
            date: deliveryDate
        };
    }

    // * Show receipt
    function showReceipt(order) {
        let receiptItemsHTML = "";
        order.items.forEach(item => {
            receiptItemsHTML += `
                <div class="receipt-item">
                    <div>
                        <strong>${item.name}</strong>
                        <span>${item.quantity} × ₹${Number(item.price).toFixed(2)}</span>
                    </div>
                    <strong>₹${(Number(item.price) * Number(item.quantity)).toFixed(2)}</strong>
                </div>
            `;
        });

        const receiptHTML = `
            <div class="receipt-overlay" id="receiptOverlay">
                <div class="receipt-modal">
                    <button class="close-receipt" id="closeReceipt">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="receipt-heading">
                        <span>VELORA</span>
                        <h2>Order Receipt</h2>
                        <p>Thank you for shopping with us.</p>
                    </div>
                    <div class="receipt-order-info">
                        <div>
                            <span>ORDER ID</span>
                            <strong>${order.orderId}</strong>
                        </div>
                        <div>
                            <span>ORDER DATE</span>
                            <strong>${formatDate(order.orderDate)}</strong>
                        </div>
                    </div>
                    <div class="receipt-divider"></div>
                    <div class="receipt-items">${receiptItemsHTML}</div>
                    <div class="receipt-divider"></div>
                    <div class="receipt-summary">
                        <div>
                            <span>Product Subtotal</span>
                            <strong>₹${Number(order.subtotal).toFixed(2)}</strong>
                        </div>
                        <div>
                            <span>Shipping</span>
                            <strong>₹${Number(order.shipping).toFixed(2)}</strong>
                        </div>
                        <div class="receipt-total">
                            <span>Total Paid</span>
                            <strong>₹${Number(order.total).toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="receipt-payment">
                        <span>Payment Method</span>
                        <strong>${order.paymentMethod}</strong>
                    </div>
                    <div class="receipt-thank-you">
                        Your order has been placed successfully.
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", receiptHTML);
        const overlay = document.getElementById("receiptOverlay");
        const closeButton = document.getElementById("closeReceipt");
        closeButton.addEventListener("click", function () {
            overlay.remove();
        });
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) {
                overlay.remove();
            }
        });
    }

    // * Display orders
    function displayOrders() {
        if (orders.length === 0) {
            ordersContainer.innerHTML = `
                <div class="empty-orders">
                    <div class="empty-orders-icon">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                    <h2>No Orders</h2>
                    <p>You haven't placed any orders yet. Discover something beautiful for your next look.</p>
                    <a href="./collections.html" class="shop-button">Explore Products</a>
                </div>
            `;
            return;
        }
        ordersContainer.innerHTML = "";
        orders.forEach(order => {
            const delivery = getDeliveryStatus(order.orderDate);
            const orderCard = document.createElement("div");
            orderCard.className = "order-card";
            let productsHTML = "";
            let totalQuantity = 0;
            order.items.forEach(item => {
                totalQuantity += Number(item.quantity);
                productsHTML += `
                    <div class="order-product">
                        <a href="./details.html?id=${item.productId}" class="order-product-image-link">
                            <img class="order-product-image" src="${item.image}" alt="${item.name}">
                        </a>
                        <div class="order-product-info">
                            <h3 class="order-product-name">${item.name}</h3>
                            <div class="order-product-details">
                                ${item.shade ? `<span><strong>Shade:</strong> ${item.shade}</span>` : ""}
                                ${item.size ? `<span><strong>Size:</strong> ${item.size}</span>` : ""}
                                <span><strong>Quantity:</strong> ${item.quantity}</span>
                            </div>
                        </div>
                        <div class="order-product-price">
                            ₹${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                        </div>
                    </div>
                `;
            });
            orderCard.innerHTML = `
                <div class="order-header">
                    <div class="order-id">
                        <p>ORDER ID</p>
                        <h3>${order.orderId}</h3>
                    </div>
                    <div class="order-date">${formatDate(order.orderDate)}</div>
                    <div class="order-status ${delivery.className}">
                        <i class="fa-solid ${delivery.status === "Delivered" ? "fa-circle-check" : "fa-box"}"></i> ${delivery.status}
                    </div>
                </div>
                <div class="delivery-section">
                    <div class="delivery-icon">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div class="delivery-info">
                        <span>${delivery.status === "Delivered" ? "DELIVERED" : "EXPECTED DELIVERY"}</span>
                        <strong>${formatDate(delivery.date)}</strong>
                    </div>
                    <div class="delivery-line"></div>
                    <div class="delivery-payment">
                        <span>PAYMENT</span>
                        <strong>${order.paymentMethod}</strong>
                    </div>
                </div>
                ${order.deliveryAddress ? `
                    <div class="order-address">
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            DELIVERY ADDRESS
                        </span>
                        <p>
                            ${order.deliveryAddress.house}<br>
                            ${order.deliveryAddress.street}<br>
                            ${order.deliveryAddress.city}, ${order.deliveryAddress.state} -
                            ${order.deliveryAddress.pincode}
                        </p>
                    </div>
                ` : ""}
                <div class="order-products">${productsHTML}</div>
                <div class="charges-section">
                    <h3>Price Details</h3>
                    <div class="charge-row">
                        <span>Product Subtotal</span>
                        <strong>₹${Number(order.subtotal).toFixed(2)}</strong>
                    </div>
                    <div class="charge-row">
                        <span>Shipping</span><strong>₹${Number(order.shipping).toFixed(2)}</strong>
                    </div>
                    <div class="charge-divider"></div>
                    <div class="charge-row final-charge">
                        <span>Total Paid</span><strong>₹${Number(order.total).toFixed(2)}</strong>
                    </div>
                </div>
                <div class="order-footer">
                    <div class="order-items">
                        ${totalQuantity}
                        ${totalQuantity === 1 ? "Item" : "Items"}
                    </div>
                    <button class="receipt-button" data-order-id="${order.orderId}">
                        <i class="fa-solid fa-receipt"></i>
                        View Receipt
                    </button>
                </div>
            `;
            const receiptButton = orderCard.querySelector(".receipt-button");
            receiptButton.addEventListener("click", function () {
                showReceipt(order);
            });
            ordersContainer.appendChild(orderCard);
        });
    }
    displayOrders();
}