import { useEffect, useState } from "react";
import Item from "./Item";


function ItemList(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products`).then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("error al buscar elementos", error))
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