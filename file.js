function shoppingCart(myCrust,myToppings,mySize,myQuantity) {
    this.mySize = mySize;
    this.myToppings=myToppings;
    this.myCrust= myCrust;
    this.myQuantity = myQuantity;


    let myCart = new shoppingCart(myCrust(),myToppings(),mySize(),myQuantity())

     function myCrust(){
         document.getElementById('crusts').value;
         return parseInt(size)
     }
     
     function myToppings(){
         document.getElementById('toppings').value;
         return parseInt(topping)
     }

     function mySize(){
         document.getElementById('sizes').value;
         return parseInt(size)
     }

     function myQuantity(){
         document.getElementById('quantity').value;
         return parseInt(number)
     }
     

     function totalShopping(e) {
      e.preventDefault();
        let totals = (mySize() + myCrust() + myToppings()) * myQuantity();
        alert("You ordered : " + myQuantity() + " pizza, amounting to " + totals);
      }
    };