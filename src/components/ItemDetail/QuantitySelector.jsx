import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";


const QuantitySelector = ({cantidad,stock,setCantidad}) => {

    const add = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }
    const substract = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="flex gap-5 items-center align-middle">
            <FaRegSquareMinus size={20} onClick={substract} />
            <span className="p-3">{cantidad}</span>
            <FaRegSquarePlus size={20} onClick={add} />
        </div>
    )
}

export default QuantitySelector