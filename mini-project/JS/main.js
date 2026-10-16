
const featured = document.getElementById('featured');
const searchInput = document.querySelector('input');

function renderList(container, list) {
    container.innerHTML = list.length
        ? list.map(productCard).join("")
        : "<p>No products found.</p>";
}

getProducts()
    .then((data) => {
        products = data;

        if (featured) {
            renderList(featured, products.slice(0, 4));
        }
    })
    .catch(() => {
        if (featured) {
            featured.innerHTML = "<p>Couldn't load products.</p>";
        }
    });

if (searchInput) {
    searchInput.addEventListener('input', returnProduct);
}

function returnProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = searchValue === ""
        ? products
        : products.filter((product) =>
            product.title.toLowerCase().includes(searchValue)
          );

    if (featured) {
        const list = searchValue === "" ? products.slice(0, 4) : filteredProducts;
        renderList(featured, list);
    }

    if (typeof grid !== "undefined" && grid) {
        const base = category === "all"
            ? filteredProducts
            : filteredProducts.filter((p) => p.category === categoryMap[category]);

        renderList(grid, base);
    }
}