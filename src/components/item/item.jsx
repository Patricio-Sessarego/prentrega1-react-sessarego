import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => { //RECIBIMOS EL PRODUCTO POR PROP
    console.log("PRODUCTO: " + producto)
    return(
        <div className="producto">
            <img src={producto.imgUno} alt="Foto Producto" className={`'fotoProducto ${producto.className}`}/>
            <p className="nombreProducto">{producto.nombre}</p>
            <p className="precioProducto">${producto.precio}</p>
            <button className="btnComprar">
                <Link to={`/Item/${producto.id}`} className='linkBtnComprar'>Comprar</Link> {/* LLEVA A ITEM DETAIL DE CADA PRODUCTO */}
            </button>
        </div>
    )
}

export default Item