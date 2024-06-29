import { useEffect, useState } from "react";
import ItemList from "./utilities/ItemList";
import Category from "./utilities/Category";


function ItemListContainer(){

    return(
        <div className="container">
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;