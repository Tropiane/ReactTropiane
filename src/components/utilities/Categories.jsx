import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const Categories = ()=>{
    const { cat } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('error obteniendo información', error));
      }, 2000);
    }, []);
  
    if(products.length == 0){
        return <> <h2 className="titles">Cargando Items</h2></>
    }
    return (
      <>
        <div className="container">
        <Item arr={products}/>
        </div>      
      </>
    );
}

export default Categories;