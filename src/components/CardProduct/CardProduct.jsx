
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CardProduct = ({ item }) => {
    return (
        <div key={item.id} className="flex flex-col w-60 bg-red-600 gap-2 p-2 rounded-lg items-center justify-between">
            <img className="rounded-lg" src={item.thumbnail} alt={item.title} />
            <h2 className="font-bold text-center">{item.title}</h2>
            <Button>
                <Link to={`/item/${item.id}`} >Ver Mas</Link>
                </Button>
        </div>
    )
}

export default CardProduct