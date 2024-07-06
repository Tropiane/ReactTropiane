import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react';
import {cartContext} from '../providers/CartProvider';
import 'react-toastify/dist/ReactToastify.css';


function CartWidget(){
    const contextValue = useContext(cartContext)

    return(
        <>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <p>{contextValue.total}</p>
        </div>
        
        </>
    )
}

export default CartWidget;