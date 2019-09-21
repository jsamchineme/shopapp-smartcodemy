const form = document.getElementById("product-form");

form.addEventListener("submit", saveNewProduct);

function saveNewProduct(event) {
  event.preventDefault();

  const name = form.elements.name.value;
  const price = form.elements.price.value;
  const quantity = form.elements.quantity.value;
  const description = form.elements.description.value;
  const image = form.elements.image.value;

  const products = JSON.parse(localStorage.getItem(productsListKey));
  let id;
  if(products.length === 0) {
    id = 1;
  } else {
    const lastProduct = products[products.length - 1];
    id = lastProduct.id + 1; 
  }

  const newProduct = { id, name, price, quantity, description, image };
  products.push(newProduct);

  localStorage.setItem(productsListKey, JSON.stringify(products));

  location.href = "product-list.html";
}