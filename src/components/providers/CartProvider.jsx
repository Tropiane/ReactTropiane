import {createContext , useState } from "react";

export const cartContext = createContext();
const Provider = cartContext.Provider;

function CartProvider({children}){
    const [prodDetails, setProdDetails] = useState([])
    const [prodTotal, setProdTotal] = useState(0)
    const [productCant, setProductCant] = useState([])
    const [priceTotal, setPriceTotal] = useState(0);

    const contextValue = {
        details : prodDetails.filter((item, index)=>{
            return prodDetails.indexOf(item) === index;
        }),
        setDetails : (prod)=>{
            setProdDetails([...prodDetails, prod])
        },
        setTotal : (tot)=>{
            setProdTotal(prodTotal + tot)
        },
        total : prodTotal,
        cantProduct : productCant,
        setCantProduct : (cant)=>{
            setProductCant(cant)
        },
        setPrice : (tot)=>{
            setPriceTotal(priceTotal + tot)
        },
        priceTot : priceTotal
    }

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartProvider;