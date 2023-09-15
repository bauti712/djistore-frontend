import React from "react";
import "./carrito.css";
import { cartData as cartDataSingleton } from '../../cart_data'
import { Product } from "../../models/product";

export default function Carrito() {
  
  return (
    <body>
        <main>
          {cartDataSingleton.products.map(e => buildProductSummary(e))}
        </main>
    </body>
    

  );
}

const buildProductSummary = (product = new Product()) => {
return (<section class="producto">
                
<h2>{product.name}</h2>
<p>Precio: ${product.price}</p>
<button class="agregar-al-carrito">Agregar al carrito</button>
</section>)
}
