import {useContext ,useState } from "react";
import Input from "./Input";
import CartProvider, {cartContext} from '../providers/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemCount({initial, stock}){
    const [product, setProduct] = useState(initial);
    const [cartProducts, setCartProducts] = useState(0)
    const contextValue = useContext(cartContext)
    const popUp = ()=> toast("añadiste al carrito")

    const addProduct = ()=>{
        if (product < stock) {
            setProduct(product + 1);
        }
    }
    const removeProduct = ()=>{
        if (product > 1) {
            setProduct(product - 1);
        }
    }

    const addCart = ()=>{
        setCartProducts(product)
        contextValue.count(cartProducts)  
        popUp()
    } 
    
    return(
        <>
         <div className="btnCount">
            <button onClick={removeProduct} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">-</button>

            <button onClick={addProduct} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            <Input cartProduct={contextValue.cant} product={product} onAdd={addCart}/>
         </div>
        </>
    )
}

export default ItemCount;