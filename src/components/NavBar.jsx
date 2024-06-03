import "../sass/components/_navBar.scss"
import NavBarLinks from "./NavBarLinks";


function NavBar(){
    return(
        <>
            <h1>Title</h1>
            <nav className="navBar">
            <NavBarLinks link="#" tContent="Tienda"/>
            <NavBarLinks link="#" tContent="Nosotros"/>
            <NavBarLinks link="#" tContent="Contacto"/>
            </nav>

        </>
    )
}

export default NavBar;