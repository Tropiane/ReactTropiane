import { createContext, useState } from "react";

export const itemContext = createContext();
const Provider= itemContext.Provider;

function ItemProvider({children}){
    const [useFind, setUseFind] = useState([])
    const contextValue ={
        setFinder : (find)=>{
            setUseFind(find)
        },
        finder : useFind
    }

    return(

        <Provider value={contextValue}>
            {children}
        </Provider>

    )
}

export default ItemProvider;