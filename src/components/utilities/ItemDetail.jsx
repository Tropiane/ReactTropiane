import ItemCount from "./ItemCount"


function ItemDetail({arr}){

    return(
        <div className="productDetails">
        <div className="productDescription" key={arr.id}>
          <h2>{arr.title}</h2>
          <p>Categoría: {arr.category}</p>
          <img src={arr.image} alt={arr.title} />
          <p>{arr.description}</p>
        </div>

        <div className="productPrice">
          <p>Precio: ${arr.price}</p>
          <ItemCount initial={0} stock={9} producId={arr}/>
        </div>

      </div>
    )
}

export default ItemDetail