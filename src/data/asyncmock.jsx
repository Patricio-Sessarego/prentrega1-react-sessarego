import { db } from '../firebase/client'
import { collection , doc, getDoc, getDocs , query , where } from 'firebase/firestore'

export const getProductos = (idCategoria) => {
    if(idCategoria !== undefined){ //DEVUELVE LOS PRODUCTOS POR CATEGORIA
        const productosFilterRef = query(
            collection(db, "productos"),
            where("categoria" , "==" , idCategoria)
        )

        return new Promise((resolve , reject) => {
            setTimeout(() => {
                getDocs(productosFilterRef)
                .then(snapshot => {
                    if(snapshot.size > 0){
                        const arrayProductos = snapshot.docs.map(doc => ( {id: doc.id, ...doc.data()} ))
                        resolve(arrayProductos)
                    }else{
                        reject("NO HAY DATOS")
                    }
                })
            }, 2000)
        })
    }else{
        return new Promise((resolve , reject) => { //DEVUELVE TODOS LOS PRODUCTOS

            const productosRef = collection(db , "productos")
            setTimeout(() => {
                getDocs(productosRef)
                .then(snapshot => {
                    if(snapshot.size > 0){
                        const arrayProductos = snapshot.docs.map(doc => ( {id: doc.id, ...doc.data()} ))
                        resolve(arrayProductos)
                    }else{
                        reject("NO HAY DATOS")
                    }
                })
            }, 2000)
        })
    }
}

export const getProductoById = (idProducto) => { //FUNCION QUE DEVUELVE UN PRODUCTO POR ID

    let productoRef = doc(db , "productos" , idProducto)

    return new Promise((resolve , reject) => {
        setTimeout(() => {
            getDoc(productoRef)
            .then(snapshot => {
                if(snapshot.exists()){
                    const prod = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    resolve(prod)
                }else{
                    reject("NO HAY DATOS")
                }
            })
        }, 2000)
    })

}