import React, { setState} from "react";
import "./carrito.css";
import { cartData as cartDataSingleton } from '../../cart_data'
import { Product } from "../../models/product";

export default class Carrito extends React.Component{

  render(){
    return (
      <body>
          <main>
            {cartDataSingleton.products.map(e => buildProductSummary(e, () => {
              this.setState({})
            }))}
          </main>
      </body>
    );
  }
}

const buildProductSummary = (product = new Product(), onClick = () => {}) => {
  if (!cartDataSingleton.products.includes(product)){
    return(<div></div>)
  }
return (<section class="producto">     
<h2>{product.name}</h2>
<p>Precio: ${product.price}</p>

<button class="agregar-al-carrito" onClick={()=>{
  cartDataSingleton.removeProductFromCart(product)
  onClick.call()
}}>quitar producto</button>
</section>)
}
