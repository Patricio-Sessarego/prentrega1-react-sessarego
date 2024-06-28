import './cart-item.css'
import { useContext } from 'react'
import CartContext from '../../context/context'

const CartItem = ({ prod }) => {

    const { restarQuantity , agregarQuantity , removeFromCart } = useContext(CartContext)

    const handleEliminar = (id) => {
        removeFromCart(id)
    }

    const handleAgregarCantidad = (id) => {
        agregarQuantity(id)
    }

    const handleRestarCantidad = (id) => {
        restarQuantity(id)
    }

    return(
        <div className="containerCarrito">
            <div className="imgProductoCarrito">
                <img src={prod.imgUno} alt="" className='imgCarrito' />
            </div>
            <div className="nombreProductoCarrito">
                <p className='nombreCarrito'>{prod.nombre}</p>
            </div>
            <div className="precioProductoCarrito">
                <p className='precioCarrito'>${prod.precio}</p>
            </div>
            <div className="containerCantidadCarrito">
                <button className='btnAgregarCantidadCarrito' onClick={() => handleAgregarCantidad(prod.id)}><i className="bi bi-plus-circle-fill"></i></button>
                    <p className='numeroCantidadCarrito'>{prod.quantity}</p>
                <button className='btnRestarCantidadCarrito' onClick={() => handleRestarCantidad(prod.id)}><i className="bi bi-dash-circle-fill"></i></button>
            </div>
            <div className="btnEliminarCarrito">
                <button className='btnEliminar' onClick={() => handleEliminar(prod.id)}><i className="bi bi-trash3-fill"></i></button>
            </div>
        </div>
    )
}

export default CartItem