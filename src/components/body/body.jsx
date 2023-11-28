import "./body.css";
import Air from "../../multimedia/Air.jpg";
import Inspire from "../../multimedia/Inspire.jpg";
import Spark from "../../multimedia/spark.jpg";
import Mini2 from "../../multimedia/Mini2.jpg";
import Air1 from "../../multimedia/Air1.jpg";
import { Product } from "../../models/product";
import { cartData as cartDataSingleton } from "../../cart_data";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
import "./body.css";

import axios from "axios";

export default function Body() {
    

    const [data1, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/products');
                setData(response.data);


            } catch (error) {
                console.error('Error interno del servidor:', error);
            }
        };

        fetchData();
    }, []);
    console.log(data1);
    console.log (data1["products"])
    return (
        <div id='bodyMoviles'>
          <div className="body-items">
            <div className="container-items">
              {data1 && data1["products"] ? (
                data1["products"].map((product) => (
                  <div className="item" key={product.id}>
                    <figure>
                      <img src={product.img} alt="img-product-card"/>
                    </figure>
                    <div className="info-product">
                      <h3>{product.name}</h3>
                      <h4>{product.price}$</h4>
                      <a href="">INFO</a>
                      
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay productos disponibles.</p>
              )}
            </div>
          </div>
        </div>
      );
  
  
}


