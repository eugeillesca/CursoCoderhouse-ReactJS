import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList'
import {useParams} from 'react-router-dom'
import { firebaseFetch } from '../utils/firestoreUtils'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{
        firebaseFetch(categoryId)
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    }, [categoryId])

    return (
        <div className='content'>
            <ItemList items={productos}></ItemList>
        </div>
    );
};

export default ItemListContainer;