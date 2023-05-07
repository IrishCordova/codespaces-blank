function calculate() {
  var quantity = parseInt(document.getElementById("quantity").value);
  var shipping = parseFloat(document.getElementById("shipping").value);
  var items = quantity * 1597;
  var totalBeforeTax = quantity * 1597 + shipping * 100;
  var tax = Math.round(totalBeforeTax * 0.1);
  var orderTotal = totalBeforeTax + tax;
        document.getElementById("items").innerHTML = "$" + (items / 100).toFixed(2);
  document.getElementById("totalBeforeTax").innerHTML = "$" + (totalBeforeTax / 100).toFixed(2);
  document.getElementById("tax").innerHTML = "$" + (tax / 100).toFixed(2);
  document.getElementById("orderTotal").innerHTML = "$" + (orderTotal / 100).toFixed(2);
}

function increment() {
  var quantity = parseInt(document.getElementById("quantity").value);
  document.getElementById("quantity").value = quantity + 1;
}

function decrement() {
  var quantity = parseInt(document.getElementById("quantity").value);
  if (quantity > 0) {
    document.getElementById("quantity").value = quantity - 1;
  }
}