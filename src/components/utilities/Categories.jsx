import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getUniqueCategories } from "../actions";

const Categories = ()=>{
    const { cat } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      setTimeout(() => {
          getUniqueCategories(cat).then((data)=>{setProducts(data)})
          .catch(error => console.error('error obteniendo información', error));
      }, 2000);
    }, []);
  
    if(products.length == 0){
        return <> <h2 className="titles">Cargando Items</h2></>
    }
    return (
        <div className="container">
        <Item arr={products}/>
        </div>      
    );
}

export default Categories;