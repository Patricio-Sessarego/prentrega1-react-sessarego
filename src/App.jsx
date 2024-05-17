import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import ItemListContainer from './components/item-list-container/item-list-container'

//cd "/d/Coder House/3) react JS/proyecto-react-js"

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer nombreProducto=' Hyperx | Cloud - Alpha ' precioProducto=' 150.000$ '/> {/*LE PASO 'nombreProducto' Y 'precioProducto'*/}
    </>
  )

}

export default App