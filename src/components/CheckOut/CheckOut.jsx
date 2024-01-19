import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Button from "../Button/Button";
import { Link } from "react-router-dom";


const CheckOut = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            cliente: values,
            item: cart.map(item => ({
                cantidad: item.cantidad,
                title: item.title,
                id: item.id,
                price: item.price
            })),
            total: totalCart(),
            fecha: new Date()
        }

        const ordersRef = collection(db, 'orders')
        addDoc(ordersRef, order).then((doc) => {
            setOrderId(doc.id)
            clearCart()
        });
        
    }

    if (orderId) {
        return (<div className="container m-6">
            <h2 className="font-custom text-slate-200 text-5xl">Gracias por tu compra</h2>
            <hr />
            <p className="font-custom text-slate-200">Tu código de orden es: {orderId}</p>
            <Button><Link to={"/"}>Volver al inicio</Link> </Button>
        </div>
        )

    }


    return (
        <div className="container m-6">
            <h2 className="font-custom text-slate-200 text-5xl">Checkout</h2>
            <hr />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mt-4">
                <input
                    className="border p-2"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    name="nombre"
                    required
                />

                <input
                    className="border p-2"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={values.email}
                    name="email"
                    required
                />

                <input
                    className="border p-2"
                    type="text"
                    placeholder="Direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    name="direccion"
                    required />
                <button className="bg-red-800 hover:bg-red-950 text-black border-2 border-black p-2 rounded font-bold">Enviar</button>
            </form>
        </div>
    )
}

export default CheckOut