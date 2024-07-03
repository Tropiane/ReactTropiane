import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./utilities/ItemCount";

const ItemDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => setProduct(data))
          .catch(error => console.error('error obteniendo información', error));
      }, 2000);
    }, [id]);
  
    if (!product) {
      return(
        <>
        <h2 className="titles">Cargando...</h2>;
        </>
      )

    }
  
    return (
      <>      
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
      </>
    );
  };

export default ItemDetail;
