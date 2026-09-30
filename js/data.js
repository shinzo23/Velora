// ! Face Products
const face = [
    // * Foundation & Skin Tints
    {
        id: 1,
        name: "Velora Natural Glow Foundation",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 799,
        oldPrice: 999,
        rating: 4.8,
        reviews: 245,
        image: "assets/products/face/foundation1.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Porcelain", color: "#F4D8C8" },
            { name: "Warm Ivory", color: "#E9C3A9" },
            { name: "Natural Beige", color: "#D9A982" },
            { name: "Honey", color: "#B9794F" },
            { name: "Deep Cocoa", color: "#6B402F" }
        ],
        sizes: [
            { size: "30 ml", price: 799, oldPrice: 999 },
            { size: "50 ml", price: 999, oldPrice: 1199 }
        ],
        description: "A lightweight foundation that provides natural-looking coverage with a radiant finish."
    },
    {
        id: 2,
        name: "Velora Matte Perfection Foundation",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 849,
        oldPrice: 1099,
        rating: 4.7,
        reviews: 198,
        image: "assets/products/face/foundation2.jpg",
        badge: "Popular",
        shades: [
            { name: "Fair", color: "#F1D4C2" },
            { name: "Light Beige", color: "#E5BD9F" },
            { name: "Medium Beige", color: "#C9946E" },
            { name: "Warm Tan", color: "#A96D48" },
            { name: "Deep", color: "#75452F" }
        ],
        sizes: [
            { size: "30 ml", price: 849, oldPrice: 1099 },
            { size: "50 ml", price: 1049, oldPrice: 1299 }
        ],
        description: "A long-lasting foundation with buildable coverage and a smooth matte finish."
    },
    {
        id: 3,
        name: "Velora Hydrating Skin Tint",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 699,
        oldPrice: 849,
        rating: 4.6,
        reviews: 156,
        image: "assets/products/face/foundation3.webp",
        badge: "New",
        shades: [
            { name: "Light", color: "#EBCBB8" },
            { name: "Medium", color: "#CFA07C" },
            { name: "Tan", color: "#A9744F" },
            { name: "Deep", color: "#714733" }
        ],
        sizes: [
            { size: "30 ml", price: 699, oldPrice: 849 },
            { size: "50 ml", price: 849, oldPrice: 999 }
        ],
        description: "A lightweight skin tint that blends effortlessly while keeping skin hydrated."
    },
    {
        id: 4,
        name: "Velora Soft Focus Foundation",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 899,
        oldPrice: 1099,
        rating: 4.8,
        reviews: 187,
        image: "assets/products/face/foundation1.jpg",
        badge: "",
        shades: [
            { name: "Ivory", color: "#F0D4C0" },
            { name: "Beige", color: "#D8AE8D" },
            { name: "Sand", color: "#C08A64" },
            { name: "Caramel", color: "#9A603E" },
            { name: "Espresso", color: "#603A2C" }
        ],
        sizes: [
            { size: "30 ml", price: 899, oldPrice: 1099 },
            { size: "50 ml", price: 1099, oldPrice: 1299 }
        ],
        description: "A soft-focus foundation designed to create a smooth and even-looking complexion."
    },
    {
        id: 5,
        name: "Velora Second Skin Foundation",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 949,
        oldPrice: 1199,
        rating: 4.9,
        reviews: 312,
        image: "assets/products/face/foundation3.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Porcelain", color: "#F3D9C9" },
            { name: "Nude", color: "#E2B998" },
            { name: "Warm Beige", color: "#C99770" },
            { name: "Golden Tan", color: "#A96F46" },
            { name: "Deep Mocha", color: "#704330" }
        ],
        sizes: [
            { size: "30 ml", price: 949, oldPrice: 1199 },
            { size: "50 ml", price: 1149, oldPrice: 1399 }
        ],
        description: "A breathable foundation that feels comfortable while providing natural medium coverage."
    },
    {
        id: 6,
        name: "Velora Dewy Skin Tint",
        category: "Face",
        subcategory: "Foundation & Skin Tints",
        price: 749,
        oldPrice: 899,
        rating: 4.5,
        reviews: 129,
        image: "assets/products/face/foundation3.webp",
        badge: "",
        shades: [
            { name: "Fair", color: "#F0D2BD" },
            { name: "Light", color: "#E2B795" },
            { name: "Medium", color: "#C7966E" },
            { name: "Deep", color: "#774832" }
        ],
        sizes: [
            { size: "30 ml", price: 749, oldPrice: 899 },
            { size: "50 ml", price: 899, oldPrice: 1049 }
        ],
        description: "A sheer-to-light coverage tint for a fresh, dewy everyday complexion."
    },
    // * Concealers
    {
        id: 11,
        name: "Velora Instant Bright Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 499,
        oldPrice: 599,
        rating: 4.8,
        reviews: 278,
        image: "assets/products/face/concealer1.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Fair", color: "#F1D3BD" },
            { name: "Light", color: "#E1B795" },
            { name: "Medium", color: "#C48E68" },
            { name: "Tan", color: "#A66B47" },
            { name: "Deep", color: "#70422E" }
        ],
        sizes: [
            { size: "6 ml", price: 499, oldPrice: 599 },
            { size: "10 ml", price: 649, oldPrice: 749 }
        ],
        description: "A creamy concealer designed to brighten under-eyes and conceal imperfections."
    },
    {
        id: 12,
        name: "Velora Full Coverage Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 549,
        oldPrice: 699,
        rating: 4.7,
        reviews: 192,
        image: "assets/products/face/concealer2.jpg",
        badge: "Popular",
        shades: [
            { name: "Porcelain", color: "#F2D6C3" },
            { name: "Natural Beige", color: "#D9AD89" },
            { name: "Medium", color: "#C28A64" },
            { name: "Warm Tan", color: "#A36843" },
            { name: "Deep", color: "#6F422E" }
        ],
        sizes: [
            { size: "6 ml", price: 549, oldPrice: 699 },
            { size: "10 ml", price: 699, oldPrice: 849 }
        ],
        description: "A high-coverage concealer that helps create a smooth and even-looking complexion."
    },
    {
        id: 13,
        name: "Velora Hydrating Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 529,
        oldPrice: 649,
        rating: 4.6,
        reviews: 134,
        image: "assets/products/face/concealer3.webp",
        badge: "New",
        shades: [
            { name: "Fair", color: "#F0D2BD" },
            { name: "Light", color: "#E1B795" },
            { name: "Medium", color: "#C58F68" },
            { name: "Tan", color: "#A76D48" },
            { name: "Deep", color: "#754630" }
        ],
        sizes: [
            { size: "6 ml", price: 529, oldPrice: 649 },
            { size: "10 ml", price: 679, oldPrice: 799 }
        ],
        description: "A hydrating concealer with a comfortable finish for the delicate under-eye area."
    },
    {
        id: 14,
        name: "Velora Soft Matte Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 479,
        oldPrice: 599,
        rating: 4.5,
        reviews: 115,
        image: "assets/products/face/concealer1.jpg",
        badge: "",
        shades: [
            { name: "Light", color: "#E8C4AA" },
            { name: "Medium", color: "#C7936B" },
            { name: "Tan", color: "#A66B46" },
            { name: "Deep", color: "#70422E" }
        ],
        sizes: [
            { size: "6 ml", price: 479, oldPrice: 599 },
            { size: "10 ml", price: 629, oldPrice: 749 }
        ],
        description: "A smooth soft-matte concealer that blends easily and stays comfortable throughout the day."
    },
    {
        id: 15,
        name: "Velora Spot Cover Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        reviews: 108,
        image: "assets/products/face/concealer3.webp",
        badge: "",
        shades: [
            { name: "Fair", color: "#F1D5C1" },
            { name: "Light", color: "#DFB28D" },
            { name: "Medium", color: "#C38B64" },
            { name: "Deep", color: "#74452F" }
        ],
        sizes: [
            { size: "5 ml", price: 449, oldPrice: 549 },
            { size: "8 ml", price: 599, oldPrice: 699 }
        ],
        description: "A targeted concealer designed to cover blemishes and small imperfections."
    },
    {
        id: 20,
        name: "Velora Perfect Match Concealer",
        category: "Face",
        subcategory: "Concealers",
        price: 599,
        oldPrice: 729,
        rating: 4.9,
        reviews: 204,
        image: "assets/concealers.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Fair", color: "#F2D5C0" },
            { name: "Light", color: "#E0B58F" },
            { name: "Medium", color: "#C48D65" },
            { name: "Tan", color: "#A66B45" },
            { name: "Deep", color: "#70412D" }
        ],
        sizes: [
            { size: "6 ml", price: 599, oldPrice: 729 },
            { size: "10 ml", price: 749, oldPrice: 879 }
        ],
        description: "A blendable concealer designed to create a seamless second-skin appearance."
    },
    // * Primers & Setting Spray
    {
        id: 21,
        name: "Velora Pore Blur Primer",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 649,
        oldPrice: 799,
        rating: 4.7,
        reviews: 188,
        image: "assets/products/face/spray1.jpg",
        badge: "Best Seller",
        sizes: [
            { size: "30 ml", price: 649, oldPrice: 799 },
            { size: "50 ml", price: 799, oldPrice: 949 }
        ],
        description: "A smoothing primer that creates a refined base for makeup application."
    },
    {
        id: 22,
        name: "Velora Hydrating Face Primer",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 599,
        oldPrice: 749,
        rating: 4.6,
        reviews: 142,
        image: "assets/products/face/spray2.jpeg",
        badge: "",
        sizes: [
            { size: "30 ml", price: 599, oldPrice: 749 },
            { size: "50 ml", price: 749, oldPrice: 899 }
        ],
        description: "A lightweight hydrating primer that helps makeup apply smoothly."
    },
    {
        id: 23,
        name: "Velora Glow Primer",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 699,
        oldPrice: 849,
        rating: 4.8,
        reviews: 219,
        image: "assets/products/face/spray3.jfif",
        badge: "Popular",
        sizes: [
            { size: "30 ml", price: 699, oldPrice: 849 },
            { size: "50 ml", price: 849, oldPrice: 999 }
        ],
        description: "A luminous primer that adds a subtle glow beneath foundation."
    },
    {
        id: 26,
        name: "Velora All Day Setting Spray",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 599,
        oldPrice: 749,
        rating: 4.8,
        reviews: 231,
        image: "assets/products/face/spray4.webp",
        badge: "Best Seller",
        sizes: [
            { size: "50 ml", price: 599, oldPrice: 749 },
            { size: "100 ml", price: 799, oldPrice: 949 }
        ],
        description: "A lightweight setting mist designed to help makeup stay fresh for longer."
    },
    {
        id: 29,
        name: "Velora Refresh Mist",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 449,
        oldPrice: 549,
        rating: 4.4,
        reviews: 81,
        image: "assets/products/face/spray5.webp",
        badge: "",
        sizes: [
            { size: "50 ml", price: 449, oldPrice: 549 },
            { size: "100 ml", price: 599, oldPrice: 699 }
        ],
        description: "A refreshing facial mist that can be used before or after makeup."
    },
    {
        id: 30,
        name: "Velora Lock & Glow Mist",
        category: "Face",
        subcategory: "Primers & Setting Sprays",
        price: 649,
        oldPrice: 799,
        rating: 4.9,
        reviews: 267,
        image: "assets/products/face/spray3.jfif",
        badge: "Editor's Pick",
        sizes: [
            { size: "50 ml", price: 649, oldPrice: 799 },
            { size: "100 ml", price: 849, oldPrice: 999 }
        ],
        description: "A lightweight finishing mist that helps set makeup while adding a natural glow."
    }
];

