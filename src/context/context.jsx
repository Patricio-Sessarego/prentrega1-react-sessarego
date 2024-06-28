import { createContext, useState } from "react";

//CONTEXT DEL CARRITO
const CartContext = createContext()

//PROVEEDOR DEL CONTEXT
export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState([])

    //VACIAR CARRITO
    const clearCart = () => {
        setCart([])
    }

    //AGREGAR AL CARRITO
    const addToCart = (producto , quantity) => {

        const prodInCart = cart.find((prod) => prod.id == producto.id)

        if(prodInCart){
            return true
        }else{
            setCart([...cart, {...producto, quantity: quantity}])

            return false
        }
        
    }

    //ELIMINAR DEL CARRITO
    const removeFromCart = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))

        Swal.fire({
            icon: "success",
            html: `PRODUCTO ELIMINADO DEL CARRITO <i class="bi bi-cart-fill"></i>`,
            confirmButton: true,
            allowOutsideClick: false,
        })
    }

    //RESTAR CANTIDAD DEL PRODUCTO
    const restarQuantity = (id) => {
        setCart(
            cart.map((prod) => {
                if(prod.id == id){
                    if(prod.quantity > 1){
                        return{...prod, quantity: prod.quantity - 1}
                    }else{
                        removeFromCart(id)

                        return null //DEVOLVEMOS NULL PARA ELIMINAR EL PRODUCTO DEL MAP
                    }
                }else{
                    return prod
                }
            }).filter(Boolean) //USAMOS .filter PARA ELIMINAR ELEMENTOS NULL DEL ARRAY
        )
    }

    //AGREGAR CANTIDAD DEL PRODUCTO
    const agregarQuantity = (id) => {
        setCart(
            cart.map((prod) => {
                if(prod.id == id){
                    if(prod.quantity < prod.stock){
                        return{...prod, quantity: prod.quantity + 1}
                    }else{
                        Toastify({
                            text: 'NO HAY MAS STOCK DEL PRODUCTO',
                            position: "left",
                            gravity: "top",
                            duration: 2000,
                            style: {
                                background: "red",
                                color: "white"
                            },
                            offset: {
                                y: 200
                            },
                            escapeMarkup: false //PERMITE QUE EL HTML DENTRO DEL TEXTO SE CONVIERTA EN HTML
                        }).showToast()

                        return prod
                    }
                }else{
                    return prod
                }
            })
        )
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                clearCart,
                addToCart,
                removeFromCart,
                restarQuantity,
                agregarQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;