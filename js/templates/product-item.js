export const item = (product) => {

  return `
    <li class="item swiper-slide">

  <div class="product__block js_product glass glass-m" id="${product.id}">
  <a href="product-page.html?id=${product.id}" class="product">
    <div class="product__img-box">
     <img src="${product.image}" alt="" class="img">
    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
      <span class="product__price"><span>$${(product.price).toFixed(2)}</span></span>
    </div>
   </a>
   <button class="product__btn js_add-to-cart">add to cart</button>
</div>
  </li>
    `
}