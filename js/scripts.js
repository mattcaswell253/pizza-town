function Pizza(toppings, size) {
this.toppings = toppings;
this.size = size;
}

Pizza.prototype.price = function() {
  var toppingPrice = 1.50;
  var sizPriceStep = 2.00;
  var price = 0;

  price += this.toppings.length * toppingPrice;
  price += this.size * sizePriceStep;

  return price;
}
