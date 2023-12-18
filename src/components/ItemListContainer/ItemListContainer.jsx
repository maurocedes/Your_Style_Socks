import { useState, useEffect } from "react"
import { pedirDatos } from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const {categoryId} = useParams() 
    

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                // console.log(data)
                const items = categoryId
                    ? data.filter(prod => prod.category === categoryId)
                    : data
                // console.log(categoryId)
                setProductos(items)
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            {
                loading
                    ? <h2 className="font-custom text-slate-200 text-3xl text-center">Cargando...</h2>
                    : <div>
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