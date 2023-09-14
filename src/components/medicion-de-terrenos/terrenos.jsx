import './terrenos.css'
import Campo1 from '../../multimedia/campo1.jpg'
import Inspire from '../../multimedia/Inspire.jpg'
import Spark from '../../multimedia/spark.jpg'
import Air1 from '../../multimedia/Air1.jpg'
export default function Terrenos() {
    return (
        <body>
            <div class="container-items">
                <div class="item">
                    <figure>
                        <img src={Campo1} alt="producto-auris" />
                    </figure>
                    <div class="info-producto">
                        <h2> Finca 200 Hectareas </h2>
                        <p class="price">USD6000</p>

                        <button>añadir al carro</button>
                        <button>Ver especificaciones </button>

                    </div>
                </div>

            </div>
            <div class="container-items">
                <div class="item">
                    <figure>
                        
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

