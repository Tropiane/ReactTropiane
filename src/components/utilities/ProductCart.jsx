import { useEffect, useState } from "react";

function ProductCart({arr}){
    const [products, setProducts] = useState([])

    const deleteItem =()=>{
        const element = products.indexOf(e);
        element !== -1 && products.splice(element, 1)
    }

    useEffect(()=>{
        const data = arr.filter((item, index)=>{
            console.log(item);
            return arr.indexOf(item) === index;
        })
        setProducts(data)
    }, [])

    return(
        <>     
    {products.map((product)=>(
        <div key={product.id} className="cartProduct">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="cartPrice">${product.price}</p>
            <p className="cartQuantity">cantidad: 5{}</p>
            <button onClick={deleteItem}>quitar</button>
        </div>
    ))}
    </>
    )
}

export default ProductCart;