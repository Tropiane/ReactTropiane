import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";


function ItemList(){
    const [products, setProducts] = useState();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`).then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error("error al buscar elementos", error))
    }, [])

    if(!products){
        return <> <h2 className="titles">Cargando Items</h2></>
    }
    return(
        <>
        <Item arr={products}/>
        </>
    )
}

export default ItemList;