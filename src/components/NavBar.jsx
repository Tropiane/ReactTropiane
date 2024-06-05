import "../sass/components/_navBar.scss"
import CartWidget from "./utilities/CartWidget";
import NavBarLinks from "./utilities/NavBarLinks";


function NavBar(){
    return(
        <>
            <h1 className="text-3xl font-bold underline">Kai<span>Shop</span></h1>
            <nav className="navBar">
            <NavBarLinks link="#" tContent="Tienda"/>
            <NavBarLinks link="#" tContent="Nosotros"/>
            <NavBarLinks link="#" tContent="Contacto"/>
            <CartWidget/>
            </nav>
            
        </>
    )
}

export default NavBar;