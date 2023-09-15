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
            {buildProduct(new Product(Air, 'dji air 2', 120))}
            {buildProduct(new Product(Spark, 'dji spark', 450))}
            {buildProduct(new Product(Air1, 'Air', 80))}
            {buildProduct(new Product(Inspire, 'dji Inspire', 25))}
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

