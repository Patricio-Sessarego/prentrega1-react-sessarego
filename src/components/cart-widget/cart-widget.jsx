import './cart-widget.css'
import { useContext } from 'react'
import CartContext from '../../context/context'

const CartWidget = () => {

    const { cart } = useContext(CartContext) //TRAEMOS EL CARRITO

    return(
        <>
            <button className="logoCarrito nav-link itemNav" id="logoCarrito">
                <i className="bi bi-cart-fill carritoNavBar"></i>
                <span className="cantidadCarrito">{cart.length}</span> {/* INDICAMOS EL TAMAÑO DEL CARRITO */}
            </button>
        </>
    )

}

export default CartWidget