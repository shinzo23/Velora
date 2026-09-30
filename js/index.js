const trends = [
    {
        id: 1001,
        name: "Velora Glow Edit Makeup Set",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 1299,
        oldPrice: 1599,
        rating: 4.9,
        reviews: 76,
        image: "assets/products/trending/Velora_Glow_Edit.png",
        badge: "New",
        description: "A curated collection of fresh makeup essentials from the latest Velora range."
    },
    {
        id: 1002,
        name: "Velora Glow Balm Stick",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 599,
        rating: 4.6,
        reviews: 31,
        image: "assets/products/trending/Velora_Glow_Balm_Stick.png",
        badge: "New",
        description: "A creamy glow stick for effortless highlighting on the go."
    },
    {
        id: 1003,
        name: "Velora Sculpt & Glow Duo",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 899,
        rating: 4.8,
        reviews: 59,
        image: "assets/products/trending/Velora_SCulpt_Glow_Duo.png",
        badge: "New",
        description: "A convenient duo for sculpting and adding radiant dimension."
    },
    {
        id: 4,
        name: "Velora Everyday Beauty Kit",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 1499,
        oldPrice: 1899,
        rating: 4.9,
        reviews: 83,
        image: "assets/products/trending/Velora_Everyday_Beauty_Kit.png",
        badge: "Editor's Pick",
        description: "A complete everyday makeup kit featuring Velora's newest essentials."
    }
]

// * Trending products container
const trendingContainer = document.getElementById("trendingProducts");

// * Display trending products
function displayTrendingProducts() {
    if (!trendingContainer) {
        return;
    }
    trendingContainer.innerHTML = "";
    trends.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${product.rating}</span>
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    ₹${product.price} ${product.oldPrice ? `<span class="product-old-price">₹${product.oldPrice}</span>` : ""}
                </div>
            </div>
        `;
        trendingContainer.appendChild(productCard);
    });
}

// * Display trending products
displayTrendingProducts();