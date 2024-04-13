import { cargarInformacion } from "./data.js";

const render = async () => {
  const response = await cargarInformacion();
  console.log(response);

  const productItems = document.querySelector(".product-items"); //product-items
  for (const respuesta of response) {
    const product = document.createElement("div"); //product
    product.classList.add("product");
    const productContent = document.createElement("div"); //product-content
    productContent.classList.add("product-content");
    const productImg = document.createElement("div"); //product-img
    productImg.classList.add("product-img");
    const img = document.createElement("img");
    img.src = respuesta.image;
    img.alt = respuesta.id;
    console.log(respuesta.image);

    productImg.appendChild(img);
    productContent.appendChild(productImg);
    product.appendChild(productContent);
    productItems.appendChild(product);
  }
};

document.addEventListener("DOMContentLoaded", render);
