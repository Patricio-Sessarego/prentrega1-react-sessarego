import './item-detail.css'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { getProductoById } from '../../data/asyncmock'

const ItemDetail = () => {
    const [producto, setProducto] = useState(null) //ESTADO PARA GUARDAR EL PRODUCTO

    const { idProducto } = useParams() //PARAMETRO => ID DEL PRODUCTO

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
                    <img className="imgPrincipal" id='imgPrincipal' src={producto[0].imgUno} alt="Imagen Producto" />
                    <img className="imgSecundaria imgSecundariaUno" src={producto[0].imgUno} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto[0].imgUno)} onMouseOver={() => previewImageMouseOver(producto[0].imgUno)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaDos" src={producto[0].imgDos} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto[0].imgDos)} onMouseOver={() => previewImageMouseOver(producto[0].imgDos)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaTres" src={producto[0].imgTres} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto[0].imgTres)} onMouseOver={() => previewImageMouseOver(producto[0].imgTres)} onMouseOut={() => previewImgageMouseOut()} />
                    <img className="imgSecundaria imgSecundariaCuatro" src={producto[0].imgCuatro} alt="Sub Imagen Producto" onClick={() => previewImageOnClick(producto[0].imgCuatro)} onMouseOver={() => previewImageMouseOver(producto[0].imgCuatro)} onMouseOut={() => previewImgageMouseOut()} />
                    <h1 className="productoNombre">{producto[0].nombre}</h1>
                    <p className="productoPrecio">${producto[0].precio}</p>
                    <button className="containerComprarBtn"><a href="#" className="comprarBtn">Comprar</a></button>
                    <ul className='caracteristicasProducto'>
                        <li className='caracteristica'>{producto[0].descripcionUno}</li>
                        <li className='caracteristica'>{producto[0].descripcionDos}</li>
                        <li className='caracteristica'>{producto[0].descripcionTres}</li>
                        <li className='caracteristica'>{producto[0].descripcionCuatro}</li>
                        <li className='caracteristica'>{producto[0].descripcionCinco}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;