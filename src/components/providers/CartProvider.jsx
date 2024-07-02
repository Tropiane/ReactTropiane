import {createContext , useEffect, useState } from "react";

export const cartContext = createContext();
const Provider = cartContext.Provider;

function CartProvider({children}){
    const [cartCant, setCartCant] = useState(0)
    
    const contextValue = {
        cant : cartCant,
        count : (counter)=>{
            setCartCant(cartCant + counter)
        }
        
    }
 
    console.log("cartCant",cartCant);
    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider;