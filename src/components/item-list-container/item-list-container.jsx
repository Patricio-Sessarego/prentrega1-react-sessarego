import './item-list-container.css'
import imgHyperx from '../../assets/cloud-alpha-1.png'

const ItemListContainer = ({ nombreProducto, precioProducto }) => { //RECIBO EL NOMBRE Y EL PRECIO DEL PRODUCTO
    return(
        <div className='productos'>
            <div className="producto">
                <img src={imgHyperx} alt="Foto Producto" className="fotoProducto"/>
                <p className="nombreProducto">{nombreProducto}</p>
                <p className="precioProducto">{precioProducto}</p>
                <a href="#" className="btnComprar">Comprar</a>
            </div>
        </div>
    )
}

export default ItemListContainer