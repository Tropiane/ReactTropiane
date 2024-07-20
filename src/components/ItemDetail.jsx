import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./utilities/ItemCount";
import { getProductsId } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = () => {
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
      <div className="productDetails">
        <div className="productDescription" key={product.id}>
          <h2>{product.title}</h2>
          <p>Categoría: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>

        <div className="productPrice">
          <p>Precio: ${product.price}</p>
          <ItemCount initial={0} stock={9} producId={product}/>
        </div>

      </div>
    );
  };

export default ItemDetail;