// ! Eye Products
const eyes = [
    // * Eyeshadows
    {
        id: 201,
        name: "Velora Nude Dream Eyeshadow Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 899,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 312,
        image: "assets/products/eyes/eyeshadow1.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Soft Nude", color: "#D8B59B" },
            { name: "Warm Beige", color: "#C99B78" },
            { name: "Rose Brown", color: "#9B6B58" },
            { name: "Mocha", color: "#795548" },
            { name: "Deep Brown", color: "#4A3028" }
        ],
        sizes: [
            { size: "8 g", price: 899, oldPrice: 1099 },
            { size: "12 g", price: 1099, oldPrice: 1299 }
        ],
        description: "A versatile nude palette featuring everyday neutrals and soft glam shades."
    },
    {
        id: 202,
        name: "Velora Rose Glow Eyeshadow Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 949,
        oldPrice: 1199,
        rating: 4.8,
        reviews: 247,
        image: "assets/products/eyes/eyeshadow2.jpg",
        badge: "Popular",
        shades: [
            { name: "Blush Pink", color: "#E6B4B8" },
            { name: "Dusty Rose", color: "#C9828B" },
            { name: "Rose Gold", color: "#C98F83" },
            { name: "Mauve", color: "#9B6876" },
            { name: "Deep Rose", color: "#713F4B" }
        ],
        sizes: [
            { size: "8 g", price: 949, oldPrice: 1199 },
            { size: "12 g", price: 1149, oldPrice: 1399 }
        ],
        description: "A romantic palette of rosy, pink and shimmering shades."
    },
    {
        id: 203,
        name: "Velora Sunset Romance Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 999,
        oldPrice: 1249,
        rating: 4.7,
        reviews: 185,
        image: "assets/products/eyes/eyeshadow3.jpg",
        badge: "New",
        shades: [
            { name: "Peach", color: "#E9A98F" },
            { name: "Terracotta", color: "#B96F52" },
            { name: "Copper", color: "#A96843" },
            { name: "Bronze", color: "#8A5A3B" },
            { name: "Sunset Brown", color: "#684032" }
        ],
        sizes: [
            { size: "8 g", price: 999, oldPrice: 1249 },
            { size: "12 g", price: 1199, oldPrice: 1449 }
        ],
        description: "Warm sunset-inspired shades for creating bold and beautiful eye looks."
    },
    {
        id: 204,
        name: "Velora Berry Crush Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 899,
        oldPrice: 1099,
        rating: 4.6,
        reviews: 143,
        image: "assets/products/eyes/eyeshadow4.webp",
        badge: "",
        shades: [
            { name: "Berry Pink", color: "#C76B7B" },
            { name: "Rose", color: "#A94F63" },
            { name: "Plum", color: "#74405B" },
            { name: "Wine", color: "#642F42" },
            { name: "Deep Berry", color: "#482333" }
        ],
        sizes: [
            { size: "8 g", price: 899, oldPrice: 1099 },
            { size: "12 g", price: 1099, oldPrice: 1299 }
        ],
        description: "A berry-toned eyeshadow palette with rich matte and shimmer shades."
    },
    {
        id: 205,
        name: "Velora Smokey Night Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 1049,
        oldPrice: 1299,
        rating: 4.8,
        reviews: 208,
        image: "assets/products/eyes/eyeshadow5.jpg",
        badge: "Trending",
        shades: [
            { name: "Soft Grey", color: "#A7A2A0" },
            { name: "Charcoal", color: "#55504F" },
            { name: "Smokey Brown", color: "#493A35" },
            { name: "Black", color: "#1F1D1C" },
            { name: "Silver", color: "#B9B9B9" }
        ],
        sizes: [
            { size: "8 g", price: 1049, oldPrice: 1299 },
            { size: "12 g", price: 1249, oldPrice: 1499 }
        ],
        description: "Deep smoky shades designed for dramatic evening eye makeup."
    },
    {
        id: 206,
        name: "Velora Soft Glam Palette",
        category: "Eyes",
        subcategory: "Eyeshadows",
        price: 949,
        oldPrice: 1149,
        rating: 4.9,
        reviews: 291,
        image: "assets/products/eyes/eyeshadow6.jpg",
        badge: "Editor's Pick",
        shades: [
            { name: "Champagne", color: "#E6C7A2" },
            { name: "Soft Pink", color: "#D9A8A7" },
            { name: "Warm Brown", color: "#A8755A" },
            { name: "Bronze", color: "#95613F" },
            { name: "Deep Mocha", color: "#593A30" }
        ],
        sizes: [
            { size: "8 g", price: 949, oldPrice: 1149 },
            { size: "12 g", price: 1149, oldPrice: 1349 }
        ],
        description: "A balanced palette of soft neutrals and glamorous shimmer shades."
    },
    // * Eyeliners & Kajal
    {
        id: 213,
        name: "Velora Waterproof Gel Eyeliner",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        reviews: 184,
        image: "assets/products/eyes/kajal1.jpg",
        badge: "",
        shades: [
            { name: "Black", color: "#161414" },
            { name: "Brown", color: "#58372D" }
        ],
        sizes: [
            { size: "2 g", price: 449, oldPrice: 549 },
            { size: "4 g", price: 549, oldPrice: 649 }
        ],
        description: "A creamy gel eyeliner with intense color and a smooth application."
    },
    {
        id: 214,
        name: "Velora Matte Liquid Liner",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 429,
        oldPrice: 529,
        rating: 4.7,
        reviews: 152,
        image: "assets/products/eyes/kajal2.webp",
        badge: "New",
        shades: [
            { name: "Matte Black", color: "#171414" }
        ],
        sizes: [
            { size: "1 ml", price: 429, oldPrice: 529 },
            { size: "2 ml", price: 529, oldPrice: 629 }
        ],
        description: "A quick-drying liquid liner with a smooth matte finish."
    },
    {
        id: 215,
        name: "Velora Brown Precision Liner",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 379,
        oldPrice: 469,
        rating: 4.5,
        reviews: 98,
        image: "assets/products/eyes/kajal3.jpg",
        badge: "",
        shades: [
            { name: "Brown", color: "#59382D" }
        ],
        sizes: [
            { size: "1 ml", price: 379, oldPrice: 469 },
            { size: "2 ml", price: 479, oldPrice: 569 }
        ],
        description: "A soft brown eyeliner for natural-looking everyday eye definition."
    },
    {
        id: 216,
        name: "Velora Long Stay Kajal",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 329,
        oldPrice: 399,
        rating: 4.8,
        reviews: 245,
        image: "assets/products/eyes/kajal4.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Black", color: "#151313" },
            { name: "Brown", color: "#57382D" }
        ],
        sizes: [
            { size: "0.25 g", price: 329, oldPrice: 399 },
            { size: "0.5 g", price: 429, oldPrice: 499 }
        ],
        description: "A smooth kajal designed for comfortable, long-lasting eye definition."
    },
    {
        id: 219,
        name: "Velora Smudge Proof Kajal",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 349,
        oldPrice: 429,
        rating: 4.7,
        reviews: 173,
        image: "assets/products/eyes/kajal5.jpg",
        badge: "Trending",
        shades: [
            { name: "Black", color: "#151313" },
            { name: "Brown", color: "#57382D" }
        ],
        sizes: [
            { size: "0.25 g", price: 349, oldPrice: 429 },
            { size: "0.5 g", price: 449, oldPrice: 529 }
        ],
        description: "A creamy kajal that delivers deep color with a smudge-resistant finish."
    },
    {
        id: 220,
        name: "Velora Ultra Fine Eyeliner",
        category: "Eyes",
        subcategory: "Eyeliners & Kajal",
        price: 429,
        oldPrice: 529,
        rating: 4.8,
        reviews: 194,
        image: "assets/products/eyes/kajal6.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Black", color: "#161414" },
            { name: "Brown", color: "#59382D" }
        ],
        sizes: [
            { size: "1 ml", price: 429, oldPrice: 529 },
            { size: "2 ml", price: 529, oldPrice: 629 }
        ],
        description: "An ultra-fine eyeliner designed for precise and delicate eye looks."
    },
    // * Mascara & Brows
    {
        id: 225,
        name: "Velora Brown Mascara",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 499,
        oldPrice: 599,
        rating: 4.5,
        reviews: 91,
        image: "assets/products/eyes/mascara1.jpg",
        badge: "New",
        shades: [
            { name: "Brown", color: "#59382D" }
        ],
        sizes: [
            { size: "8 ml", price: 499, oldPrice: 599 },
            { size: "12 ml", price: 599, oldPrice: 699 }
        ],
        description: "A soft brown mascara for subtle and natural-looking lash definition."
    },
    {
        id: 226,
        name: "Velora Brow Defining Pencil",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 349,
        oldPrice: 429,
        rating: 4.7,
        reviews: 164,
        image: "assets/products/eyes/mascara2.avif",
        badge: "",
        shades: [
            { name: "Soft Brown", color: "#76513E" },
            { name: "Dark Brown", color: "#4D3328" },
            { name: "Deep Brown", color: "#36251F" }
        ],
        sizes: [
            { size: "0.3 g", price: 349, oldPrice: 429 },
            { size: "0.5 g", price: 449, oldPrice: 529 }
        ],
        description: "A fine brow pencil for filling, shaping and defining brows."
    },
    {
        id: 227,
        name: "Velora Clear Brow Gel",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 399,
        oldPrice: 499,
        rating: 4.6,
        reviews: 127,
        image: "assets/products/eyes/mascara3.avif",
        badge: "",
        shades: [
            { name: "Clear", color: "#EDE8E4" }
        ],
        sizes: [
            { size: "5 ml", price: 399, oldPrice: 499 },
            { size: "8 ml", price: 499, oldPrice: 599 }
        ],
        description: "A clear brow gel that helps hold brows neatly in place."
    },
    {
        id: 228,
        name: "Velora Brow Powder Duo",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 449,
        oldPrice: 549,
        rating: 4.5,
        reviews: 103,
        image: "assets/products/eyes/mascara4.webp",
        badge: "",
        shades: [
            { name: "Light Brown", color: "#92705A" },
            { name: "Medium Brown", color: "#684836" },
            { name: "Dark Brown", color: "#422D25" }
        ],
        sizes: [
            { size: "2 g", price: 449, oldPrice: 549 },
            { size: "4 g", price: 549, oldPrice: 649 }
        ],
        description: "A dual-shade brow powder for naturally defined and fuller-looking brows."
    },
    {
        id: 229,
        name: "Velora Brow Sculpting Pencil",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 429,
        oldPrice: 529,
        rating: 4.8,
        reviews: 189,
        image: "assets/products/eyes/mascara5.webp",
        badge: "Trending",
        shades: [
            { name: "Soft Brown", color: "#76513E" },
            { name: "Medium Brown", color: "#604332" },
            { name: "Deep Brown", color: "#38251F" }
        ],
        sizes: [
            { size: "0.3 g", price: 429, oldPrice: 529 },
            { size: "0.5 g", price: 529, oldPrice: 629 }
        ],
        description: "A precision brow pencil designed to sculpt and define the brow shape."
    },
    {
        id: 230,
        name: "Velora Tinted Brow Gel",
        category: "Eyes",
        subcategory: "Mascara & Brows",
        price: 449,
        oldPrice: 549,
        rating: 4.7,
        reviews: 156,
        image: "assets/products/eyes/mascara6.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Light Brown", color: "#92705A" },
            { name: "Medium Brown", color: "#684836" },
            { name: "Dark Brown", color: "#422D25" }
        ],
        sizes: [
            { size: "5 ml", price: 449, oldPrice: 549 },
            { size: "8 ml", price: 549, oldPrice: 649 }
        ],
        description: "A tinted brow gel that adds subtle color while keeping brows in place."
    }
];

