import ItemList from "./utilities/ItemList";
import ItemFind from "./utilities/ItemFind";


function ItemListContainer(){

    return(
        <>
        <ItemFind/>
        <div className="container">
            <ItemList/>
        </div>
        </>
    )
}

export default ItemListContainer;