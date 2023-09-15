import './body.css'
import Air from '../../multimedia/Air.jpg'
import Inspire from '../../multimedia/Inspire.jpg'
import Spark from '../../multimedia/spark.jpg'
import Mini2 from '../../multimedia/Mini2.jpg'
import Air1 from '../../multimedia/Air1.jpg'
import { Product } from '../../models/product'
import { cartData as cartDataSingleton } from '../../cart_data'

export default function Body() {
    return (
        <body>
            {buildProduct(new Product(Mini2, 'dji Mini 2', 80))}
            <div class="container-items">
                <div class="item">
                    <figure>
                        <img src={Air} alt="producto-zapas" />
                    </figure>
                    <div class="info-producto">
                        <h2>Dji Mavic air 2 </h2>
                        <p class="price">$120</p>
                        <button>añadir al carro</button>
                        <a href="./especificaciones-mavicair2.html">
                            <button>Ver especificaciones </button>
                        </a>

                    </div>
                </div>

            </div>
            <div class="container-items">
                <div class="item">
                    <figure>
                        <img src={Spark} alt="producto-iphone" />
                    </figure>
                    <div class="info-producto">
                        <h2> Dji Spark </h2>
                        <p class="price">$450</p>
                        <button>añadir al carro</button>
                        <button>Ver especificaciones </button>

                    </div>
                </div>

            </div>
            <div class="container-items">
                <div class="item">
                    <figure>
                        <img src={Air1} alt="producto-perfume" />
                    </figure>
                    <div class="info-producto">
                        <h2>Dji FPV</h2>
                        <p class="price">$70</p>
                        
                        <button>añadir al carro</button>
                        
                        <button>Ver especificaciones </button>

                        
                       
                    </div>
                </div>

            </div>
            <div class="container-items">
                <div class="item">
                    <figure>
                        <img src={Inspire} alt="producto-drone" />
                    </figure>
                    <div class="info-producto">
                        <h2>Dji inspire 2</h2>
                        <p class="price">$650</p>
                        <button>añadir al carro</button>
                        <button>Ver especificaciones </button>

                    </div>
                </div>
            </div>
        </body>
    )
}

const buildProduct = (product = new Product()) => {
    return (
    <div class="container-items">
    <div class="item">
        <figure>
            <img src={product.src} alt="producto-drone" />
        </figure>
        <div class="info-producto">
            <h2>{product.name}</h2>
            <p class="price">${product.price}</p>
            <button onClick={() => {
                cartDataSingleton.addProductToCart(product)
            }}>añadir al carro</button>
            <button> Ver especificaciones </button>
        </div>
    </div>
</div>)
}

