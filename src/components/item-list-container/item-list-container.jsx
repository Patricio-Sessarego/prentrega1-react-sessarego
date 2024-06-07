import Item from '../item/item'
import './item-list-container.css'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import { getProductos } from '../../data/asyncmock'

const ItemlistContainer = () => {

    const [productos , setProductos] = useState([]) //ESTADO PARA GUARDAR LOS PRODUCTOS

    const { idCategoria } = useParams() //PARAMETRO => CATEGORIA DEL PRODUCTO

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const res = await getProductos(idCategoria) //ESPERAMOS A QUE SE RESUELVA 'getProductos'
                setProductos(res)
            }catch(err){
                console.error(err)
            }
        }

        fetchProductos()
    }, [idCategoria])

    if (productos.length == 0){ //SI 'productos' ESTA VACIO...
        return(
            <>
                <div className='loadingContainer'>
                    <div className='loadingSpinner'></div>
                    <div className="loadingText">CARGANDO</div>
                </div>
            </>
        )
    }

    return(
        <>
            <div className='productos'>
                {productos.map((prod) => ( //LE MANDAMOS EL PRODUCTO POR PROP Y POR KEY EL ID DEL PRODUCTO
                    <Item  key={prod.id} producto={prod} />
                ))}
            </div>
        </>
    )

}

export default ItemlistContainer