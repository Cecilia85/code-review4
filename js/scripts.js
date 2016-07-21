//business logic
function Pizza(name, toppings, dimensions, quantity, totalPrice) {
  this.name= name;
  this.toppings= toppings
  this.dimensions= dimensions;
  this.quantity= quantity;
  this.totalPrice= totalPrice;
}

Pizza.prototype.price = function() {
var pizzaPrice = 0;

  if (this.dimensions === "small" ){
    pizzaPrice += 7 ;
  } else if (this.dimensions === "medium"){
    pizzaPrice += 12 ;
  } else if (this.dimensions === "large" ){
    pizzaPrice += 15 ;
  }

  return totalPrice= ("$"+ pizzaPrice * this.quantity);

  };


// user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var checkedToppings= [];
    $(":checkbox:checked").each(function(topping){
      checkedToppings[topping] = $(this).val();
    });
    var selectedDimensions= $("select#new-dimensions").val();
    var inputtedQuantity= parseInt($("input#new-quantity").val());
    var newPizza= new Pizza(inputtedName,checkedToppings ,selectedDimensions,inputtedQuantity);
    newPizza.totalPrice= newPizza.price();


    $("#pizza").show();
    $(".name").text(newPizza.name);
    $(".toppings").text(newPizza.toppings);
    $(".dimensions").text(newPizza.dimensions);
    $(".quantity").text(newPizza.quantity);
    $(".totalPrice").text(newPizza.totalPrice);

});
});
