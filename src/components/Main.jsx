import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetail from "./ItemDetail";

function Main(){

    return(
        <main>
            <Routes>
                <Route path="/" element={<p>text1</p>}/>
                <Route path="/product/" element={<ItemListContainer greeting="Cargando Productos..."/>}/>
                <Route path="/cart" element={<p>text3</p>}/>
                <Route path="/product/:id" element={<ItemDetail/>}/>
            </Routes>
        </main>
    )
}

export default Main;