import { BsCartPlus } from "react-icons/bs";
import CardProduct from "../CardProduct/CardProduct";

// const CardProduct = ({ thumbnail, title, price }) => {
//     return (
//         <div className="flex flex-col w-60 bg-red-600 gap-2 p-2 rounded-lg items-center justify-between">
//             <img className="rounded-lg" src={thumbnail} alt={title} />
//             <h2 className="font-bold text-center">{title}</h2>
//             <p className="font-bold text-center">${price}</p>
//             <button>
//                 <BsCartPlus className="flex-end" size={30} />
//             </button>
//         </div>
//     )
// }

const ItemList = ({ productos }) => {
    return (
        <div className="flex flex-wrap gap-4 p-5 justify-around">
            {productos.map((item) => <CardProduct item={item}/>)}
        </div>

    )
}

export default ItemList