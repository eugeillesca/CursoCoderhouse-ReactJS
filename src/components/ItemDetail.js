import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const ctx = useContext(CartContext)
    const [cnt, setCnt] = useState(0)

    const onAdd = (qty) => {
        alert("Ha seleccionado " + qty + " items.");
        ctx.addToCart(item, qty)
        setCnt(qty)
    }

    return (
        <>
        <div><h1>{item.name}</h1></div>
        <div className='tab-contenedor'>
            <div className='tab-prod'>
                <img src={item.image} alt="" />
            </div>
            <div className='tab-prod'>
                <div>
                    <h5>Descripcion del producto</h5>
                    <hr className='hr'/>
                    <p>{item.description}</p>
                    <div>
                        <h3>$ {item.price}</h3>
                        <h5>Stock: {item.available_quantity}</h5>

                    </div>
                    { cnt === 0 
                    ? <ItemCount key={item.id} available_quantity={item.available_quantity} onAdd={onAdd}/>
                    : <Link className="notification" to='/cart'>
                        <button>Checkout</button>
                    </Link>
                    }
                </div>
                
            </div>
        </div>
        </>

    );
};

export default ItemDetail;