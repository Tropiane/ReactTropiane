import {createContext , useEffect, useState } from "react";

export const cartContext = createContext();
const Provider = cartContext.Provider;

function CartProvider({children}){
    const [prodDetails, setProdDetails] = useState([])
    console.log(prodDetails.length);
    const contextValue = {
        details : prodDetails,
        setDetails : (prod)=>{
            setProdDetails(prod)
        }
    }
    console.log("prodDetails is", prodDetails);
    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider;