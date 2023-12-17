
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen bg-cover bg-fixed bg-center bg-[url("/images/bg-telarana.jpeg")]'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
      </Routes>
      <ItemListContainer greeting={'Dale a tus pies el estilo que se merece'} />
      </BrowserRouter>
    </div>
  )
}

export default App
