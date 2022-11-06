import React, { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
import ItemList from '../components/ItemList'
// import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{
        if (categoryId === undefined) {
            customFetch(2000, products)
            .then(result => setProductos(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, products.filter(item => item.category_name === categoryId))
            .then(result => setProductos(result))
            .catch(err => console.log(err))
        }
        
    }, [categoryId])

    return (
        <div className='content'>
            <ItemList key={productos.id} items={productos}></ItemList>
        </div>

        
    );
};

export default ItemListContainer;