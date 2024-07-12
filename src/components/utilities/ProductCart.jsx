import { useContext, useEffect, useState } from "react";
import { cartContext } from "../providers/CartProvider";
import { Link } from "react-router-dom";

function ProductCart({ arr }) {
    const [products, setProducts] = useState([]);
    const contextValue = useContext(cartContext)

  useEffect(() => {
    const data = arr.filter((item, index) => arr.indexOf(item) === index);
    setProducts(data);
  }, [arr]);

  const deleteItem = (itemToDelete) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex(product => product.id === itemToDelete.id);
    if (index !== -1) {
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="cartProduct">
          <img src={product.image} alt={product.title} />
          <Link to={`/product/${product.id}`}><h3>{product.title}</h3></Link>
          <p className="cartPrice">${product.price}</p>
          <p className="cartQuantity">cantidad: {contextValue.cantProduct}</p>
          <button onClick={() => deleteItem(product)}>quitar</button>
        </div>
      ))}
    </>
  );
}

export default ProductCart;
