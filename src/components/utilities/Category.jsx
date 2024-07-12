import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../utils";


const Category=()=>{
    const [categories, setCategories] = useState([]);
    const URL = "https://fakestoreapi.com/products/categories";
    useEffect(()=>{
        useFetch(URL,setCategories)
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