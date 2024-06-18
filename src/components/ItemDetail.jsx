import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonItem from "./utilities/ButtonItem";

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
      return <div className="text-lg text-center shadow-lg shadow-indigo-500/50">
        <h2 className="text-gray-50">Cargando...</h2>
        </div>;
    }
  
    return (
      <>      
      <div className="productDetails">
        <div className="productDescription">
          <h2>{product.title}</h2>
          <p>Categoría: {product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>

        <div className="productPrice">
        <p>Precio: ${product.price}</p>
        <ButtonItem initial={0} stock={9}/>
        </div>

      </div>
      </>
    );
  };

export default ItemDetail;
