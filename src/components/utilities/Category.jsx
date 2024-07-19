import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { filterCategories} from "../actions";


const Category=()=>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        filterCategories().then(res=>setCategories(res))
    }, [])


    return(
        <>
        {categories.map(cat=>(
            <NavLink key={cat} to={`/product/category/${cat}`}>
                <ul>
                    <li>{cat}</li>
                </ul>
                </NavLink>
        ))}
        </>
    )
}

export default Category;