import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Carrito(){
    const [products, setProducts] = useState([]);

    if(products.length == 0){
        return <>
        <div className="text-center">
        <h2 className="titles text-center">Carrito Vacío</h2>
        <p className="text-sky-50 text-xl">Agrega los mejores productos de nuestra <Link to="/product"><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Tienda</button></Link>
        </p>
        </div>
        </>
    }
    return(
        <>
            {/* lógica de productos añadidos */}
        </>
    )
}

export default Carrito;