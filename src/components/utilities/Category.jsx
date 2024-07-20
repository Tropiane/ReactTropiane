import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { filterCategories} from "../actions";


const Category=({isNav})=>{
    const [categories, setCategories] = useState([]);
    const classN = isNav ? "categoryNav" : "category";

    useEffect(()=>{
        filterCategories().then(res=>setCategories(res))
    }, [])

    return(
        <>
        <div className={classN}>
        <ul >
        {categories.map(cat=>(
            
            <NavLink key={cat} to={`/product/category/${cat}`}>
                
                    <li>{cat}</li>
                
                </NavLink>
                
        ))}
        </ul>
        </div>
        </>
    )
}

export default Category;