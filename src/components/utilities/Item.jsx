import { Link } from "react-router-dom";


function Item(props){
    
    return(
        <>
        {props.arr.map(product=>(
            <div key={product.id}className="item">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <ul>
                    <li>${product.price}</li>
                    <li><Link to={`/product/${product.id}`}>
                    <button>Ver detalle</button></Link>
                    </li>
                </ul>
            </div>
        ))}

        </>
    )
}

export default Item;