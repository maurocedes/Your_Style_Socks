import { useEffect, useState } from "react";
// import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((docSnapshot) => {
                const doc = {
                    ...docSnapshot.data(),
                    id: docSnapshot.id
                }
                setItem(doc)
            })
            .finally(() =>  setLoading(false))

        // pedirDatos()
        //     .then((data) => {
        //         setItem(data.find(prod => prod.id === Number(itemId)))
        //     })
        //     .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? (
                <h2 className="font-custom text-slate-200 text-3xl text-center">Cargando...</h2>
            ) : (
                <div className="flex flex-wrap gap-4 p-5 justify-evenly" ><ItemDetail item={item } /></div>
                
            )}
        </>
    );
};

export default ItemDetailContainer;