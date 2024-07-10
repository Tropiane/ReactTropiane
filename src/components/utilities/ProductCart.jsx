import { useEffect, useState } from "react";

function ProductCart({arr}){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const data = arr.filter((item, index)=>{
            return arr.indexOf(item) === index;
        })
        setProducts(data)
    }, [])
    
    const deleteItem =()=>{
        const element = products.find((item, index)=>{
                const product = products.indexOf(item); 
                console.log(index);
                product !== -1 && products.splice(1, product)

        })
        console.log(products);
    }

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