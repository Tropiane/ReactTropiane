import NavBar from "./NavBar";
import "../sass/components/_navBar.scss"
import { ToastContainer } from "react-toastify";

function Header(){

    return(
        <>
        <header className="header">
        <ToastContainer/>
        <NavBar/>
        </header>
        </>
    )
}

export default Header;