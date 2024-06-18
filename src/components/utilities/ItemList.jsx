import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
        
        {products.map(product=>(
            <div key={product.id}className="item">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <ul>
                    <li>{product.price}</li>
                    <li><Link to={`/product/${product.id}`}>
                    <button>Ver detalle</button></Link>
                    </li>
                </ul>
            </div>
        ))}

        </>
    )
}

export default ItemList;