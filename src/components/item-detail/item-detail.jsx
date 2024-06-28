import './item-detail.css'
import CartContext from '../../context/context'
import { getProductoById } from '../../data/asyncmock'
import { useState , useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ItemDetail = () => {
    const [producto , setProducto] = useState(null) //ESTADO PARA GUARDAR EL PRODUCTO

    const [quantity , setQuantity] = useState(1) //ESTADO PARA GUARDAR LA CANTIDAD

    const { idProducto } = useParams() //PARAMETRO => ID DEL PRODUCTO

    const { addToCart } = useContext(CartContext) //FUNCION DE CART

    const navigate = useNavigate() //PARA REDIRIGIR CON LA ALERT

    useEffect(() => {
        const fetchProducto = async () => {
            try{
                const res = await getProductoById(idProducto) //ESPERAMOS A QUE SE RESUELVA 'getProductoById
                setProducto(res)
            } catch(err){
                console.error(err)
            }
        }

        fetchProducto()
    }, [idProducto])

    if (!producto){ //SI 'producto' ESTA VACIO...
        return(
            <>
                <div className='loadingContainer'>
                    <div className='loadingSpinner'></div>
                    <div className="loadingText">CARGANDO</div>
                </div>
            </>
        )
    }

    const agregarCantidad = () => {
        if(quantity < producto.stock){
            setQuantity(cant => cant + 1)
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
        }
    }

    const restarCantidad = () => {
        if(quantity > 1){
            setQuantity(cant => cant - 1)
        }
    }

    const handleAddToCart = (prod , quantity) => {
        if(addToCart(prod , quantity)){
            Swal.fire({
                icon: "error",
                html: `EL PRODUCTO YA SE ENCUENTRA EN EL CARRITO <i class="bi bi-cart-fill"></i>`,
                confirmButtonText: 'SEGUIR COMPRANDO',
                cancelButtonText: 'IR AL CARRITO',
                showCancelButton: true,
                allowOutsideClick: false,
            }).then((result) => {
                if(result.isConfirmed){
                    navigate('/')
                }else if(result.dismiss === Swal.DismissReason.cancel){
                    navigate('/Carrito')
                }
            })
        }else{
            Swal.fire({
                icon: "success",
                html: `PRODUCTO AGREGADO AL CARRITO <i class="bi bi-cart-fill"></i>`,
                confirmButtonText: 'SEGUIR COMPRANDO',
                cancelButtonText: 'IR AL CARRITO',
                showCancelButton: true,
                allowOutsideClick: false,
            }).then((result) => {
                if(result.isConfirmed){
                    navigate('/')
                }else if(result.dismiss === Swal.DismissReason.cancel){
                    navigate('/Carrito')
                }
            })
        }


        setQuantity(1)
    }

    //PREVIEW DE LAS IMAGENES SECUNDARIAS EN LA IMAGEN PRINCIPAL
    let imgSrc //VARIABLE PARA GUARDAR EL SRC DE 'imgPrincipal'
    let clickEvent //VARIABLE BOOL PARA SABER SI HUBO UN EVENTO CLICK ANTES DEL MOUSEOUT

    function previewImageOnClick(img){
        let imgPrincipal = document.getElementById("imgPrincipal") //AGARRAMOS LA 'imgPrincipal'

        clickEvent = true //SE ACTIVO EL ON CLICK
        imgPrincipal.src = img //LE PASAMOS SU NUEVO SRC
    }

    function previewImgageMouseOut(){
        let imgPrincipal = document.getElementById("imgPrincipal") //AGARRAMOS LA 'imgPrincipal'

        if(clickEvent == false){
            imgPrincipal.src = imgSrc //SI NO HUBO ON CLICK VOLVEMOS A LA 'imgPrincipal' ORIGINAL
        }
    }

    function previewImageMouseOver(img){
        let imgPrincipal = document.getElementById("imgPrincipal") //AGARRAMOS LA 'imgPrincipal'

        clickEvent = false //INICIALIZAMOS LA FLAG EN FALSE
        imgSrc = imgPrincipal.src //GUARDAMOS EL SRC ORIGINAL DE 'imgPrincipal'
        imgPrincipal.src = img //CAMBIAMOS EL SRC DE 'imgPrincipal'
    }

    return(
        <>
            <div className="mainContainer">
                <div className="gridContainer">
                    <img className="imgPrincipal" id='imgPrincipal' src={producto.imgUno} alt="Imagen Producto" />
                    <img className="imgSecundaria imgSecundariaUno" src={producto.imgUno} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto.imgUno)} onMouseOver={() => previewImageMouseOver(producto.imgUno)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaDos" src={producto.imgDos} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto.imgDos)} onMouseOver={() => previewImageMouseOver(producto.imgDos)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaTres" src={producto.imgTres} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto.imgTres)} onMouseOver={() => previewImageMouseOver(producto.imgTres)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaCuatro" src={producto.imgCuatro} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto.imgCuatro)} onMouseOver={() => previewImageMouseOver(producto.imgCuatro)} onMouseOut={() => previewImgageMouseOut()} />
                    <h1 className="productoNombre">{producto.nombre}</h1>
                    <p className="productoPrecio">${producto.precio}</p>
                    <div className='containerCantidad'>
                        <button className='btnAgregarCantidad' onClick={agregarCantidad}><i className="bi bi-plus-circle-fill"></i></button>
                        <p className='numeroCantidad'>{quantity}</p>
                        <button className='btnRestarCantidad' onClick={restarCantidad}><i className="bi bi-dash-circle-fill"></i></button>
                    </div>
                    <button className="containerComprarBtn" onClick={() => handleAddToCart(producto , quantity)}><i className="bi bi-cart-fill comprarBtn"></i></button>
                    <ul className='caracteristicasProducto'>
                        <li className='caracteristica'>{producto.descripcionUno}</li>
                        <li className='caracteristica'>{producto.descripcionDos}</li>
                        <li className='caracteristica'>{producto.descripcionTres}</li>
                        <li className='caracteristica'>{producto.descripcionCuatro}</li>
                        <li className='caracteristica'>{producto.descripcionCinco}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;