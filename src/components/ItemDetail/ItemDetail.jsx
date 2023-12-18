import Button from "../Button/Button"
import { useState } from "react"
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";

const ItemDetail = ({ item }) => {


    const [cantidad, setCantidad] = useState(1)

    const add = () => {
        setCantidad(cantidad + 1)
    }
    const substract = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="flex w-max bg-red-600 gap-2 p-2 rounded-lg items-center">
            <img className="w-60 rounded-lg" src={item.thumbnail} alt={item.title} />
            <div className="flex flex-col gap-6 p-5 justify-between items-center">
                <h2 className="font-bold text-center">{item.title}</h2>
                <p className="font-bold">${item.price}</p>
                <div className="flex gap-5 items-center align-middle">
                    <FaRegSquareMinus size={20} onClick={substract} />
                    <span className="p-3">{cantidad}</span>
                    <FaRegSquarePlus size={20} onClick={add} />
                </div>


                <Button>Agregar al carrito</Button>
            </div>


        </div>
    )
}

export default ItemDetail