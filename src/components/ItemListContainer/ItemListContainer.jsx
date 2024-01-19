import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"



const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const docsRef = categoryId
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef

        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })


                setProductos(docs)
            })
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <>
            {
                loading
                    ? <h2 className="font-custom text-slate-200 text-3xl text-center">Cargando...</h2>
                    :<div>
                        <h2 className="font-custom text-slate-200 text-3xl text-center">{greeting}</h2>
                        <div className="">
                            <ItemList productos={productos} />

                        </div>
                    </div>
            }
        </>
    )
}

export default ItemListContainer