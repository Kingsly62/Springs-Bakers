

function myPizza(mySize, myCrust, myCheese, myQuantity) {
    this.mySize = mySize;
    this.myCrust = myCrust;
    this.myCheese = myCheese;
    this.myQuantity = myQuantity;
  }
  
   //let cart = new myPizza(mySize(), myCrust(), myCheese(), getQuantity());
  
  function mySize() {
    var size = document.getElementById("Size").value;
    return parseInt(size);
  }
  
  function myCrust() {
    var crust = document.getElementById("Crust").value;
    return parseInt(crust);
  }
  
  function myCheese() {
    var cheese = document.getElementById("Cheese").value;
    return parseInt(cheese);

  }
  
  function myQuantity() {
    var number = document.getElementById("quantity").value;
    return parseInt(number);
  }
  
  function shoppingCart() {
    var totals = (mySize() + myCrust() + myCheese()) * myQuantity();
    alert("You have successfully ordered : " + myQuantity() + " pizzas, adding up " + totals+"."  +  "Kindly contact the number to be delivered your pizza to"  +  "Contact:076761290");
  }
  