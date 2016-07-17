//business logic
function Pizza(name,toppings,size, quantity,price) {
  this.name= name;
  this.toppings= toppings;
  this.size= size;
  this.quantity= quantity;
  this.price= price;
}

Pizza.prototype.price = function() {
  var result;
  if (this.size==="small"){
    result= this.price*2;
  }else if (this.size==="medium"){
    result = this.price*3;
  }else if (this.size==="large"){
    result= this.price*4;
  };

  return result* this.quantity;
  };
// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var selectedToppings1= $("select#new-toppings1").val();
    var selectedToppings2= $("select#newtoppings2").val();
    var selectedSize= $("select#size").val();
    var inputtedQuantity= $("input#quantity").val();
    var newPrice= new Pizza(inputtedName,selectedToppings1, selectedToppings2,selectedSize,inputtedQuantity);


    $("#pizza").show();
    $(".name").text(newPrice.name);
    $(".quantity").text(newPrice.quantity);
    $(".price").text(newPrice.price());

});

  });
