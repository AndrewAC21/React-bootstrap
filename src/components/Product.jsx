import React from 'react'

export default function Product() {
  return (
     <div class="product-card">
          <img src="../public/logos/Mueble1.jpeg" alt="" class="product-img" />
          <div class="product-info">
            <p>$120,00</p>
            <p>Mueble blanco</p>
            <div class="product-buys">
              <figure>
                <img
                  src="/Proyecto-Yard Sale/icons/bt_add_to_cart.svg"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>


  )
}
