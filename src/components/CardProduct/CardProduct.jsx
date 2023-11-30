import { BsCartPlus } from "react-icons/bs";

const CardProduct = ({ thumbnail, title, price }) => {
    return (
        <div className="flex flex-col w-60 bg-red-600 gap-2 p-2 rounded-lg items-center">
            <img className="rounded-lg" src={thumbnail} alt={title} />
            <h2 className="font-bold text-center">{title}</h2>
            <p className="font-bold text-center">${price}</p>
            <button>
                <BsCartPlus className="" />
            </button>
        </div>
    )
}

export default CardProduct