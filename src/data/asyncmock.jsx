import imgProdDos from '../assets/hammerhead.png' //IMG DE UN PRODUCTO
import imgProdUno from '../assets/cloud-alpha-1.png' //IMG DE UN PRODUCTO
import imgProdTres from '../assets/steelseries-apex-pro.png' //IMG DE UN PRODUCTO
import imgProdCuatro from '../assets/razer-huntsman-mini.png' //IMG DE UN PRODUCTO
import imgProdCinco from '../assets/finalmouse-ultralight.png' //IMG DE UN PRODUCTO
import imgProdSeis from '../assets/logitech-pro-superlight.png' //IMG DE UN PRODUCTO
import imgProdDetailDos from '../assets/cloud-alpha-2.png' //SUB-IMG DE UN PRODUCTO
import imgProdDetailTres from '../assets/cloud-alpha-3.png' //SUB-IMG DE UN PRODUCTO
import imgProdDetailcuatro from '../assets/cloud-alpha-4.png' //SUB-IMG DE UN PRODUCTO

const listaProductos = [ //ARRAY DE OBJETOS CON CADA PRODUCTO
    {
        id: 1,
        precio: 150000,
        imgUno: imgProdUno,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-1",
        categoria: "Auriculares",
        nombre: "Hyperx | Cloud - Alpha",
        descripcionUno: "Calidad de sonido superior",
        descripcionDos: "Diseño estilizado y atractivo",
        descripcionTres: "Control de audio en cable",
        descripcionCuatro: "Micrófono desmontable",
        descripcionCinco: "Sonido envolvente",
    },
    {
        id: 2,
        precio: 120000,
        imgUno: imgProdDos,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-2",
        categoria: "Auriculares",
        nombre: "Razer | Hammerhead",
        descripcionUno: "Cable reforzado para mayor durabilidad",
        descripcionDos: "Micrófono con cancelación de ruido",
        descripcionTres: "Compatibilidad multiplataforma",
        descripcionCuatro: "Sonido envolvente inmersivo",
        descripcionCinco: "Diseño ergonómico y ligero",
    },
    {
        id: 3,
        precio: 300000,
        imgUno: imgProdTres,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-3",
        categoria: "Teclados",
        nombre: "Steelseries | Apex - Pro",
        descripcionUno: "Software de configuración avanzada para macros y perfiles personalizados",
        descripcionDos: "Teclas mecánicas ajustables",
        descripcionTres: "Retroiluminación personalizable por tecla",
        descripcionCuatro: "Construcción de aluminio de alta calidad",
        descripcionCinco: "Descanso de muñeca magnético incluido",
    },
    {
        id: 4,
        precio: 140000,
        imgUno: imgProdCuatro,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-4",
        categoria: "Teclados",
        nombre: "Razer | Huntsman Mini",
        descripcionUno: "Tecnología de switches óptico-mecánicos para una actuación rápida y precisa",
        descripcionDos: "Durabilidad y resistencia probadas para una vida útil prolongada",
        descripcionTres: "Retroiluminación RGB personalizable",
        descripcionCuatro: "Teclas programables para macros y atajos",
        descripcionCinco: "Diseño compacto y portátil",
    },
    {
        id: 5,
        precio: 200000,
        imgUno: imgProdCinco,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-5",
        categoria: "Mouses",
        nombre: "FinalMouse | Ultralight",
        descripcionUno: "Forma ergonómica para un agarre cómodo",
        descripcionDos: "Sensor óptico de alta precisión",
        descripcionTres: "Cable trenzado para una menor fricción y mayor durabilidad",
        descripcionCuatro: "Botones programables",
        descripcionCinco: "Diseño ultraligero para un movimiento ágil y preciso",
    },
    {
        id: 6,
        precio: 160000,
        imgUno: imgProdSeis,
        imgDos: imgProdDetailDos,
        imgTres: imgProdDetailTres,
        imgCuatro: imgProdDetailcuatro,
        className: "producto-6",
        categoria: "Mouses",
        nombre: "Logitech | Pro Superlight",
        descripcionUno: "Sensor HERO 25K de última generación",
        descripcionDos: "Construcción ultraligera para movimientos rápidos y precisos",
        descripcionTres: "Batería de larga duración y carga rápida mediante USB-C",
        descripcionCuatro: "Diseño ambidiestro y ergonómico para un agarre cómodo",
        descripcionCinco: "Botones mecánicos con una respuesta táctil precisa",
    }
]

export const getProductos = (idCategoria) => {

    if(idCategoria !== undefined){ //DEVUELVE LOS PRODUCTOS POR CATEGORIA
        const categoriaProductos = listaProductos.filter(prod => prod.categoria === idCategoria)

        return new Promise((resolve , reject) => {
            setTimeout(() => {
                categoriaProductos.length > 0 ?
                    resolve(categoriaProductos)
                    :
                    reject("NO HAY DATOS")
            }, 2000)
        })
    }else{
        return new Promise((resolve , reject) => { //DEVUELVE TODOS LOS PRODUCTOS
            setTimeout(() => {
                listaProductos.length > 0 ?
                    resolve(listaProductos)
                    :
                    reject("NO HAY DATOS")
            }, 2000)
        })
    }
}

export const getProductoById = (idProducto) => { //FUNCION QUE DEVUELVE UN PRODUCTO POR ID
    let productoFiltrado = []

    listaProductos.forEach(producto => {
        if(producto.id == idProducto){
            productoFiltrado.push(producto)
        }
    })

    return new Promise((resolve , reject) => {
        setTimeout(() => {
            productoFiltrado.length > 0 ?
                resolve(productoFiltrado)
                :
                reject("NO HAY DATOS")
        }, 2000)
    })
}