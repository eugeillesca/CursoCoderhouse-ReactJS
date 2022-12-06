import ItemDetail from "../components/ItemDetail";
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { firebaseFetchOne } from '../utils/firestoreUtils'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        firebaseFetchOne(itemId)
            .then(result => setProductos(result))
            .catch(err => console.log(err))
    }, [itemId])

    return (<>
        <ItemDetail item={productos} />
    </>)
}

export default ItemDetailContainer;

