import { NavLink} from "react-router-dom";
import "../sass/components/_navBar.scss";
import CartWidget from "./utilities/CartWidget";
import DropDown from "./utilities/DropDown";
import ItemFind from "./utilities/ItemFind";


function NavBar(props){

    if(props.isFooter == true){
        return(
            <>
            <nav className="p-5 text-slate-50 font-Poppins text-center flex space-x-4 justify-center">
                <NavLink to="/" className=" text-slate-500">Home</NavLink>

                <NavLink to="/product/" className=" text-slate-500"> Tienda</NavLink>
                
                <NavLink to="/" className="text-slate-500">T&C</NavLink>
                
                <NavLink to="/" className="text-slate-500">Preguntas Frecuentes</NavLink>
            </nav>
            </>
        )
    }
    return(
        <>
            <ItemFind/>
            <nav className="navBar">
            <NavLink to="/"><h1 className="text-3xl font-bold underline">Kai<span>Shop</span></h1></NavLink>
                <DropDown/>
                <NavLink to="/" className=" text-slate-500">Home</NavLink>

                <NavLink to="/product/" className=" text-slate-500" > Products</NavLink>
                

                <NavLink to="/cart" className="text-slate-500"><CartWidget/></NavLink>
            </nav>
            
        </>
    )
}

export default NavBar;