// ! Lips Products
const lips = [

    // * Lipsticks & Liquid Lipsticks
    {
        id: 301,
        name: "Velora Velvet Matte Lipstick",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 499,
        oldPrice: 599,
        rating: 4.8,
        reviews: 287,
        image: "assets/products/lips/lip1.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Nude", color: "#C48F78" },
            { name: "Rose", color: "#B86F78" },
            { name: "Mauve", color: "#985C68" },
            { name: "Berry", color: "#8A4055" },
            { name: "Deep Wine", color: "#672C3C" }
        ],
        sizes: [
            { size: "3.5 g", price: 499, oldPrice: 599 },
            { size: "4.5 g", price: 599, oldPrice: 699 }
        ],
        description: "A richly pigmented lipstick with a smooth velvet-matte finish."
    },
    {
        id: 302,
        name: "Velora Rose Nude Lipstick",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 449,
        oldPrice: 549,
        rating: 4.7,
        reviews: 194,
        image: "assets/products/lips/lip2.avif",
        badge: "Popular",
        shades: [
            { name: "Rose Nude", color: "#B77A7D" }
        ],
        sizes: [
            { size: "3.5 g", price: 449, oldPrice: 549 },
            { size: "4.5 g", price: 549, oldPrice: 649 }
        ],
        description: "A wearable rose nude shade perfect for everyday makeup."
    },
    {
        id: 303,
        name: "Velora Berry Wine Lipstick",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 499,
        oldPrice: 649,
        rating: 4.6,
        reviews: 137,
        image: "assets/products/lips/lip3.webp",
        badge: "",
        shades: [
            { name: "Berry Wine", color: "#762F48" }
        ],
        sizes: [
            { size: "3.5 g", price: 499, oldPrice: 649 },
            { size: "4.5 g", price: 599, oldPrice: 749 }
        ],
        description: "A deep berry wine shade for elegant evening looks."
    },
    {
        id: 304,
        name: "Velora Classic Red Lipstick",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 529,
        oldPrice: 649,
        rating: 4.9,
        reviews: 342,
        image: "assets/products/lips/lip4.avif",
        badge: "Best Seller",
        shades: [
            { name: "Classic Red", color: "#A62932" }
        ],
        sizes: [
            { size: "3.5 g", price: 529, oldPrice: 649 },
            { size: "4.5 g", price: 629, oldPrice: 749 }
        ],
        description: "A timeless red lipstick with rich color payoff and a smooth finish."
    },
    {
        id: 305,
        name: "Velora Peach Nude Lipstick",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 449,
        oldPrice: 549,
        rating: 4.5,
        reviews: 112,
        image: "assets/products/lips/lip5.jpg",
        badge: "",
        shades: [
            { name: "Peach Nude", color: "#D28F7C" }
        ],
        sizes: [
            { size: "3.5 g", price: 449, oldPrice: 549 },
            { size: "4.5 g", price: 549, oldPrice: 649 }
        ],
        description: "A soft peach nude lipstick for fresh everyday looks."
    },
    {
        id: 306,
        name: "Velora Stay Matte Liquid Lip",
        category: "Lips",
        subcategory: "Lipsticks & Liquid Lips",
        price: 549,
        oldPrice: 699,
        rating: 4.8,
        reviews: 253,
        image: "assets/products/lips/lip6.jpg",
        badge: "Long Wear",
        shades: [
            { name: "Nude", color: "#B97968" },
            { name: "Rose", color: "#A95763" },
            { name: "Red", color: "#9D3038" },
            { name: "Berry", color: "#783445" },
            { name: "Wine", color: "#5F2937" }
        ],
        sizes: [
            { size: "4 ml", price: 549, oldPrice: 699 },
            { size: "6 ml", price: 649, oldPrice: 799 }
        ],
        description: "A lightweight liquid lipstick with bold color and a matte finish."
    },
    // * Lip Gloss & Oils
    {
        id: 311,
        name: "Velora Glass Shine Lip Gloss",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 399,
        oldPrice: 499,
        rating: 4.8,
        reviews: 243,
        image: "assets/products/lips/gloss6.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Clear", color: "#F4EDE9" },
            { name: "Pink", color: "#D89BA5" },
            { name: "Nude", color: "#C5957F" }
        ],
        sizes: [
            { size: "4 ml", price: 399, oldPrice: 499 },
            { size: "6 ml", price: 499, oldPrice: 599 }
        ],
        description: "A high-shine gloss that gives lips a smooth glass-like finish."
    },
    {
        id: 312,
        name: "Velora Rose Lip Oil",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 449,
        oldPrice: 549,
        rating: 4.7,
        reviews: 189,
        image: "assets/products/lips/gloss1.png",
        badge: "Popular",
        shades: [
            { name: "Rose", color: "#C57D88" }
        ],
        sizes: [
            { size: "5 ml", price: 449, oldPrice: 549 },
            { size: "8 ml", price: 549, oldPrice: 649 }
        ],
        description: "A lightweight lip oil that adds shine and a soft rosy tint."
    },
    {
        id: 315,
        name: "Velora Plump Shine Lip Oil",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 479,
        oldPrice: 599,
        rating: 4.7,
        reviews: 172,
        image: "assets/products/lips/gloss2.avif",
        badge: "",
        shades: [
            { name: "Clear", color: "#F3ECE8" },
            { name: "Soft Pink", color: "#D89AA4" },
            { name: "Nude", color: "#C18F7A" }
        ],
        sizes: [
            { size: "5 ml", price: 479, oldPrice: 599 },
            { size: "8 ml", price: 579, oldPrice: 699 }
        ],
        description: "A glossy lip oil designed to create a smooth and plump-looking finish."
    },
    {
        id: 316,
        name: "Velora Berry Tint Lip Oil",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        reviews: 98,
        image: "assets/products/lips/gloss3.jpg",
        badge: "",
        shades: [
            { name: "Berry", color: "#9A455B" }
        ],
        sizes: [
            { size: "5 ml", price: 449, oldPrice: 549 },
            { size: "8 ml", price: 549, oldPrice: 649 }
        ],
        description: "A sheer berry-tinted lip oil with a comfortable glossy finish."
    },
    {
        id: 319,
        name: "Velora Cherry Shine Gloss",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 419,
        oldPrice: 519,
        rating: 4.5,
        reviews: 87,
        image: "assets/products/lips/gloss4.avif",
        badge: "",
        shades: [
            { name: "Cherry", color: "#B84B59" }
        ],
        sizes: [
            { size: "4 ml", price: 419, oldPrice: 519 },
            { size: "6 ml", price: 519, oldPrice: 619 }
        ],
        description: "A sheer cherry gloss for a fresh and vibrant lip look."
    },
    {
        id: 320,
        name: "Velora Crystal Lip Oil",
        category: "Lips",
        subcategory: "Lip Gloss & Oils",
        price: 499,
        oldPrice: 599,
        rating: 4.9,
        reviews: 231,
        image: "assets/products/lips/gloss5.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Crystal Clear", color: "#F6F1EE" }
        ],
        sizes: [
            { size: "5 ml", price: 499, oldPrice: 599 },
            { size: "8 ml", price: 599, oldPrice: 699 }
        ],
        description: "A luxurious clear lip oil that creates a glossy crystal-like finish."
    },
    // * Lip Liners & Tints
    {
        id: 321,
        name: "Velora Nude Lip Liner",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 299,
        oldPrice: 349,
        rating: 4.7,
        reviews: 186,
        image: "assets/products/lips/liner2.avif",
        badge: "Best Seller",
        shades: [
            { name: "Nude", color: "#B98570" },
            { name: "Warm Nude", color: "#A96F5A" }
        ],
        sizes: [
            { size: "0.3 g", price: 299, oldPrice: 349 },
            { size: "0.5 g", price: 399, oldPrice: 449 }
        ],
        description: "A creamy nude lip liner for shaping and defining the lips."
    },
    {
        id: 322,
        name: "Velora Rose Lip Liner",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 299,
        oldPrice: 379,
        rating: 4.6,
        reviews: 132,
        image: "assets/products/lips/liner1.jfif",
        badge: "",
        shades: [
            { name: "Rose", color: "#B56D78" }
        ],
        sizes: [
            { size: "0.3 g", price: 299, oldPrice: 379 },
            { size: "0.5 g", price: 399, oldPrice: 479 }
        ],
        description: "A rosy lip liner that complements pink and nude lip shades."
    },
    {
        id: 327,
        name: "Velora Cherry Lip Tint",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 429,
        oldPrice: 529,
        rating: 4.8,
        reviews: 219,
        image: "assets/products/lips/liner3.avif",
        badge: "Trending",
        shades: [
            { name: "Cherry", color: "#B83F50" }
        ],
        sizes: [
            { size: "4 ml", price: 429, oldPrice: 529 },
            { size: "6 ml", price: 529, oldPrice: 629 }
        ],
        description: "A vibrant cherry tint for a fresh and long-lasting lip stain."
    },
    {
        id: 328,
        name: "Velora Brown Nude Liner",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 319,
        oldPrice: 399,
        rating: 4.5,
        reviews: 86,
        image: "assets/products/lips/liner4.webp",
        badge: "",
        shades: [
            { name: "Brown Nude", color: "#815542" }
        ],
        sizes: [
            { size: "0.3 g", price: 319, oldPrice: 399 },
            { size: "0.5 g", price: 419, oldPrice: 499 }
        ],
        description: "A warm brown liner perfect for nude and neutral lip combinations."
    },
    {
        id: 329,
        name: "Velora Lip Sculpt Pencil",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 379,
        oldPrice: 469,
        rating: 4.7,
        reviews: 141,
        image: "assets/products/lips/liner5.jpg",
        badge: "",
        shades: [
            { name: "Nude", color: "#B9826D" },
            { name: "Rose", color: "#AA6671" },
            { name: "Brown", color: "#805341" }
        ],
        sizes: [
            { size: "0.3 g", price: 379, oldPrice: 469 },
            { size: "0.5 g", price: 479, oldPrice: 569 }
        ],
        description: "A precision lip pencil designed to shape and define the lip contour."
    },
    {
        id: 330,
        name: "Velora Water Tint Lip Stain",
        category: "Lips",
        subcategory: "Lip Liners & Tints",
        price: 449,
        oldPrice: 549,
        rating: 4.8,
        reviews: 167,
        image: "assets/products/lips/liner6.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Rose", color: "#C46876" },
            { name: "Cherry", color: "#B43D4F" },
            { name: "Berry", color: "#923B51" }
        ],
        sizes: [
            { size: "4 ml", price: 449, oldPrice: 549 },
            { size: "6 ml", price: 549, oldPrice: 649 }
        ],
        description: "A lightweight water-based tint that leaves a natural-looking stain."
    }
];

