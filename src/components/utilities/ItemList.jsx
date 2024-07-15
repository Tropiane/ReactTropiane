import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { useFetch } from "../utils";
import { itemContext } from "../providers/ItemProvider";
import { app } from "../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);
const productsCollection = collection(db, "productos");
const consulta = addDoc(productsCollection, {
    "id": "3",
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}).then((res)=>{
    console.log(res.id);
    console.log("salió todo ok");
})

function ItemList(){
    const [products, setProducts] = useState([]);
    const URL = `https://fakestoreapi.com/products`;
    const contextValue = useContext(itemContext)
    
    contextValue.setFinder(products)
    useEffect(()=>{
        setTimeout(() => {
            useFetch(URL, setProducts)
        }, 2000);
    }, [])

    if(products.length == 0){
        return <><h2 className="titles text-center">Cargando Items</h2></>
    }
    return(
        <>
            <Item arr={products}/>
        </>
    )
}

export default ItemList;