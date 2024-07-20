const ItemQuantitySelector=({cartProduct, product, onAdd, isCart})=>{
    if (isCart == true) {
        return(<p className="cartTotalProduct">{cartProduct}</p>)
    }
    return(
        <>
        <input type="text" placeholder={product} className="text-center"/>
        <button onClick={onAdd} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add to Cart</button>
        </>
    )
}

export default ItemQuantitySelector