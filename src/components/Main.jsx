import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";
import Home from "./Home";
import Categories from "./utilities/Categories";

function Main(){

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/" element={<ItemListContainer greeting="Cargando Productos..."/>}/>
                <Route path="/cart" element={<h2 className="text-center text-xl underline decoration-black text-slate-50">Carrito vacío</h2>}/>
                <Route path="/product/:id" element={<ItemDetail/>}/>
                <Route path="/product/category/:cat" element={<Categories/>}/>
            </Routes>
        </main>
    )
}

export default Main;