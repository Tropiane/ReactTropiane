import { useEffect, useState } from "react";

function ButtonItem({initial, stock, onAdd}){
    const [product, setProduct] = useState(initial);

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
        if (stock > 0){
            onAdd(product);
        }
    } 
    
    return(
        <>
         <div className="btnCount">
            <button onClick={removeProduct}>-</button>
            <input type="text" placeholder={product} className="text-center"/>
            <button onClick={addProduct}>+</button>
            <button onClick={addCart}>Add to Cart</button>
         </div>
        </>
    )
}

export default ButtonItem;