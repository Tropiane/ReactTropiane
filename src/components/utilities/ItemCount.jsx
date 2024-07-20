import {memo, useContext ,useState } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import {cartContext} from '../providers/CartProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemCount({initial, stock, producId}){
    const contextValue = useContext(cartContext)
    const [product, setProduct] = useState(initial);
    const popUp = ()=> toast(`añadiste (${product}) ${producId.title}`)

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
        popUp()
        contextValue.setDetails(producId)
        contextValue.setTotal(product)
        contextValue.setCantProduct(product)
    }
    
    return(
         <div className="btnCount">
            <ItemQuantitySelector cartProduct={contextValue.cant} product={product} onAdd={addCart}/>
            
            <div className="addCant">

            <button onClick={removeProduct} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">-</button>

            <button onClick={addProduct} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">+</button>
            </div>

         </div>

    )
}

export default memo(ItemCount);