// ! Cheeks Products
const cheeks = [
    // * Blush
    {
        id: 401,
        name: "Velora Soft Rose Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 499,
        oldPrice: 599,
        rating: 4.8,
        reviews: 214,
        image: "assets/products/cheeks/blush1.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Soft Rose", color: "#C77B83" }
        ],
        sizes: [
            { size: "4 g", price: 499, oldPrice: 599 },
            { size: "6 g", price: 599, oldPrice: 699 }
        ],
        description: "A soft rose blush that adds a natural flush of color to the cheeks."
    },
    {
        id: 402,
        name: "Velora Peach Glow Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 499,
        oldPrice: 599,
        rating: 4.7,
        reviews: 176,
        image: "assets/products/cheeks/blush2.webp",
        badge: "Popular",
        shades: [
            { name: "Peach", color: "#D98E76" }
        ],
        sizes: [
            { size: "4 g", price: 499, oldPrice: 599 },
            { size: "6 g", price: 599, oldPrice: 699 }
        ],
        description: "A warm peach blush for a fresh and radiant cheek look."
    },
    {
        id: 403,
        name: "Velora Berry Flush Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 529,
        oldPrice: 649,
        rating: 4.6,
        reviews: 128,
        image: "assets/products/cheeks/blush3.webp",
        badge: "",
        shades: [
            { name: "Berry", color: "#A64D62" }
        ],
        sizes: [
            { size: "4 g", price: 529, oldPrice: 649 },
            { size: "6 g", price: 629, oldPrice: 749 }
        ],
        description: "A rich berry blush that creates a beautiful flushed effect."
    },
    {
        id: 404,
        name: "Velora Pink Bloom Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 479,
        oldPrice: 579,
        rating: 4.8,
        reviews: 193,
        image: "assets/products/cheeks/blush4.jpg",
        badge: "New",
        shades: [
            { name: "Soft Pink", color: "#D993A0" },
            { name: "Bloom Pink", color: "#C87588" }
        ],
        sizes: [
            { size: "4 g", price: 479, oldPrice: 579 },
            { size: "6 g", price: 579, oldPrice: 679 }
        ],
        description: "A soft pink blush for a youthful and naturally radiant finish."
    },
    {
        id: 409,
        name: "Velora Velvet Berry Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 519,
        oldPrice: 629,
        rating: 4.6,
        reviews: 105,
        image: "assets/products/cheeks/blush5.jpg",
        badge: "",
        shades: [
            { name: "Berry", color: "#A34C61" },
            { name: "Deep Berry", color: "#833B50" }
        ],
        sizes: [
            { size: "4 g", price: 519, oldPrice: 629 },
            { size: "6 g", price: 619, oldPrice: 729 }
        ],
        description: "A buildable berry blush with a soft velvet finish."
    },
    {
        id: 410,
        name: "Velora Natural Flush Blush",
        category: "Cheeks",
        subcategory: "Blush",
        price: 499,
        oldPrice: 599,
        rating: 4.9,
        reviews: 236,
        image: "assets/products/cheeks/blush6.jfif",
        badge: "Editor's Pick",
        shades: [
            { name: "Natural Pink", color: "#C98288" },
            { name: "Peach Nude", color: "#C9937D" },
            { name: "Rose", color: "#B96F79" }
        ],
        sizes: [
            { size: "4 g", price: 499, oldPrice: 599 },
            { size: "6 g", price: 599, oldPrice: 699 }
        ],
        description: "A natural-looking blush designed to mimic a soft healthy flush."
    },
    // * Highlighters
    {
        id: 411,
        name: "Velora Champagne Glow Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 599,
        oldPrice: 749,
        rating: 4.9,
        reviews: 278,
        image: "assets/products/cheeks/highlighter6.jpg",
        badge: "Best Seller",
        shades: [
            { name: "Champagne", color: "#E5C18D" }
        ],
        sizes: [
            { size: "5 g", price: 599, oldPrice: 749 },
            { size: "8 g", price: 699, oldPrice: 849 }
        ],
        description: "A luminous champagne highlighter for a radiant glowing finish."
    },
    {
        id: 412,
        name: "Velora Rose Gold Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 629,
        oldPrice: 779,
        rating: 4.8,
        reviews: 193,
        image: "assets/products/cheeks/highlighter5.webp",
        badge: "Popular",
        shades: [
            { name: "Rose Gold", color: "#D39B91" }
        ],
        sizes: [
            { size: "5 g", price: 629, oldPrice: 779 },
            { size: "8 g", price: 729, oldPrice: 879 }
        ],
        description: "A rose gold highlighter that adds warmth and luminosity."
    },
    {
        id: 413,
        name: "Velora Pearl Glow Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 599,
        oldPrice: 729,
        rating: 4.7,
        reviews: 148,
        image: "assets/products/cheeks/highlighter4.jpg",
        badge: "",
        shades: [
            { name: "Pearl", color: "#E8DDD3" }
        ],
        sizes: [
            { size: "5 g", price: 599, oldPrice: 729 },
            { size: "8 g", price: 699, oldPrice: 829 }
        ],
        description: "A pearly highlighter for a soft luminous finish."
    },
    {
        id: 414,
        name: "Velora Golden Hour Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 649,
        oldPrice: 799,
        rating: 4.8,
        reviews: 217,
        image: "assets/products/cheeks/highlighter3.avif",
        badge: "New",
        shades: [
            { name: "Golden", color: "#D0A653" }
        ],
        sizes: [
            { size: "5 g", price: 649, oldPrice: 799 },
            { size: "8 g", price: 749, oldPrice: 899 }
        ],
        description: "A warm golden highlighter inspired by golden-hour radiance."
    },
    {
        id: 419,
        name: "Velora Bronze Glow Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 629,
        oldPrice: 749,
        rating: 4.6,
        reviews: 105,
        image: "assets/products/cheeks/highlighter2.jpg",
        badge: "",
        shades: [
            { name: "Bronze", color: "#B77B4B" }
        ],
        sizes: [
            { size: "5 g", price: 629, oldPrice: 749 },
            { size: "8 g", price: 729, oldPrice: 849 }
        ],
        description: "A warm bronze highlighter for glowing sun-kissed makeup looks."
    },
    {
        id: 420,
        name: "Velora Radiant Beam Highlighter",
        category: "Cheeks",
        subcategory: "Highlighters",
        price: 649,
        oldPrice: 799,
        rating: 4.9,
        reviews: 231,
        image: "assets/products/cheeks/highlighter1.jfif",
        badge: "Editor's Pick",
        shades: [
            { name: "Champagne", color: "#E2C08D" },
            { name: "Pearl", color: "#E5DCD4" },
            { name: "Rose Glow", color: "#D19A94" }
        ],
        sizes: [
            { size: "5 g", price: 649, oldPrice: 799 },
            { size: "8 g", price: 749, oldPrice: 899 }
        ],
        description: "A finely milled highlighter designed to create a beautiful radiant beam."
    },
    // * Contour & Bronzers
    {
        id: 425,
        name: "Velora Soft Sculpt Duo",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 749,
        oldPrice: 899,
        rating: 4.8,
        reviews: 174,
        image: "assets/products/cheeks/contour1.webp",
        badge: "Editor's Pick",
        shades: [
            { name: "Light", color: "#B28368" },
            { name: "Medium", color: "#8A5B43" },
            { name: "Deep", color: "#5D3B2F" }
        ],
        sizes: [
            { size: "10 g", price: 749, oldPrice: 899 },
            { size: "14 g", price: 849, oldPrice: 999 }
        ],
        description: "A convenient contour and bronzer duo for effortless facial definition."
    },
    {
        id: 426,
        name: "Velora Sun Kissed Bronzer",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 649,
        oldPrice: 799,
        rating: 4.7,
        reviews: 136,
        image: "assets/products/cheeks/contour2.webp",
        badge: "",
        shades: [
            { name: "Sun Kissed", color: "#A86C43" },
            { name: "Warm Tan", color: "#8E573A" },
            { name: "Deep Bronze", color: "#69412F" }
        ],
        sizes: [
            { size: "6 g", price: 649, oldPrice: 799 },
            { size: "9 g", price: 749, oldPrice: 899 }
        ],
        description: "A silky bronzer that adds warmth and a softly sun-kissed finish."
    },
    {
        id: 427,
        name: "Velora Natural Sculpt Powder",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 579,
        oldPrice: 699,
        rating: 4.5,
        reviews: 88,
        image: "assets/products/cheeks/contour3.webp",
        badge: "",
        shades: [
            { name: "Light Sculpt", color: "#98705C" },
            { name: "Medium Sculpt", color: "#76503E" },
            { name: "Deep Sculpt", color: "#51352B" }
        ],
        sizes: [
            { size: "6 g", price: 579, oldPrice: 699 },
            { size: "9 g", price: 679, oldPrice: 799 }
        ],
        description: "A subtle contour powder for naturally defined facial features."
    },
    {
        id: 428,
        name: "Velora Bronze & Glow Duo",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 799,
        oldPrice: 949,
        rating: 4.8,
        reviews: 203,
        image: "assets/products/cheeks/contour5.webp",
        badge: "Trending",
        shades: [
            { name: "Golden Bronze", color: "#B77B4D" },
            { name: "Warm Glow", color: "#D2A35D" }
        ],
        sizes: [
            { size: "10 g", price: 799, oldPrice: 949 },
            { size: "14 g", price: 899, oldPrice: 1049 }
        ],
        description: "A bronzer and glow duo for creating warm and radiant makeup looks."
    },
    {
        id: 429,
        name: "Velora Cream Bronzer",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 679,
        oldPrice: 829,
        rating: 4.6,
        reviews: 104,
        image: "assets/products/cheeks/contour6.jpg",
        badge: "",
        shades: [
            { name: "Light Bronze", color: "#B57A54" },
            { name: "Medium Bronze", color: "#98603F" },
            { name: "Deep Bronze", color: "#6C412E" }
        ],
        sizes: [
            { size: "6 g", price: 679, oldPrice: 829 },
            { size: "9 g", price: 779, oldPrice: 929 }
        ],
        description: "A creamy bronzer that blends seamlessly for a natural finish."
    },
    {
        id: 430,
        name: "Velora Defined Face Palette",
        category: "Cheeks",
        subcategory: "Contour & Bronzer",
        price: 849,
        oldPrice: 999,
        rating: 4.9,
        reviews: 228,
        image: "assets/products/cheeks/contour4.avif",
        badge: "Best Seller",
        shades: [
            { name: "Light", color: "#B7896F" },
            { name: "Medium", color: "#8A5C44" },
            { name: "Deep", color: "#5B3A2E" }
        ],
        sizes: [
            { size: "12 g", price: 849, oldPrice: 999 },
            { size: "16 g", price: 949, oldPrice: 1099 }
        ],
        description: "A multi-shade face palette designed for contouring, bronzing and definition."
    }
];

