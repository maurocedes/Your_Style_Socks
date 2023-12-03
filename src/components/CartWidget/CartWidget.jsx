import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
    const notificationCount = 3
    return (
        <div>
            <button className="relative">
                <BsCart4 size={50}/>
                {notificationCount > 0 && (
                    <span className="bg-red-500 text-white rounded-full px-2 absolute top-0 right-0">
                        {notificationCount}
                    </span>
                )}
            </button>
        </div>
    )
}

export default CartWidget