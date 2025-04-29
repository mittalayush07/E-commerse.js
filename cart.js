import { createProductCart } from "./createProductCart.js";
import { findProductInCart } from "./utils/findProductInCart.js";

let cartContainer = document.getElementById("carts");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartContainer.addEventListener("click", (event)=>{
    cart = cart.filter(({_id})=> _id!==event.target.dataset.id);
    cartContainer.innerHTML = "";
    localStorage.setItem("cart", JSON.stringify(cart));
    createProductCart(cart, cartContainer, findProductInCart, "cart");
    
})
createProductCart(cart, cartContainer, findProductInCart, "cart"); 