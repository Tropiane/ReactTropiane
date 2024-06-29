import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Input from './Input';


function CartWidget(){
    const [data, setData] = useState();
    
    return(
        <>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <Input isCart={true}/>
        </div>
        
        </>
    )
}

export default CartWidget;