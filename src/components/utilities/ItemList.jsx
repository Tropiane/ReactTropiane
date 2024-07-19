import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { itemContext } from "../providers/ItemProvider";
import { getProducts } from "../actions";
function ItemList(){
    const [products, setProducts] = useState([]);
    const contextValue = useContext(itemContext)
    
    useEffect(()=>{
        setTimeout(() => {
            getProducts().then((data)=>{setProducts(data)})
            contextValue.setFinder(products)
        }, 2000);
    }, [])


    if(products.length == 0){
        return <><h2 className="titles">Cargando Items</h2></>
    }
    return(
        <>
            <Item arr={products}/>
        </>
    )
}

export default ItemList;