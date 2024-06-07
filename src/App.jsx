import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import ItemDetail from './components/item-detail/item-detail'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemListContainer from './components/item-list-container/item-list-container'

//cd "/d/Coder House/3) react JS/z-backup-proyecto"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/Item/:idProducto' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App