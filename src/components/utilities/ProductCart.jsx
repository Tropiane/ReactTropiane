import { useEffect, useState } from "react";

function ProductCart({arr}){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const data = arr.filter((item, index)=>{
            return arr.indexOf(item) === index;
        })
        setProducts(data)
    }, [])

    return(
        <>     
    {products.map((product)=>(
        <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} className="object-contain h-48 w-96"/>
        </div>
    ))}
    </>
    )
}

export default ProductCart;