//business logic
function Pizza(name, toppings1,toppings2, dimensions, quantity) {
  this.name= name;
  this.toppings1= toppings1;
  this.toppings2= toppings2;
  this.dimensions= dimensions;
  this.quantity= quantity;


}

Pizza.prototype.price = function() {
var pizzaPrice=0;

  if (this.dimensions === "small"){
    pizzaPrice += 7;
  } else if (this.dimensions === "medium"){
    pizzaPrice += 12;
  } else if (this.dimensions === "large"){
    pizzaPrice += 15;
  }


  };
  var totalPrice= this.pizzaPrice * this.quantity;
// user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var selectedToppings1= $("select#new-toppings1").val();
    var selectedToppings2= $("select#new-toppings2").val();
    var selectedDimensions= $("select#new-dimensions").val();
    var inputtedQuantity= parseInt($("input#new-quantity").val());
    var newPizza= new Pizza(inputtedName,selectedToppings1,selectedToppings2,selectedDimensions,inputtedQuantity);
    console.log(newPizza);
    newPizza.price();newPizza.pizzaPrice;

$(".info").append("<li><span class='prices'>" + newPizza.price() + "</span></li>");


    // $(".info").last().click(function() {
    $("#pizza").show();
    $(".name").text(newPizza.name);
    $(".dimensions").text(newPizza.dimensions);
    $(".quantity").text(newPizza.quantity);
    $(".individualPrice").text(newPizza.pizzaPrice);
    $(".totalPrice").text(newPizza.totalPrice);
console.log(newPizza.price());


  // });
});
});
