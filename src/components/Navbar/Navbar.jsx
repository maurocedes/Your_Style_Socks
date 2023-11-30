
import logo from "../../assets/logo.png"
import Cart from "../Cart/Cart"

const Navbar = () => {
    return (
        <div>
            <header className='flex justify-between items-center'>
                <img className='w-40 h-40 my-5' src={logo} alt="alt" />
                <h1 className="font-custom text-slate-200 text-5xl">YOUR STYLE SOCKS</h1>
                <div className="text-slate-200 flex mx-5 gap-4 items-center">
                    <a href="#">Inicio</a>
                    <a href="#">Contacto</a>
                    <Cart/>
                </div>




            </header>


        </div>
    )
}

export default Navbar