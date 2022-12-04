const itemsAdded = document.getElementById("cart-items");
const items = [];
let index = 0;

function addcart(item) {
  let itemtxt = item.innerHTML;

  console.log(itemtxt);
  // Add items to cart
  if (itemtxt == "Add to cart") {
    items.push(item.name);
    index++;
    item.innerHTML = "Added";
    item.style.background = "green";
  }
  
  // Check if item is already added
  else if (itemtxt == "Added") {
    alert("Item already added to cart");
  }
  // Display items in cart
  renderitems(items);
}

function renderitems() {
  // Display all items in cart modal
  out = "";
  for (let i = 0; i < items.length; i++) {
    out += `<li>${items[i]}</li>`;
  }
  document.getElementById("cart-items").innerHTML = out;
}
