import ItemDetail from "../components/ItemDetail";
import { products } from "../utils/products";
import React, { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';
import {useParams} from 'react-router-dom'



const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        customFetch(100, products.find(item => item.id === itemId))
            .then(result => setProductos(result))
            .catch(err => console.log(err))
    }, [itemId])

    return (<>
        <ItemDetail item={productos} />
    </>)
}

export default ItemDetailContainer;

