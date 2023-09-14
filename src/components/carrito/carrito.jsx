import React from "react";
import "./carrito.css";
import {Link} from 'react-router-dom';

export default function Carrito() {
  return (
    



    <body>
        
        <main>
            <section class="producto">
                
                <h2>Producto 1</h2>
                <p>Precio: $10.00</p>
                <button class="agregar-al-carrito">Agregar al carrito</button>
            </section>
            <section class="producto">
                
                <h2>Producto 2</h2>
                <p>Precio: $15.00</p>
                <button class="agregar-al-carrito">Agregar al carrito</button>
            </section>
        </main>
        
    </body>
    

  );
}
