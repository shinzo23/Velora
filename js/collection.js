// * Category of products
const collections = [
    {
        category: "Eyes",
        description: "Define, enhance and transform your eyes with Velora's curated eye makeup essentials.",
        items: [
            {
                name: "Eyeliners & Kajal",
                image: "assets/eyeliners.jpg",
                description: "Create everything from delicate everyday lines to bold, dramatic wings.",
                link: "eyes.html"
            },
            {
                name: "Mascaras & Brows",
                image: "assets/mascara.jpg",
                description: "Add length, volume and definition for beautifully expressive lashes & brows.",
                link: "eyes.html"
            },
            {
                name: "Eyeshadows",
                image: "assets/eyeshadows.jpg",
                description: "Explore versatile shades and textures for soft, bold and captivating looks.",
                link: "eyes.html"
            }
        ]
    },
    {
        category: "Lips",
        description: "Discover rich colours, beautiful finishes and effortless lip essentials for every mood.",
        items: [
            {
                name: "Lipsticks",
                image: "assets/lipsticks.avif",
                description: "From timeless nudes to statement shades, find your perfect lip colour.",
                link: "lips.html"
            },
            {
                name: "Lip Gloss & Lip Oils",
                image: "assets/lipgloss.jpg",
                description: "Give your lips a smooth, luminous finish with comfortable glossy formulas.",
                link: "lips.html"
            },
            {
                name: "Lip Liners & Tints",
                image: "assets/lipliners.jpg",
                description: "Define, shape and enhance your lips with precise, effortless application.",
                link: "lips.html"
            }
        ]
    },
    {
        category: "Face",
        description: "Build your perfect base with complexion essentials designed for a naturally polished finish.",
        items: [
            {
                name: "Foundation & Skin Tints",
                image: "assets/foundation.jpg",
                description: "Find lightweight and buildable complexion products for your perfect finish.",
                link: "face.html"
            },
            {
                name: "Concealers",
                image: "assets/concealers.jpg",
                description: "Brighten, smooth and perfect your complexion exactly where you need it.",
                link: "face.html"
            },
            {
                name: "Primers & Setting Sprays",
                image: "assets/primer.jpg",
                description: "Set your makeup and create a soft, refined complexion with ease.",
                link: "face.html"
            }
        ]
    },
    {
        category: "Cheeks",
        description: "Add warmth, colour and dimension to your complexion with our cheek essentials.",
        items: [
            {
                name: "Blush",
                image: "assets/blush.webp",
                description: "Bring a fresh, natural-looking flush of colour to your cheeks.",
                link: "cheeks.html"
            },
            {
                name: "Highlighters",
                image: "assets/highlighters.jpg",
                description: "Enhance your favourite features with a soft, radiant glow.",
                link: "cheeks.html"
            },
            {
                name: "Bronzers & Contour",
                image: "assets/bronzer.jfif",
                description: "Sculpt, define and warm your complexion with effortless dimension.",
                link: "cheeks.html"
            }
        ]
    },
    {
        category: "Nails & Tools",
        description: "Complete your beauty routine with colour, precision and tools designed for effortless application.",
        items: [
            {
                name: "Nail Lacquers",
                image: "assets/nailpaints.webp",
                description: "Explore beautiful shades to complement every outfit, mood and occasion.",
                link: "tool&nails.html"
            },
            {
                name: "Makeup Brushes",
                image: "assets/brushes.jpg",
                description: "Achieve seamless application with carefully designed makeup brushes.",
                link: "tool&nails.html"
            },
            {
                name: "Beauty Tools",
                image: "assets/blenders.jpg",
                description:"Essential beauty tools created to make your everyday routine easier.",
                link: "tool&nails.html"
            }
        ]
    }
];

const collectionsContainer = document.getElementById("collectionsContainer");

// * Creating cards
function createCollectionCard(item) {
    const card = document.createElement("a");
    card.className = "collection-card";
    card.href = item.link;
    card.innerHTML = `
        <div class="collection-image">
            <img src="${item.image}" alt="${item.name}">
            <div class="collection-overlay">
                <span>Explore</span>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="collection-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="collection-link">
                Discover Collection
                <i class="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    `;
    return card;
}

// * Creating categories
function createCategorySection(category) {
    const section = document.createElement("section");
    section.className = "collection-category";
    section.innerHTML = `
        <div class="collection-category-heading">
            <div class="category-title">
                <h2>${category.category}</h2>
            </div>
            <p class="category-description">${category.description}</p>
        </div>
        <div class="collection-grid"></div>
    `;
    const grid = section.querySelector(".collection-grid");
    category.items.forEach(item => {
        const card = createCollectionCard(item);
        grid.appendChild(card);
    });
    return section;
}

// * Rendering cards in the categories
function renderCollections() {
    collectionsContainer.innerHTML = "";
    collections.forEach((category, index) => {
        const categorySection = createCategorySection(category, index);
        collectionsContainer.appendChild(
            categorySection
        );
    });
}
renderCollections();