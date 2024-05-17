import './cart-widget.css'

const CartWidget = () => {
    return(
        <>
            <button className="logoCarrito nav-link itemNav" id="logoCarrito">
                <i class="bi bi-cart-fill carritoNavBar"></i>
                <span className="cantidadCarrito">1</span>
            </button>
        </>
    )
}

export default CartWidget