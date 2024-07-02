import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import {cartContext} from '../providers/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CartWidget(){

    const contextValue = useContext(cartContext)
    console.log("value", contextValue.cant);
    return(
        <>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <p>{contextValue.cant}</p>
            <ToastContainer/>
        </div>
        
        </>
    )
}

export default CartWidget;