//business logic
function Pizza(name, toppings, dimensions, quantity) {
  this.name= name;
  this.toppings= toppings;
  this.dimensions= dimensions;
  this.quantity= quantity;


}

Pizza.prototype.price = function() {
var pizzaPrice=0;

  if (this.dimensions === "small"){
    (pizzaPrice + 7);
  }else if (this.dimensions === "medium"){
    (pizzaPrice + 12);
  }else if (this.dimensions === "large"){
    (pizzaPrice + 15);
  }
var totalPrice= this.pizzaPrice*this.quantity;

  };
// user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var selectedToppings1= $("select#new-toppings1").val();
    var selectedToppings2= $("select#new-toppings2").val();
    var selectedDimensions= $("select#new-dimensions").val();
    var inputtedQuantity= parseInt($("input#new-quantity").val());
    var newPrice= new Pizza(inputtedName,selectedDimensions,inputtedQuantity);
    newPrice.price();newPrice.pizzaPrize;

$(".info").append("<li><span class='prices'>" + newPrice.price() + "</span></li>");


    // $(".info").last().click(function() {
    $("#pizza").show();
    $(".name").text(newPrice.name);
    $(".dimensions").text(newPrice.dimensions);
    $(".quantity").text(newPrice.quantity);
    $(".individualPrice").text(newPrice.pizzaPrice);
    $(".totalPrice").text(newPrice.price());



  // });
});
});
