import { NavLink } from "react-router-dom";

function CheckOut({total}){
    return(
        <>
            <p>Checkout</p>
            <p>Precio final: ${total}</p>
            <NavLink to={"/checkout"}><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"> Finalizar compra</button></NavLink>
            
        </>
    )
}

export default CheckOut;