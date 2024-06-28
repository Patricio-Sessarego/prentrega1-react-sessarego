import './App.css'
import { CartProvider } from './context/context'
import NavBar from './components/nav-bar/nav-bar'
import ItemDetail from './components/item-detail/item-detail'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import ItemListContainer from './components/item-list-container/item-list-container'
import CartItemListContainer from './components/cart-item-list-container/cart-item-list-container'

//cd "/d/Coder House/3) react JS/z-backup-proyecto"

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/Item/:idProducto' element={<ItemDetail />} />
            <Route path='/Carrito' element={<CartItemListContainer />} />
            <Route path='/Categoria/:idCategoria' element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )

}

export default App