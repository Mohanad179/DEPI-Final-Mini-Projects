// ===== Elements =====
const cartBtn = document.getElementById("cartBtn"); // nav icon
const cartCount = document.getElementById("cartCount"); 
const cartDrawer = document.getElementById("cartDrawer"); // the UI
const overlay = document.getElementById("overlay"); // the overlay that blurs the home content
const closeCart = document.getElementById("closeCart"); // close btn
const cartItems = document.getElementById("cartItems"); // where we store products
const cartTotal = document.getElementById("cartTotal"); // total price , initial = 0

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleCart(open) {
  cartDrawer.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
}

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleCart(true);
});
closeCart.addEventListener("click", () => toggleCart(false));
overlay.addEventListener("click", () => toggleCart(false));

function update() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

async function addToCart(id) {
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    const products = await getProducts();
    const p = products.find((product) => product.id === id);
    cart.push({ id: p.id, title: p.title, price: p.price, image: p.image, qty: 1 });
  }
  update();
}

function changeQty(id, amount) {
  const item = cart.find((i) => i.id === id);
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  update();
}

function removeItem(id) {
  cart = cart.filter((i) => i.id !== id);
  update();
}

function renderCart() {
  cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0.00";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (i) => `
      <div class="cart-item">
        <img src="${i.image}" alt="${i.title}" width="60">
        <div>
          <h4>${i.title}</h4>
          <p>$${i.price.toFixed(2)}</p>
          <button data-action="dec" data-id="${i.id}">−</button>
          <span>${i.qty}</span>
          <button data-action="inc" data-id="${i.id}">+</button>
          <button data-action="remove" data-id="${i.id}" class="btn bg-transparent shadow-none border-none p-2">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>`
    )
    .join("");

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  cartTotal.textContent = total.toFixed(2);
}

// (Event Delegation), We can't listen on the event directly because it is created by JS.
cartItems.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;

  const id = Number(btn.dataset.id);
  if (btn.dataset.action === "inc") changeQty(id, 1);
  if (btn.dataset.action === "dec") changeQty(id, -1);
  if (btn.dataset.action === "remove") removeItem(id);
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;

  addToCart(Number(btn.dataset.id));
  toggleCart(true);
});

renderCart();