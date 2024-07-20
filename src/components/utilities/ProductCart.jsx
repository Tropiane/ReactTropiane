import { useContext, useEffect, useState } from "react";
import { cartContext } from "../providers/CartProvider";
import { Link } from "react-router-dom";

function ProductCart({ arr }) {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const { cantProduct } = useContext(cartContext);

  const deleteItem = (itemToDelete) => {
    const updatedProducts = products.filter(product => product.id !== itemToDelete.id);
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const uniqueProducts = arr.filter((item, index) => arr.indexOf(item) === index);
    setProducts(uniqueProducts);
  }, [arr]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = products.reduce((sum, product) => sum + product.price, 0);
      setPrice(total);
    };

    calculateTotalPrice();
  }, [products]);

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="cartProduct">
          <img src={product.image} alt={product.title} />
          <Link to={`/product/${product.id}`}><h3>{product.title}</h3></Link>
          <p className="cartPrice">${product.price}</p>
          <p className="cartQuantity">cantidad: {cantProduct}</p>
          <button onClick={() => deleteItem(product)}>quitar</button>
        </div>
      ))}
      <div>Total: ${Number(price).toFixed(1)}</div>
    </>
  );
}

export default ProductCart;
