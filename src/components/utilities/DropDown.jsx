import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom";
import Category from "./Category";


const DropDown =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropDown=()=>{
        setIsOpen(!isOpen)
    }
    
    return (
        <div className="dropDown">
          <NavLink onClick={toggleDropDown}>Categorías<FontAwesomeIcon icon={faArrowDownWideShort} className='cartIcon'/></NavLink>

          {isOpen && (
                <Category/>
          )}
        </div>
      );
}

export default DropDown;