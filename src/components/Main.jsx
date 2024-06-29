import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import Home from "./Home";
import Categories from "./utilities/Categories";
import Carrito from "./utilities/Carrito";

function Main(){

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Carrito/>}/>
                <Route path="/product/:id" element={<ItemDetail/>}/>
                <Route path="/product/category/:cat" element={<Categories/>}/>
            </Routes>
        </main>
    )
}

export default Main;