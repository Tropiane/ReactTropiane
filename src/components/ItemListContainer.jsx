import { useContext, useEffect, useState } from "react";
import Item from "./utilities/Item";
import { itemContext } from "./providers/ItemProvider";
import { getProducts } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const contextValue = useContext(itemContext)
    
    useEffect(()=>{
        setTimeout(() => {
            getProducts().then((data)=>{setProducts(data)});
        }, 2000);
    }, [])
    setTimeout(() => {
        contextValue.setFinder(products)
    }, 2000)

    if(products.length == 0){
        return (
            <div className="container">
                <FontAwesomeIcon icon={faCartPlus} className='itemIcon'/>
                <p>Buscando productos...</p>
            </div>
        )         
    }
    return(
        <div className="container">
            <Item arr={products}/>
        </div>
    )
}

export default ItemListContainer;