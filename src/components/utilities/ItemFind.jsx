import { useContext, useState } from "react";
import { itemContext } from "../providers/ItemProvider";
import { Link } from "react-router-dom";

function ItemFind(){
    const [itemTitle, setItemTitle] = useState("")

    const contextValue = useContext(itemContext)
    const finderItems = contextValue.finder;
    const handleChange = (e)=>{
        setItemTitle(e.target.value)
    }
    const filteredItems = finderItems.filter(item =>
        item.title.includes(itemTitle)
        
      );

      if (itemTitle.length >= 1) {
        return(
            <div className="findContainer">
            <input type="text"  
                value={itemTitle}
                onChange={handleChange}
                className="inputSearch rounded-lg"
            />    
            <div className="findItems">
                {filteredItems.map((item, index)=>(
                    <Link to={`/product/${item.id}`}>                    
                    <div key={index} className="findItem"> 
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </div>
                    </Link>
                ))}
            </div>
            </div>
        )
      }
      if(finderItems.length > 0){
    return(
        <>
        <div className="findContainer">
        <input type="text" placeholder="Buscar productos" value={itemTitle} onChange={handleChange} className="inputSearch rounded-lg text-center"/>    
        </div>
        </>
    )
    }
}
export default ItemFind;