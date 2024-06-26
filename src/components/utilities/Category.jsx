import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Category=()=>{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories").then(res=> res.json())
        .then(data => setCategories(data))
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