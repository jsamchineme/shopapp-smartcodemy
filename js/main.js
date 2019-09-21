const products = JSON.parse(localStorage.getItem(productsListKey));
const productsListContainer = document.querySelector('.product-list');

function initialise() {
  renderProducts();
}

initialise();

function renderProducts() {
  let productListHTML = "";

  products.forEach(product => {
    const eachProductHTML = `
      <div class="column item">
        <div class="featured-image">
          <img src="img/${product.image}" alt="">
        </div>
        <div class="product-description">
          ${product.description}
        </div>
        <div class="details">
          <span class='label'>Price: <span>${product.price}</span></span>
          <span class="label">Quantity Available: <span>${product.quantity}</span></span>
        </div>
        <div class="actions">
          <a class="button" href="product-view.html?id=${product.id}">View</a>
          <button class="button">Edit</button>
          <button class="button">Delete</button>
        </div>
      </div>
    `;
    productListHTML += eachProductHTML;
  });
  productsListContainer.innerHTML = productListHTML;
}

