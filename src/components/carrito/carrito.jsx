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
            <h1>Total: ${getTotalPrice(cartDataSingleton.products)}</h1>
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

const getTotalPrice = (products = []) => {
  if(products.length === 0){
    return 0;
  }

  let total = 0;

  for(let product of products){
    total+=product.price
  }

  return total;
}





