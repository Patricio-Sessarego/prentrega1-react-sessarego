import './cart-item-list-container.css'
import { db } from '../../firebase/client'
import CartContext from '../../context/context'
import CartItem from '../cart-item/cart-item'
import { Link, useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { useContext, useState, useEffect } from 'react'

const CartItemListContainer = () => {

    const navegate = useNavigate()

    const [idCompra , setIdCompra] = useState() //ESTADO PARA EL ID DE COMPRA

    const [totalCart , setTotalCart] = useState(0) //ESTADO PARA CALCULAR EL TOTAL

    const { cart , clearCart} = useContext(CartContext) //TRAEMOS EL CARRITO DE 'CartContext'

    useEffect(() => { //CALCULAMOS EL TOTAL CADA VEZ QUE CAMBIA 'cart'
        const total = cart.reduce((acc , prod) => {
            return acc + (prod.precio * prod.quantity)
        }, 0)

        setTotalCart(total)
    }, [cart])

    const confirmarCompra = () => { //CUANDO SE APRETA EL BOTON DE COMPRAR AHORA...
        Swal.fire({
            title: 'FINALIZANDO COMPRA',
            html: `
              <input type="email" id="email" class="swal2-input" placeholder="Email">
              <input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
              <input type="text" id="telefono" class="swal2-input" placeholder="Telefono">
            `,
            focusConfirm: false,
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Submit',
            preConfirm: async () => {
                const email = Swal.getPopup().querySelector('#email').value
                const nombre = Swal.getPopup().querySelector('#nombre').value
                const telefono = Swal.getPopup().querySelector('#telefono').value
      
                if(!email || !nombre || !telefono) {
                    Swal.showValidationMessage('Porfavor, llene todos los campos')
                }

                const data = {
                    buyer: {
                        email: email,
                        nombre: nombre,
                        telefono: telefono,
                    },
                    productos: cart,
                    total: totalCart
                }

                const ordersCollection = collection(db , "orders") //AGARRAMOS LA COLECCION

                try{
                    const { id } = await addDoc(ordersCollection , data) // ESPERAMOS A QUE AGREGUE EL DOCUMENTO
                    setIdCompra(id) //SETEAMOS EL ID

                    return { idCompra: id } //DEVOLVEMOS EL ID COMPRA
                }catch(e){
                    Swal.showValidationMessage(`Error al realizar la compra: ${error}`)

                    return false
                }
            }
        }).then((result) => { //CUANDO SE APRETA EL BOTON DE SUBMIT...
            if(result.isConfirmed && result.value){
                Swal.fire({
                    confirmButtonText: 'OK',
                    title: 'COMPRA REALIZADA!',
                    html: `ESTE ES SU ID DE ORDEN: ${result.value.idCompra}`,
                    allowOutsideClick: false,
                }).then((result) => { //CUANDO SE APRETA EL BOTON DE OK...
                    if(result.isConfirmed){
                        navegate('/') //REDIRECCIONAMOS A HOME
                        clearCart() //VACIAMOS EL CARRITO
                    }
                })
            }
        })
    }

    if(cart.length == 0){
        return(
            <>
                <div className='containerCarritoVacio'>
                    <h2 className="tituloCarritoVacio">Carrito de Compras Vacio</h2>
                    <Link to={'/'} className='linkHome'><i className="bi bi-cart-plus-fill carritoVacio"></i></Link>
                </div>
            </>
        )
    }else{
        return(
            <>
                <h2 className="tituloCarrito">Carrito de Compras</h2>
                <div className='padreContainerCarrito'>
                    {cart.map((prodInCart) => (
                        <CartItem key={prodInCart.id} prod={prodInCart}/>
                    ))}
                </div>
                <h2 className='totalCarrito'>Total | ${totalCart}</h2>
                <button className='btnComprarAhora' onClick={confirmarCompra}>Comprar Ahora</button>
                <Link to={'/'} className='linkHome'><button className='btnSeguirComprando'>Seguir Comprando</button></Link>
            </>
        )
    }
}

export default CartItemListContainer