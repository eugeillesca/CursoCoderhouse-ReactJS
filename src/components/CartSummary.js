import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartSummary = ({createOrder}) => {
    const ctx = useContext(CartContext)
    return (
        <div className='cartDivSummary'>
            <div><h4 className='titleSummary'>Resumen de compra</h4></div>
            <hr></hr>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className='subtotal'>SUBTOTAL: </td>
                            <td>${ctx.calcSubtotal()}</td>
                        </tr>
                    </tbody>
                </table>

                {ctx.cartList.length > 0 && <button onClick={createOrder}>Orden de compra</button> }
            </div>
        </div>
    );
};

export default CartSummary;