
import './App.css'
import { Contact } from './components/Contact/Contact'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailConntainer'
import ItemList from './components/ItemList/ItemList'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen bg-cover bg-fixed bg-center bg-[url("/images/bg-telarana.jpeg")]'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'El mejor lugar para llevar tu estilo al siguiente nivel'} />}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
