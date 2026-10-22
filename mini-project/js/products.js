const API_URL = "https://fakestoreapi.com/products";
// API Response stored locally as a fallback if the api does not respond (Stored in data/products.json)
const LOCAL_URL = "data/products.json";

async function fetchJson(url, ms = 4000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

async function getProducts() {
  try {
    return await fetchJson(API_URL);
  } catch (err) {
    console.warn("API failed, using local data:", err);
    return await fetchJson(LOCAL_URL);
  }
}

// for the yellow rating stars
const stars = function(rate){
  const n = Math.round(rate);
  return "★".repeat(n) + "☆".repeat(5 - n);
};

const productCard = (p) => `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100 rounded-4 position-relative" id='card'>

      <img src="${p.image}" alt="${p.title}"
           class="card-img-top rounded-0 object-fit-contain p-3"
           style="aspect-ratio: 1 / 1" />

      <div class="card-body d-flex flex-column">
        <h3 class="card-title fs-6 fw-semibold">${p.title}</h3>
        <p class="text-secondary small mb-1 text-capitalize">${p.category}</p>
        <p class="small mb-2">
          <span class="text-warning">${stars(p.rating?.rate)}</span>
          <span class="text-secondary">(${p.rating?.rate ?? "-"})</span>
        </p>
        <p class="fw-semibold mb-3">$${Number(p.price).toFixed(2)}</p>
        <button class="btn btn-dark rounded-0 w-100 mt-auto add-btn rounded-2" data-id="${p.id}">
            Add to Cart
        </button>
      </div>
    </div>
  </div>`;