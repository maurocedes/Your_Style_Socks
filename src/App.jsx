
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

function App() {

  return (
    <div className='bg-cover bg-fixed bg-center bg-[url("/images/bg-telarana.jpeg")]'>
      <Navbar />
      <ItemListContainer greeting={'Dale a tus pies el estilo que se merece'} />
    </div>
  )
}

export default App
