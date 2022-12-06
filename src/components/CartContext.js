import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([])


    //funciones globales

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList, 
                {id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                qty: qty
                }
            ]) 
        }
        else {
            found.qty += qty;
            setCartList([
                ...cartList
            ])
        }
    }
    // no tiene que duplicar objetos primero find y si no existe lo agrego sino le sumo la cant

    const clearCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        let nuevoarray = cartList.filter(item => item.id !== id)
        setCartList(nuevoarray)
    }

    const calcTotalQty = () => {
        let totalQty = cartList.map(item => item.qty)
        return (totalQty.reduce( (previousValue, currentValue) => previousValue + currentValue, 0))
    }

    const calcSubtotalbyItem = (itemId) => {
        let cartItem = cartList.find(product => product.id === itemId);
        return (cartItem.qty * cartItem.price)
    }

    const calcSubtotal = () => {
        let totalPerItem = cartList.map(item => calcSubtotalbyItem(item.id));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
        
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clearCart, deleteItem, calcTotalQty, calcSubtotalbyItem, calcSubtotal }}>
            {props.children}

        </CartContext.Provider>
    )
}

export default CartContextProvider;