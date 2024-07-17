import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { useFetch } from "../utils";
import { itemContext } from "../providers/ItemProvider";
import { createProducts, getProducts } from "../actions";

function ItemList(){
    const [products, setProducts] = useState([]);
    const URL = `https://fakestoreapi.com/products`;
    const contextValue = useContext(itemContext)
    
    useEffect(()=>{
        setTimeout(() => {
           getProducts().then((data)=>{setProducts(data)})
            contextValue.setFinder(products)
        }, 2000);
    }, [])

    if(products.length == 0){
        return <><h2 className="titles text-center">Cargando Items</h2></>
    }
    return(
        <>
            <Item arr={products}/>
        </>
    )
}

export default ItemList;