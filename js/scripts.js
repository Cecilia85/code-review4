//business logic
function Pizza(name,toppings,dimensions, quantity) {
  this.name= name;
  this.toppings= toppings;
  this.dimensions= size;
  this.quantity= quantity;

}

Pizza.prototype.price = function() {
  this.pizzaPrice= pizzaPrice;
  if (this.dimensions === "small"){
    pizzaprice * 2;
  }else if (this.dimensions === "medium"){
    pizzaPrice * 3;
  }else if (this.dimensions === "large"){
    pizzaPrice * 4;
  };

  return (this.pizzaPrice * this.quantity);
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




    // $(".prices").last().click(function() {
    $("#pizza").show();
    $(".name").text(newPrice.name);
    $(".toppings").text(newPrice.toppings);
    $(".quantity").text(newPrice.quantity);
    $(".price").text(newPrice.price());

});

  });
});
