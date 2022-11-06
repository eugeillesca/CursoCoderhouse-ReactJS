//mostrar vista de detalle de un item : descripcion + foto + precio
import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    return (
        <>
        <h1>{item.name}</h1>
        <div className='tab-contenedor'>
            <div className='tab-prod'>
                <img src={item.image} alt="" />
            </div>
            <div className='tab-prod'>
                <div>
                    
                    <p>{item.description}</p>
                    <div>
                        <h3>$ {item.price}</h3>
                        <h5>Stock: {item.available_quantity}</h5>

                    </div>
                    <ItemCount available_quantity={item.available_quantity}/>
                </div>
                
            </div>
        </div>
        </>

    );
};

export default ItemDetail;