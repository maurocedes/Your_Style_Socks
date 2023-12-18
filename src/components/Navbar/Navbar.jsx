
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"

const navLink = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Medias',
        href: '/productos/medias',
    },
    {
        label: 'Ropa Interior',
        href: '/productos/ropa-interior',
    },
    {
        label: 'Contacto',
        href: '/contacto',
    },
]


const Navbar = () => {
    return (
        <div>
            <header className='flex justify-between items-center'>
                <img className='w-40 h-40 my-5' src={logo} alt="alt" />
                <h1 className="font-custom text-slate-200 text-5xl">YOUR STYLE SOCKS</h1>
                <div className="text-slate-200 flex mx-5 gap-4 items-center">
                    {
                        navLink.map((navLink) => (
                            <Link key={navLink.href} to={navLink.href} className="font-custom text-slate-200" >{navLink.label}</Link>
                        ))
                    }

                    <CartWidget />
                </div>
            </header>
        </div>
    )
} 

export default Navbar