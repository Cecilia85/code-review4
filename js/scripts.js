//business logic
function Pizza(name, toppings, dimensions, quantity) {
  this.name= name,
  this.toppings= toppings,
  this.dimensions= dimensions,
  this.quantity= quantity


}

Pizza.prototype.price = function() {
var pizzaPrice=0;

  if (this.dimensions === "small"){
    (this.pizzaPrice + 7)* this.quantity;
  }else if (this.dimensions === "medium"){
    (this.pizzaPrice + 12)* this.quantity;
  }else if (this.dimensions === "large"){
    (this.pizzaPrice + 15)* this.quantity;
  }


  };
// user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var selectedToppings1= $("select#new-toppings1").val();
    var selectedToppings2= $("select#new-toppings2").val();
    var selectedDimensions= $("select#dimensions").val();
    var inputtedQuantity= parseInt($("input#quantity").val());
    var newPrice= new Pizza(inputtedName,selectedToppings1, selectedToppings2,selectedDimensions,inputtedQuantity);
    newPrice.price();

$(".info").append("<li><span class='prices'>" + newPrice.price() + "</span></li>");


    // $(".info").last().click(function() {
    $("#pizza").show();
    $(".name").text(newPrice.name);
    $(".quantity").text(newPrice.quantity);
    $(".dimensions").text(newPrice.dimensions);
    $(".individualPrice").text(newPrice.pizzaPrice);
    $(".price").text(newPrice.price());



  // });
});
});
