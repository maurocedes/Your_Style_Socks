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
            <FaRegSquareMinus color="white" size={20} onClick={substract} />
            <span className="p-3 text-slate-200">{cantidad}</span>
            <FaRegSquarePlus color="white" size={20} onClick={add} />
        </div>
    )
}

export default QuantitySelector