const productsListKey = "shopapp_products";

const setUpLocalStorage = () => {
  const retrievedProducts = JSON.parse(localStorage.getItem('shopapp_products'));
  if(retrievedProducts === null) {
    localStorage.setItem(productsListKey, "[]");
  }
}

setUpLocalStorage();
