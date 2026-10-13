// Map on the products array from products.js and display only 4 featured products in the home page
const featured = document.getElementById("featured");
if (featured) {
  featured.innerHTML = products.slice(0, 4).map(productCard).join("");
}