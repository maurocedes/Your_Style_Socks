
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CardProduct = ({ item }) => {
    return (
        <div key={item.id} className="flex flex-col w-60 gap-2 p-2 rounded-lg items-center justify-between transform transition-transform duration-300 ease-in-out hover:scale-110">
            <img className="rounded-lg h-72 border-2 border-black shadow-md shadow-white" src={item.thumbnail} alt={item.title} />
            <h2 className="font-bold text-center text-slate-200">{item.title}</h2>
            {item.stock === 0
                ? <p className="text-slate-200">Agotado!</p>
                : item.stock === 1
                    ? <p className="text-slate-200">Ultima unidad disponible</p>
                    : item.stock <= 5 && <p className="text-center text-slate-200" > Últimas {item.stock} unidades disponibles</p>
            }




            <Button>
                <Link to={`/item/${item.id}`} >Ver Mas</Link>
            </Button>
        </div>
    )
}

export default CardProduct