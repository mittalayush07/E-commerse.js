import { products } from "./db/product.js";
import { createProductCart } from "./createProductCart.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const productContainer = document.getElementById("products");
let cart1 = JSON.parse(localStorage.getItem("cart")) || [];

// for(let product of products){
//     const cardContainer = document.createElement("div");
//     cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column",  "relative", "shadow");
//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("cart-image-container");

//     const image = document.createElement("img");
//     image.classList.add("card-image");
//     image.setAttribute("src", product.img);
//     image.setAttribute("alt", product.name); 
//     imageContainer.appendChild(image);
//     cardContainer.appendChild(imageContainer);

//     const cardDetailsContainer = document.createElement("div");
//     cardDetailsContainer.classList.add("card-details");

//     const brandContainer = document.createElement("div");
//     brandContainer.classList.add("card-title");
//     brandContainer.innerText=product.brand;
//     cardDetailsContainer.appendChild(brandContainer);

//     const descriptionContainer = document.createElement("div");
//     descriptionContainer.classList.add("card-description");

//     const name = document.createElement("p");
//     name.classList.add("card-des");
//     name.innerText = product.name;
//     descriptionContainer.appendChild(name);
    
//     const priceContainer = document.createElement("p");
//     priceContainer.classList.add("card-price", "d-flex", "align-end", "gap-sm");
//     priceContainer.innerText= `Rs. ${product.newPrice}`;
//     const oldprice = document.createElement("span");
//     oldprice.classList.add("price-strike-through");
//     oldprice.innerText = `Rs. ${product.oldPrice}`;
//     priceContainer.appendChild(oldprice);
//     const discounts = document.createElement("span");
//     discounts.classList.add("discount");
//     discounts.innerText = `${product.discount} %OFF`;
//     priceContainer.appendChild(discounts);
//     descriptionContainer.appendChild(priceContainer);

//     const ratingContainer = document.createElement("p");
//     ratingContainer.classList.add("d-flex", "align-center");
//     const starRating = document.createElement("span");
//     starRating.innerText=product.rating;
//     ratingContainer.appendChild(starRating);
//     const star = document.createElement("span");
//     star.classList.add("material-icons-outlined", "star");
//     star.innerText = "star";
//     ratingContainer.appendChild(star);
//     descriptionContainer.appendChild(ratingContainer);

//     cardDetailsContainer.appendChild(descriptionContainer);

//     const ctaButton = document.createElement("div");
//     ctaButton.classList.add("cta-btn");
//     const cartButton = document.createElement("button");
//     cartButton.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center",  "justify-center", "gap", "cursor", "btn-margin");

//     cartButton.setAttribute("data-id", product._id);
//     const cart = document.createElement("span");
//     cart.classList.add("material-icons-outlined", "star");
//     cart.innerText = "shopping_cart";
//     cartButton.appendChild(cart);

//     const buttonText = document.createElement("span");
//     buttonText.innerText = "Add To Cart";
//     cartButton.appendChild(buttonText);

//     ctaButton.appendChild(cartButton);
//     cardDetailsContainer.appendChild(ctaButton);

//     cardContainer.appendChild(cardDetailsContainer);


//     productContainer.appendChild(cardContainer);
// }

productContainer.addEventListener("click", (event)=>{
    const isProductInCart = findProductInCart(cart1, event.target.dataset.id);
    if(!isProductInCart){
     const productToAddToCart = products.filter(({_id})=> _id===event.target.dataset.id);
     cart1 = [...cart1, ...productToAddToCart];
     localStorage.setItem("cart", JSON.stringify(cart1));
     const cartButton = event.target;
     cartButton.innerHTML = "Go to Cart <span class='material-icons-outlined'>shopping_cart</span>";
    }
    else{
        location.href = "cart.html";
    }
    console.log(cart1);
})
createProductCart(products, productContainer, findProductInCart, "products");
