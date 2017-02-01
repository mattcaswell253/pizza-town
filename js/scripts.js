$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();
    var selectedToppings = [];
    var selectedSize = $("select#size").val();

    $("input[name=toppings]:checked").each(function() {
       selectedToppings.push($(this).val());
    });

    var MyPizza = new Pizza(selectedToppings, selectedSize);

$("span#total").html("$" + MyPizza.price() );
  });
})

function Pizza(toppings, size) {
this.toppings = toppings;
this.size = size;
}

Pizza.prototype.price = function() {
  var toppingPrice = .50;
  var sizePriceStep = 2.00;
  var price = 0.00;

  price += this.toppings.length * toppingPrice;
  price += this.size * sizePriceStep;

  return price;
}
