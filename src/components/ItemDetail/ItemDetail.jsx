import Button from "../Button/Button"
import { useContext, useState } from "react"
import QuantitySelector from "./QuantitySelector"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({ item }) => {


    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    console.log(isInCart(item.id))


    const addButton = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        addToCart(itemToCart)

    }

    return (
        <div>
            <Button>
                <Link to={"/"}>
                    Volver
                </Link>
            </Button>
            <div className="flex w-max bg-red-600 gap-2 p-2 rounded-lg items-center my-3">
                <img className="w-60 rounded-lg" src={item.thumbnail} alt={item.title} />
                <div className="flex flex-col gap-6 p-5 justify-between items-center">
                    <h2 className="font-bold text-center">{item.title}</h2>
                    <p className="font-bold">${item.price}</p>
                    {
                        isInCart(item.id)
                            ? <Button><Link to={"/cart"} >Ir al Carrito</Link></Button>
                            : <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad} />
                                <Button onClick={addButton} >Agregar al carrito</Button>
                            </>
                    }


                </div>
            </div>


        </div>
    )
}

export default ItemDetail