// ! Tools & Nails Products
const tool_and_nails = [
    // * Makeup Brushes
    {
        id: 503,
        name: "Velora Foundation Brush",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 349,
        oldPrice: 449,
        rating: 4.6,
        reviews: 118,
        image: "assets/products/tool&nails/brush1.jpg",
        badge: "",
        description: "A dense foundation brush designed for seamless liquid and cream application.",
        sizes: [
            { size: "1 Piece", price: 349, oldPrice: 449 },
            { size: "2 Pieces", price: 599, oldPrice: 699 }
        ]
    },
    {
        id: 504,
        name: "Velora Angled Blush Brush",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 329,
        oldPrice: 429,
        rating: 4.7,
        reviews: 105,
        image: "assets/products/tool&nails/brush2.avif",
        badge: "Popular",
        description: "An angled brush designed for precise blush application and blending.",
        sizes: [
            { size: "1 Piece", price: 329, oldPrice: 429 },
            { size: "2 Pieces", price: 549, oldPrice: 649 }
        ]
    },
    {
        id: 505,
        name: "Velora Highlight Brush",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 279,
        oldPrice: 349,
        rating: 4.5,
        reviews: 83,
        image: "assets/products/tool&nails/brush3.webp",
        badge: "",
        description: "A tapered brush for precise highlighter application.",
        sizes: [
            { size: "1 Piece", price: 279, oldPrice: 349 },
            { size: "2 Pieces", price: 479, oldPrice: 579 }
        ]
    },
    {
        id: 508,
        name: "Velora Angled Brow Brush",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 199,
        oldPrice: 279,
        rating: 4.5,
        reviews: 74,
        image: "assets/products/tool&nails/brush4.avif",
        badge: "",
        description: "A fine angled brush for precise brow and eyeliner application.",
        sizes: [
            { size: "1 Piece", price: 199, oldPrice: 279 },
            { size: "2 Pieces", price: 349, oldPrice: 449 }
        ]
    },
    {
        id: 509,
        name: "Velora Detail Makeup Brush",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 229,
        oldPrice: 299,
        rating: 4.6,
        reviews: 69,
        image: "assets/products/tool&nails/brush5.webp",
        badge: "",
        description: "A small detail brush designed for precise makeup application.",
        sizes: [
            { size: "1 Piece", price: 229, oldPrice: 299 },
            { size: "2 Pieces", price: 399, oldPrice: 499 }
        ]
    },
    {
        id: 510,
        name: "Velora Professional Brush Collection",
        category: "Tools & Nails",
        subcategory: "Makeup Brushes",
        price: 999,
        oldPrice: 1299,
        rating: 4.9,
        reviews: 241,
        image: "assets/products/tool&nails/brush6.webp",
        badge: "Editor's Pick",
        description: "A premium multi-brush collection for complete face and eye makeup.",
        sizes: [
            { size: "12 Pieces", price: 999, oldPrice: 1299 },
            { size: "18 Pieces", price: 1399, oldPrice: 1699 }
        ]
    },
    // * Sponges & Blenders,
    {
        id: 513,
        name: "Velora Pink Beauty Blender",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 229,
        oldPrice: 299,
        rating: 4.7,
        reviews: 176,
        image: "assets/products/tool&nails/blender6.webp",
        badge: "Popular",
        description: "A soft pink beauty sponge for effortless blending.",
        sizes: [
            { size: "1 Piece", price: 229, oldPrice: 299 },
            { size: "2 Pieces", price: 399, oldPrice: 499 }
        ]
    },
    {
        id: 516,
        name: "Velora Blending Sponge Duo",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 349,
        oldPrice: 449,
        rating: 4.8,
        reviews: 154,
        image: "assets/products/tool&nails/blender2.webp",
        badge: "New",
        description: "A two-piece blending sponge set for complete complexion makeup.",
        sizes: [
            { size: "2 Pieces", price: 349, oldPrice: 449 },
            { size: "4 Pieces", price: 599, oldPrice: 749 }
        ]
    },
    {
        id: 517,
        name: "Velora Velvet Makeup Sponge",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 229,
        oldPrice: 299,
        rating: 4.5,
        reviews: 72,
        image: "assets/products/tool&nails/blender1.jpg",
        badge: "",
        description: "A soft velvet-textured sponge for a smooth makeup finish.",
        sizes: [
            { size: "1 Piece", price: 229, oldPrice: 299 },
            { size: "2 Pieces", price: 399, oldPrice: 499 }
        ]
    },
    {
        id: 518,
        name: "Velora Precision Mini Sponges",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 279,
        oldPrice: 349,
        rating: 4.7,
        reviews: 111,
        image: "assets/products/tool&nails/blender4.jfif",
        badge: "",
        description: "Small precision sponges designed for concealer and detailed application.",
        sizes: [
            { size: "4 Pieces", price: 279, oldPrice: 349 },
            { size: "6 Pieces", price: 399, oldPrice: 499 }
        ]
    },
    {
        id: 519,
        name: "Velora Makeup Sponge Trio",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 399,
        oldPrice: 499,
        rating: 4.8,
        reviews: 139,
        image: "assets/products/tool&nails/blender3.jfif",
        badge: "Trending",
        description: "A versatile trio of makeup sponges for different application techniques.",
        sizes: [
            { size: "3 Pieces", price: 399, oldPrice: 499 },
            { size: "5 Pieces", price: 579, oldPrice: 699 }
        ]
    },
    {
        id: 520,
        name: "Velora Luxe Blender Set",
        category: "Tools & Nails",
        subcategory: "Sponges & Blenders",
        price: 449,
        oldPrice: 579,
        rating: 4.9,
        reviews: 203,
        image: "assets/products/tool&nails/blender5.webp",
        badge: "Editor's Pick",
        description: "A premium collection of soft blending sponges for flawless makeup application.",
        sizes: [
            { size: "4 Pieces", price: 449, oldPrice: 579 },
            { size: "6 Pieces", price: 649, oldPrice: 799 }
        ]
    },
    // * Nail Lacquers
    {
        id: 525,
        name: "Velora Rose Gold Nail Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 279,
        oldPrice: 349,
        rating: 4.5,
        reviews: 87,
        image: "assets/products/tool&nails/nail4.webp",
        badge: "",
        description: "A shimmering rose gold lacquer for glamorous nail looks.",
        shades: [
            { name: "Rose Gold", color: "#C98F86" }
        ],
        sizes: [
            { size: "8 ml", price: 279, oldPrice: 349 },
            { size: "12 ml", price: 359, oldPrice: 449 }
        ]
    },
    {
        id: 526,
        name: "Velora Mauve Mist Nail Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 239,
        oldPrice: 299,
        rating: 4.6,
        reviews: 96,
        image: "assets/products/tool&nails/nail1.avif",
        badge: "",
        description: "A muted mauve shade that adds subtle sophistication to your nails.",
        shades: [
            { name: "Mauve Mist", color: "#A98291" }
        ],
        sizes: [
            { size: "8 ml", price: 239, oldPrice: 299 },
            { size: "12 ml", price: 319, oldPrice: 399 }
        ]
    },
    {
        id: 527,
        name: "Velora Coral Pop Nail Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 239,
        oldPrice: 299,
        rating: 4.5,
        reviews: 74,
        image: "assets/products/tool&nails/nail2.webp",
        badge: "",
        description: "A lively coral lacquer for a bright and playful manicure.",
        shades: [
            { name: "Coral Pop", color: "#E47665" }
        ],
        sizes: [
            { size: "8 ml", price: 239, oldPrice: 299 },
            { size: "12 ml", price: 319, oldPrice: 399 }
        ]
    },
    {
        id: 528,
        name: "Velora Chocolate Brown Nail Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 249,
        oldPrice: 299,
        rating: 4.7,
        reviews: 121,
        image: "assets/products/tool&nails/nail3.jpg",
        badge: "Trending",
        description: "A rich chocolate brown lacquer for modern neutral nail looks.",
        shades: [
            { name: "Chocolate Brown", color: "#6B4033" }
        ],
        sizes: [
            { size: "8 ml", price: 249, oldPrice: 299 },
            { size: "12 ml", price: 329, oldPrice: 399 }
        ]
    },
    {
        id: 529,
        name: "Velora French Tip White Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 229,
        oldPrice: 279,
        rating: 4.6,
        reviews: 89,
        image: "assets/products/tool&nails/nail5.avif",
        badge: "",
        description: "A clean white lacquer ideal for French manicure styles.",
        shades: [
            { name: "French Tip White", color: "#F7F4EF" }
        ],
        sizes: [
            { size: "8 ml", price: 229, oldPrice: 279 },
            { size: "12 ml", price: 309, oldPrice: 379 }
        ]
    },
    {
        id: 530,
        name: "Velora Midnight Plum Nail Lacquer",
        category: "Tools & Nails",
        subcategory: "Nail Lacquers",
        price: 269,
        oldPrice: 329,
        rating: 4.8,
        reviews: 156,
        image: "assets/products/tool&nails/nail6.webp",
        badge: "Editor's Pick",
        description: "A deep plum lacquer for dramatic and sophisticated nail looks.",
        shades: [
            { name: "Midnight Plum", color: "#542A4A" }
        ],
        sizes: [
            { size: "8 ml", price: 269, oldPrice: 329 },
            { size: "12 ml", price: 349, oldPrice: 429 }
        ]
    }
];

