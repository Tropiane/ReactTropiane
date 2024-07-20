import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsId } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ItemDetail from "./utilities/ItemDetail";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      setTimeout(() => {
        getProductsId(id).then((data)=>{setProduct(data)})
      }, 2000);
    }, [id]);

    if (!product) {return(<><FontAwesomeIcon icon={faCartPlus} className='itemIcon'/>
      <p>Un segundito...</p></>)}
  
    return (
      <ItemDetail arr={product}/>
    );
  };

export default ItemDetailContainer;
