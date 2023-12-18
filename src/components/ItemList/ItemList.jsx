import CardProduct from "../CardProduct/CardProduct";

const ItemList = ({ productos }) => {
    return (
        <div className="flex flex-wrap gap-4 p-5 justify-evenly">
            {productos.map((item) => <CardProduct key={item.id} item={item}/>)}
        </div>

    )
}

export default ItemList