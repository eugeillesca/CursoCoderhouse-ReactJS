import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartDetail = () => {
    const ctx = useContext(CartContext)
    
    return (
        <div className='cartDivDetail'>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th> 
                        <th>Subtotal</th> 
                        <th></th> 
                    </tr>
                </thead>
                <tbody>
                    {ctx.cartList.map(item =>
                        (<tr key={item.id}>
                            <th><img src={item.image} alt="" /></th>
                            <th>{item.name}</th>
                            <th>${item.price}</th>
                            <th>{item.qty}</th>
                            <th>${ctx.calcSubtotalbyItem(item.id)}</th>
                            <th><i className="fa fa-trash" onClick={() => ctx.deleteItem(item.id)} title="Eliminar"></i></th>
                        </tr>)
                        
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CartDetail;