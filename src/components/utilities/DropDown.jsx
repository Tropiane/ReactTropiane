import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'
import Category from "./Category";


const DropDown =()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropDown=()=>{
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="dropDown text-slate-500" onClick={toggleDropDown}>
        Categorías<FontAwesomeIcon icon={faArrowDownWideShort} className='cartIcon'/>
        <div className="dropDownCategory">
        {isOpen && (
                <Category isNav={true}/>
          )}
        </div>
          
        </div>
      );
}

export default DropDown;