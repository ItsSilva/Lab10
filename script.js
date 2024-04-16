import { cargarInformacion } from "./data.js";

const render = async () => {
  const response = await cargarInformacion();
  console.log(response);

  const productItems = document.querySelector(".product-items");

  for (const respuesta of response) {
    const product = document.createElement("div");
    product.classList.add("product");
    const productContent = document.createElement("div");
    productContent.classList.add("product-content");

    const productImg = document.createElement("div");
    productImg.classList.add("product-img");
    const img = document.createElement("img");

    const productBtns = document.createElement("div");
    productBtns.classList.add("product-btns");
    const btnCart = document.createElement("button");
    btnCart.classList.add("btn-cart");
    btnCart.type = "button";
    btnCart.textContent = "Add to cart";
    const btnCartSpan = document.createElement("span");
    const btnCartIcon = document.createElement("i");
    btnCartIcon.classList.add("fas", "fa-plus");

    const btnBuy = document.createElement("button");
    btnBuy.classList.add("btn-buy");
    btnBuy.type = "button";
    btnBuy.textContent = "Buy now";
    const btnBuySpan = document.createElement("span");
    const btnBuyIcon = document.createElement("i");
    btnBuyIcon.classList.add("fas", "fa-shopping-cart");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoTop = document.createElement("div");
    productInfoTop.classList.add("product-info-top");
    const smTitle = document.createElement("h2");
    smTitle.classList.add("sm-title");
    smTitle.textContent = "Band";

    const rating = document.createElement("div");
    rating.classList.add("rating");

    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      const star = document.createElement("i");
      star.classList.add("fas", "fa-star");
      span.appendChild(star);
      rating.appendChild(span);
    }

    const productName = document.createElement("a");
    productName.classList.add("product-name");
    productName.textContent = respuesta.category.name; //respuesta.name
    productName.href = respuesta.image;

    const productPrice = document.createElement("p"); //product-price
    productPrice.classList.add("product-price");
    productPrice.textContent = "$" + respuesta.price;

    const productPrice2 = document.createElement("p"); //product-price
    productPrice2.classList.add("product-price");
    const precioConDescuento = respuesta.price - (respuesta.price * (respuesta.category.discount / 100));
    productPrice2.textContent = "$" + precioConDescuento;

    const offInfo = document.createElement("div"); //off-info
    offInfo.classList.add("off-info");

    const smTittle = document.createElement("h2"); //sm-tittle
    smTittle.classList.add("sm-tittle");
    smTittle.textContent = respuesta.category.discount + "% OFF";

    img.src = respuesta.image;
    img.alt = respuesta.id;
    console.log(respuesta.image);

    productImg.appendChild(img);
    productContent.appendChild(productImg);
    product.appendChild(productContent);

    product.appendChild(productInfo);
    productInfo.appendChild(productInfoTop);

    productInfoTop.appendChild(smTitle);

    productInfoTop.appendChild(rating);

    productInfo.appendChild(productName);

    productInfo.appendChild(productPrice);
    productInfo.appendChild(productPrice2);

    productInfo.appendChild(offInfo);

    offInfo.appendChild(smTittle);

    btnBuySpan.appendChild(btnBuyIcon);
    btnBuy.appendChild(btnBuySpan);
    productBtns.appendChild(btnBuy);

    btnCartSpan.appendChild(btnCartIcon);
    btnCart.appendChild(btnCartSpan);
    productBtns.appendChild(btnCart);

    product.appendChild(productBtns);
    productItems.appendChild(product);
  }
};

document.addEventListener("DOMContentLoaded", render);