// ! Trending Products
const trending = [
    // * New Arrivals
    {
        id: 601,
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
        id: 602,
        name: "Velora Soft Glam Mini Palette",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 699,
        oldPrice: 849,
        rating: 4.8,
        reviews: 54,
        image: "assets/products/trending/Velora_Soft_Glam_Mini.jpg",
        badge: "New",
        description: "A compact palette featuring versatile soft glam shades."
    },
    {
        id: 605,
        name: "Velora Glow Balm Stick",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 599,
        oldPrice: 749,
        rating: 4.6,
        reviews: 31,
        image: "assets/products/trending/Velora_Glow_Balm_Stick.png",
        badge: "New",
        description: "A creamy glow stick for effortless highlighting on the go."
    },
    {
        id: 606,
        name: "Velora Berry Muse Palette",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 949,
        oldPrice: 1149,
        rating: 4.8,
        reviews: 47,
        image: "assets/products/trending/Velora_Bery_Muse_Pallette.jpg",
        badge: "New",
        description: "A new berry-inspired eyeshadow palette with rich modern shades."
    },
    {
        id: 608,
        name: "Velora Sculpt & Glow Duo",
        category: "Trending",
        subcategory: "New Arrivals",
        price: 899,
        oldPrice: 1099,
        rating: 4.8,
        reviews: 59,
        image: "assets/products/trending/Velora_Sculpt_Glow_Duo.png",
        badge: "New",
        description: "A convenient duo for sculpting and adding radiant dimension."
    },
    {
        id: 610,
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
    },
    // * Value Kits & Sets
    {
        id: 611,
        name: "Velora Everyday Makeup Kit",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1299,
        oldPrice: 1699,
        rating: 4.8,
        reviews: 215,
        image: "assets/products/trending/Velora_Everyday_Beauty_Makeup_Kit.jpg",
        badge: "Best Seller",
        description: "A curated collection of everyday makeup essentials at a great value."
    },
    {
        id: 612,
        name: "Velora Lip Lovers Set",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 899,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 167,
        image: "assets/products/trending/Velora_Lip_Lover_Set.jpg",
        badge: "Popular",
        description: "A selection of coordinated lip products for different occasions."
    },
    {
        id: 613,
        name: "Velora Eye Essentials Set",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 999,
        oldPrice: 1299,
        rating: 4.8,
        reviews: 148,
        image: "assets/products/trending/Velora_Eye_Essentials_Set.jpg",
        badge: "",
        description: "An eye makeup collection featuring essential products for complete eye looks."
    },
    {
        id: 614,
        name: "Velora Glow Face Set",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1099,
        oldPrice: 1399,
        rating: 4.8,
        reviews: 129,
        image: "assets/products/trending/Velora_Glow_Face_Set.jpg",
        badge: "New",
        description: "A face makeup set designed to create a naturally radiant complexion."
    },
    {
        id: 615,
        name: "Velora Blush & Glow Duo",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 749,
        oldPrice: 949,
        rating: 4.7,
        reviews: 103,
        image: "assets/products/trending/Velora_Blush_Glow_Duo.jpg",
        badge: "",
        description: "A blush and highlighter combination for a fresh glowing cheek look."
    },
    {
        id: 616,
        name: "Velora Starter Makeup Collection",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1599,
        oldPrice: 2099,
        rating: 4.9,
        reviews: 194,
        image: "assets/products/trending/Velora_Starter_Makeup.jpg",
        badge: "Best Seller",
        description: "A beginner-friendly collection containing essential makeup products."
    },
    {
        id: 617,
        name: "Velora Soft Glam Collection",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1399,
        oldPrice: 1799,
        rating: 4.8,
        reviews: 136,
        image: "assets/products/trending/Velora_Soft_Glam_Collection.jpg",
        badge: "",
        description: "A coordinated collection for creating beautiful soft glam makeup looks."
    },
    {
        id: 618,
        name: "Velora Weekend Beauty Set",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1199,
        oldPrice: 1499,
        rating: 4.6,
        reviews: 87,
        image: "assets/products/trending/Velora_Weekend_Beauty_Collection.jpg",
        badge: "",
        description: "A convenient makeup set for creating quick weekend looks."
    },
    {
        id: 620,
        name: "Velora Complete Beauty Box",
        category: "Trending",
        subcategory: "Value Kits & Sets",
        price: 1999,
        oldPrice: 2599,
        rating: 4.9,
        reviews: 243,
        image: "assets/products/trending/Velora_Complete_Beauty_Box.jpg",
        badge: "Editor's Pick",
        description: "A complete beauty collection featuring makeup essentials across multiple categories."
    },
    // * Clean / Vegan Beauty
    {
        id: 622,
        name: "Velora Vegan Rose Lipstick",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 549,
        oldPrice: 649,
        rating: 4.8,
        reviews: 94,
        image: "assets/products/trending/Velora_Vegan_Rose.jpg",
        badge: "Vegan",
        description: "A soft rose lipstick from the Velora vegan beauty collection."
    },
    {
        id: 623,
        name: "Velora Clean Beauty Blush",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 529,
        oldPrice: 649,
        rating: 4.6,
        reviews: 71,
        image: "assets/products/trending/Velora_Clean_Beauty_BLush_Collection.jpg",
        badge: "Vegan",
        description: "A buildable blush designed for a naturally flushed cheek appearance."
    },
    {
        id: 624,
        name: "Velora Vegan Glow Highlighter",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 649,
        oldPrice: 799,
        rating: 4.8,
        reviews: 82,
        image: "assets/products/trending/Velora_Vegan_Glow_Highlighter_Collection.jpg",
        badge: "Vegan",
        description: "A luminous vegan highlighter for a soft radiant finish."
    },
    {
        id: 625,
        name: "Velora Clean Nude Eyeshadow Palette",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 949,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 69,
        image: "assets/products/trending/Velora_Clean_Nude_Eyeshadow_Pallette.jpg",
        badge: "Vegan",
        description: "A neutral eyeshadow palette designed for versatile everyday eye looks."
    },
    {
        id: 626,
        name: "Velora Vegan Lip Gloss",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        reviews: 57,
        image: "assets/products/trending/Velora_Vegan_Lip_Gloss.jpg",
        badge: "Vegan",
        description: "A lightweight vegan lip gloss with a smooth high-shine finish."
    },
    {
        id: 627,
        name: "Velora Clean Brow Gel",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 429,
        oldPrice: 529,
        rating: 4.5,
        reviews: 43,
        image: "assets/products/trending/Velora_Clean_Brow_Gel.jpg",
        badge: "Vegan",
        description: "A lightweight brow gel for naturally groomed and defined brows."
    },
    {
        id: 628,
        name: "Velora Vegan Mascara",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 579,
        oldPrice: 699,
        rating: 4.8,
        reviews: 91,
        image: "assets/products/trending/Velora_Vegan_Mascara.jpg",
        badge: "Vegan",
        description: "A vegan mascara designed to define and enhance the appearance of lashes."
    },
    {
        id: 629,
        name: "Velora Clean Lip Oil",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 499,
        oldPrice: 599,
        rating: 4.7,
        reviews: 64,
        image: "assets/products/trending/Velora_Clean_Lip_Oil.jpg",
        badge: "Vegan",
        description: "A lightweight lip oil that adds a glossy finish to your makeup look."
    },
    {
        id: 630,
        name: "Velora Vegan Beauty Essentials Set",
        category: "Trending",
        subcategory: "Clean/Vegan Beauty",
        price: 1499,
        oldPrice: 1899,
        rating: 4.9,
        reviews: 112,
        image: "assets/products/trending/Velora_Vegan_Beauty_Essential_Set.jpg",
        badge: "Editor's Pick",
        description: "A curated set featuring several essentials from the Velora vegan beauty range."
    }
];