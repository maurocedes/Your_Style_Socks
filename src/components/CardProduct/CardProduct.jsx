import { BsCartPlus } from "react-icons/bs";
import Button from "../Button/Button";

const CardProduct = ({item}) => {
    return (
        <div key={item.id} className="flex flex-col w-60 bg-red-600 gap-2 p-2 rounded-lg items-center justify-between">
                    <img className="rounded-lg" src={item.thumbnail} alt={item.title} />
                    <h2 className="font-bold text-center">{item.title}</h2>
                    <p className="font-bold text-center">${item.price}</p>
                    <Button>Ver Mas</Button>
                </div>
    )
}

export default CardProduct