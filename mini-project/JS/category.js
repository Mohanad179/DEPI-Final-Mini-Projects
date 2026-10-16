
const grid = document.getElementById("grid");
const pageTitle = document.getElementById("pageTitle");

const params = new URLSearchParams(location.search);
const category = (params.get("category") || "all").toLowerCase();

const categoryMap = {
  men: "men's clothing",
  women: "women's clothing",
  accessories: "jewelery",
  electronics: "electronics",
};

const titles = {
  all: "All Products",
  men: "Men",
  women: "Women",
  accessories: "Accessories",
  electronics: "Electronics"
};

if (pageTitle) {
  pageTitle.textContent = titles[category] || "All Products";
}
document.title = `LUXE | ${titles[category] || "All Products"}`;

let products = [];
let priceRange = { min: 0, max: Infinity };

function renderGrid() {
  if (!grid) return;

  const list = products.filter((p) =>
    (category === "all" || p.category === categoryMap[category]) &&
    p.price >= priceRange.min &&
    p.price < priceRange.max
  );

  grid.innerHTML = list.length
    ? list.map(productCard).join("")
    : "<p>No products found.</p>";
}

if (grid) {
  getProducts()
    .then((data) => {
      products = data;
      renderGrid();
    })
    .catch(() => {
      grid.innerHTML = "<p>Couldn't load products.</p>";
    });
}

const priceBoxes = document.querySelectorAll('#priceFilter input');
const allBox = document.getElementById('price-all');

priceBoxes.forEach((box) => {
  box.addEventListener('change', () => {
    priceBoxes.forEach((b) => {
      if (b !== box) b.checked = false;
    });

    if (!box.checked) {
      allBox.checked = true;
      priceRange = { min: 0, max: Infinity };
    } else {
      priceRange = {
        min: Number(box.dataset.min),
        max: Number(box.dataset.max),
      };
    }

    renderGrid();
  });
});