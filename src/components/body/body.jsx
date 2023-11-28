
import "./body.css";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Context/DataContext";
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

  
  const handleBuy = (product) => {
    console.log(`Comprando ${product.name}`);
    
  };

 
  return (
    <div id='container-items'>
      <div className="body-items">
        <div className="container-items">
          {data1 && data1["products"] ? (
            data1["products"].map((product) => (
              <div className="item" key={product.id}>
                <figure>
                  <img src={product.imageurl} alt="item"/>
                </figure>
                <div className="info-product">
                  <h3>{product.name}</h3>
                  <h4>{product.price}$</h4>
                  <button onClick={() => (product)}>Comprar</button>
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

// import "./body.css";


// import { useContext, useEffect, useState } from "react";
// import { dataContext } from "../Context/DataContext";


// import axios from "axios";

// export default function Body() {
   

//     const [data1, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/products');
//                 setData(response.data);


//             } catch (error) {
//                 console.error('Error interno del servidor:', error);
//             }
//         };

//         fetchData();
//     }, []);
//     console.log(data1);
//     console.log (data1["products"])
//     return (
//         <div id='container-items'>
//           <div className="body-items">
//             <div className="container-items">
//               {data1 && data1["products"] ? (
//                 data1["products"].map((product) => (
//                   <div className="item" key={product.id}>
//                     <figure>
//                       <img src={product.imageurl} alt="item"/>
//                     </figure>
//                     <div className="info-product">
//                       <h3>{product.name}</h3>
//                       <h4>{product.price}$</h4>
//                       <a href="">INFO</a>
                      
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No hay productos disponibles.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       );
  
  
// }


