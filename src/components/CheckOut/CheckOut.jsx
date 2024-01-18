import { useState } from "react"


const CheckOut = () => {

    const [values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: "",
    });

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
        console.log(values)
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