import { NavLink, Route, Routes } from "react-router-dom";
import "../sass/components/_navBar.scss"
import CartWidget from "./utilities/CartWidget";
import Contact from "./utilities/Contact";


function NavBar(){
    return(
        <>
            <NavLink to="/"><h1 className="text-3xl font-bold underline">Kai<span>Shop</span></h1></NavLink>
            
            <nav className="navBar">
                <NavLink to="/" className=" text-slate-500">Home</NavLink>
                <NavLink to="/product/" className=" text-slate-500"> Products</NavLink>
                <NavLink to="/cart" className="text-slate-500"><CartWidget/></NavLink>
            </nav>
            
        </>
    )
}

export default NavBar;