import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { getUniqueCategories } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

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
        return  <div className="container">
        <FontAwesomeIcon icon={faCartPlus} className='itemIcon'/>
        <p>Buscando productos...</p>
    </div>
    }
    return (
        <div className="container">
        <Item arr={products}/>
        </div>      
    );
}

export default Categories;