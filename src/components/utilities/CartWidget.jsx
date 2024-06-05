import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartWidget(){

    return(
        <>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <p className='cartTotalProduct'>4</p>
        </div>
        
        </>
    )
}

export default CartWidget;