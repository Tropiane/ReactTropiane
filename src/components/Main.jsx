import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";
import Categories from "./utilities/Categories";
import Carrito from "./utilities/Carrito";
import ItemForm from "./utilities/ItemForm";
import ItemListContainer from "./ItemListContainer";


function Main(){

    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Carrito/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/product/category/:cat" element={<Categories/>}/>
                <Route path="/checkout" element={<ItemForm/>}/>
            </Routes>
        </main>
    )
}

export default Main;