import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {itemsInCart} =useContext(CartContext)
    return (
        <div>
            <Link to={"/cart"} className="relative">
                <BsCart4 size={50}/>
                
                    <span className="bg-red-500 text-white rounded-full px-2 absolute top-0 right-0">
                        {itemsInCart()}
                    </span>
                
            </Link>
        </div>
    )
}

export default CartWidget