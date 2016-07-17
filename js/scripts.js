//business logic
function Pizza(name,toppings,size, quantity) {
  this.name= name;
  this.toppings= toppings;
  this.size= size;
  this.quantity= quantity;

}

Pizza.prototype.price = function() {
  var pizzaPrice;
  if (this.size === "small"){
    pizzaprice * 2;
  }else if (this.size === "medium"){
    pizzaPrice * 3;
  }else if (this.size === "large"){
    pizzaPrice * 4;
  };

  return (pizzaPrice * this.quantity);
  };
// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var selectedToppings1= $("select#new-toppings1").val();
    var selectedToppings2= $("select#new-toppings2").val();
    var selectedSize= $("select#size").val();
    var inputtedQuantity= parseInt($("input#quantity").val());
    var newPrice= new Pizza(inputtedName,selectedToppings1, selectedToppings2,selectedSize,inputtedQuantity);




    $(".prices").last().click(function() {
    $("#pizza").show();
    $(".name").text(newPrice.name);
    $(".quantity").text(newPrice.quantity);
    $(".price").text(newPrice.price());

});

  });
});
