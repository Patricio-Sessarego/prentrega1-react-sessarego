import './item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => { //RECIBIMOS EL PRODUCTO POR PROP
    return(
        <div className={`producto ${producto.className}`}> {/* FALTA AGREGAR LA CLASE 'producto-1/2/3/4/5/6 => ASI ${producto.className} */}
            <img src={producto.imgUno} alt="Foto Producto" className={`fotoProducto`}/>
            <p className="nombreProducto">{producto.nombre}</p>
            <p className="precioProducto">${producto.precio}</p>
            <button className="btnComprar">
                <Link to={`/Item/${producto.id}`} className='linkBtnComprar'>Comprar</Link> {/* LLEVA A ITEM DETAIL DE CADA PRODUCTO */}
            </button>
        </div>
    )
}

export default Item