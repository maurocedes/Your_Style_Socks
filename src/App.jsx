
import './App.css'
import { Contact } from './components/Contact/Contact'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConntainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartContext, CartContextProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'

function App() {

  // bg-[url("/images/telarana-bg.avif")]

  return (
    <div className='min-h-screen bg-cover bg-fixed bg-center bg-gradient-to-r from-red-950 to-zinc-950'>
      <CartContextProvider>

        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'El mejor lugar para llevar tu estilo al siguiente nivel'} />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/cart' element={<CartView/>}/>
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>

        </BrowserRouter>
        
      </CartContextProvider>
    </div>
  )
}

export default App
