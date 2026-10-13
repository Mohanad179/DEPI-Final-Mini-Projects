// products.js — shared data. Only the team leader edits this file's structure.
// Categories: "Men" | "Women" | "Shoes" | "Accessories"
// Images are placeholders; replace later with local files, e.g. "images/1.jpg"

const products = [
  // ---- Men ----
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 15,
    category: "Men",
    rating: 4.5,
    image: "https://placehold.co/300x400?text=White+T-Shirt"
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 40,
    category: "Men",
    rating: 4.2,
    image: "https://placehold.co/300x400?text=Slim+Jeans"
  },
  {
    id: 3,
    name: "Pullover Hoodie",
    price: 35,
    category: "Men",
    rating: 4.7,
    image: "https://placehold.co/300x400?text=Hoodie"
  },
  {
    id: 4,
    name: "Polo Shirt",
    price: 25,
    category: "Men",
    rating: 4.0,
    image: "https://placehold.co/300x400?text=Polo+Shirt"
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 55,
    category: "Men",
    rating: 4.6,
    image: "https://placehold.co/300x400?text=Denim+Jacket"
  },
  {
    id: 6,
    name: "Cargo Pants",
    price: 38,
    category: "Men",
    rating: 3.9,
    image: "https://placehold.co/300x400?text=Cargo+Pants"
  },
  {
    id: 7,
    name: "Formal Shirt",
    price: 30,
    category: "Men",
    rating: 4.3,
    image: "https://placehold.co/300x400?text=Formal+Shirt"
  },
  {
    id: 8,
    name: "Sweatpants",
    price: 28,
    category: "Men",
    rating: 4.4,
    image: "https://placehold.co/300x400?text=Sweatpants"
  },

  // ---- Women ----
  {
    id: 9,
    name: "Floral Summer Dress",
    price: 45,
    category: "Women",
    rating: 4.8,
    image: "https://placehold.co/300x400?text=Summer+Dress"
  },
  {
    id: 10,
    name: "High-Waist Jeans",
    price: 42,
    category: "Women",
    rating: 4.5,
    image: "https://placehold.co/300x400?text=High-Waist+Jeans"
  },
  {
    id: 11,
    name: "Oversized Sweater",
    price: 38,
    category: "Women",
    rating: 4.6,
    image: "https://placehold.co/300x400?text=Sweater"
  },
  {
    id: 12,
    name: "Satin Blouse",
    price: 28,
    category: "Women",
    rating: 4.1,
    image: "https://placehold.co/300x400?text=Blouse"
  },
  {
    id: 13,
    name: "Leather Jacket",
    price: 80,
    category: "Women",
    rating: 4.7,
    image: "https://placehold.co/300x400?text=Leather+Jacket"
  },
  {
    id: 14,
    name: "Pleated Skirt",
    price: 32,
    category: "Women",
    rating: 4.0,
    image: "https://placehold.co/300x400?text=Pleated+Skirt"
  },
  {
    id: 15,
    name: "Cropped Hoodie",
    price: 30,
    category: "Women",
    rating: 4.3,
    image: "https://placehold.co/300x400?text=Cropped+Hoodie"
  },
  {
    id: 16,
    name: "Maxi Dress",
    price: 50,
    category: "Women",
    rating: 4.4,
    image: "https://placehold.co/300x400?text=Maxi+Dress"
  },

  // ---- Shoes ----
  {
    id: 17,
    name: "White Sneakers",
    price: 60,
    category: "Shoes",
    rating: 4.6,
    image: "https://placehold.co/300x400?text=White+Sneakers"
  },
  {
    id: 18,
    name: "Running Shoes",
    price: 70,
    category: "Shoes",
    rating: 4.5,
    image: "https://placehold.co/300x400?text=Running+Shoes"
  },
  {
    id: 19,
    name: "Leather Boots",
    price: 90,
    category: "Shoes",
    rating: 4.7,
    image: "https://placehold.co/300x400?text=Leather+Boots"
  },
  {
    id: 20,
    name: "Classic Loafers",
    price: 65,
    category: "Shoes",
    rating: 4.2,
    image: "https://placehold.co/300x400?text=Loafers"
  },
  {
    id: 21,
    name: "Summer Sandals",
    price: 25,
    category: "Shoes",
    rating: 3.8,
    image: "https://placehold.co/300x400?text=Sandals"
  },
  {
    id: 22,
    name: "High-Top Sneakers",
    price: 75,
    category: "Shoes",
    rating: 4.4,
    image: "https://placehold.co/300x400?text=High-Top+Sneakers"
  },
  {
    id: 23,
    name: "Canvas Slip-Ons",
    price: 35,
    category: "Shoes",
    rating: 4.1,
    image: "https://placehold.co/300x400?text=Slip-Ons"
  },

  // ---- Accessories ----
  {
    id: 24,
    name: "Baseball Cap",
    price: 12,
    category: "Accessories",
    rating: 4.2,
    image: "https://placehold.co/300x400?text=Baseball+Cap"
  },
  {
    id: 25,
    name: "Leather Belt",
    price: 20,
    category: "Accessories",
    rating: 4.3,
    image: "https://placehold.co/300x400?text=Leather+Belt"
  },
  {
    id: 26,
    name: "Sunglasses",
    price: 22,
    category: "Accessories",
    rating: 4.0,
    image: "https://placehold.co/300x400?text=Sunglasses"
  },
  {
    id: 27,
    name: "Wool Scarf",
    price: 18,
    category: "Accessories",
    rating: 4.5,
    image: "https://placehold.co/300x400?text=Wool+Scarf"
  },
  {
    id: 28,
    name: "Everyday Backpack",
    price: 45,
    category: "Accessories",
    rating: 4.6,
    image: "https://placehold.co/300x400?text=Backpack"
  },
  {
    id: 29,
    name: "Wrist Watch",
    price: 85,
    category: "Accessories",
    rating: 4.7,
    image: "https://placehold.co/300x400?text=Wrist+Watch"
  },
  {
    id: 30,
    name: "Knit Beanie",
    price: 10,
    category: "Accessories",
    rating: 3.9,
    image: "https://placehold.co/300x400?text=Beanie"
  }
];

// products card UI code in all pages, this will be mapped in main.js to display products
// 1 product on mobile, 2 products on medium screens, 3 on big tablets, 4 from laptops and bigger
const productCard = function(p){
  return (
    `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100 rounded-0 position-relative">
      <button class="btn position-absolute top-0 end-0 m-2 p-0 lh-1 text-dark"
              aria-label="Add to wishlist">
        <i class="bi bi-heart"></i>
      </button>
      <img src="${p.image}" alt="${p.name}"
           class="card-img-top rounded-0 object-fit-cover"
           style="aspect-ratio: 1 / 1" />
      <div class="card-body d-flex flex-column">
        <h3 class="card-title fs-6 fw-semibold">${p.name}</h3>
        <p class="text-secondary small mb-1">${p.category}</p>
        <p class="small mb-2">
          <span class="text-warning">★★★★★</span>
          <span class="text-secondary">(${p.rating})</span>
        </p>
        <p class="fw-semibold mb-3">$${p.price.toFixed(2)}</p>
        <button class="btn btn-dark rounded-0 w-100 mt-auto add-btn"
                data-id="${p.id}">Add to Cart</button>
      </div>
    </div>
  </div>`
)};