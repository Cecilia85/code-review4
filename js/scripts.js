//business logic
function Pizza(name,toppings,size, quantity,price) {
  this.name= name;
  this.toppings= toppings;
  this.size= size;
  this.quantity= quantity;
  this.price= price;
}

Pizza.prototype.Info = function() {
  return this.name;
}
Pizza.prototype.price = function() {
  if (this.size==="small"){
    return this.price*2;
  }else if (this.size==="medium"){
    return this.price*3;
  }else if (this.size==="large"){
    return this.price*4;
  };
  var total= this.size* this.quantity;
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
    var newPrice= new Pizza(inputtedName,selectedToppings1, selectedtoppings2,selectedSize,inputtedQuantity);


    $("#pizza").show();
    $(".name").text(newPrice.Info());
    $(".quantity").text(newPrice.quantity);
    $(".price").text(newPrice.price());

});

  });
