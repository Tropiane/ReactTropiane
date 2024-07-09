import { useEffect, useState } from "react";
import Item from "./Item";
import { useFetch } from "../utils";


function ItemList(){
    const [products, setProducts] = useState([]);
    const URL = `https://fakestoreapi.com/products`;
    useEffect(()=>{
        setTimeout(() => {
            useFetch(URL, setProducts)
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