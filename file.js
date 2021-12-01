function shoppingCart(crust,toppings,size) {
    this.size = size;
    this.toppings=toppings;
    this.crust= crust;
    this.crustCost=0;
    this.toppingsCost=0;
    this.sizeCost=0;
    }
    
     itemSize = document.getElementById('#size').value();

    let myCart = new shoppingCart("Crispy","Onions", itemSize);
    
    if(myCart.crust=="Crispy"){
        if(myCart.size=="large"){
          myCart.crustCost=1000;
          alert('make your payment');
        }
        else if(myCart.size=="medium"){
            myCart.crustCost=700;
            alert("make your payment")
        }
    }else if(myCart.size=="small"){
        myCart.crustCost=500;
        alert("Make your payment")
    }

