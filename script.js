let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

alert("Product added to cart!");

}

function loadCart(){

let list = document.getElementById("cartItems");
let total = 0;

list.innerHTML="";

cart.forEach(item => {

let li = document.createElement("li");

li.innerText = item.name + " - $" + item.price;

list.appendChild(li);

total += item.price;

});

document.getElementById("total").innerText = total;

}

function checkout(){

if(cart.length == 0){

alert("Cart is empty");

return;

}

alert("Order placed! (Payment system not added yet)");

cart=[];

localStorage.removeItem("cart");

loadCart();

}