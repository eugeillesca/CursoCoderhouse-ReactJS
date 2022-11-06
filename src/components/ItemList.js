import React from 'react';
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {
    return (
        <>
        {items.map(item => (
        <div className='element'>
            <div>
                <div>
                    <h4>
                        <Link to={`/item/${item.id}`}>{item.name}</Link></h4>
                    <div>
                        <h3>$ {item.price}</h3>
                        <h5>Stock: {item.available_quantity}</h5>

                    </div>
                </div>
                
            </div>
            <div>
                <img width="224px" src={item.image} alt="" />
            </div>
        </div>
        ))}
        </>
    );
};

export default ItemList;