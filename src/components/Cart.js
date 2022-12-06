import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { collection, increment, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, updateDoc  } from "firebase/firestore"; 
import { db } from '../utils/firebaseConfig';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom'
import CartDetail from './CartDetail';



const Cart = () => {

    const ctx = useContext(CartContext)

    const createOrder = () => {
        //creo un objeto
        let order = {
            buyer: {
                name: "Euge Illesca",
                email:"eillesca@gmail.com",
                phone:'3155123456'
            },
            date: serverTimestamp(),
            items: ctx.cartList.map(item => ({
                id: item.id,
                title: item.name,
                price: item.price,
                quantity: item.qty
            })),
            total: ctx.calcSubtotal()
        }

        const createOrderInDB = async() => {
            const newOrderRef = doc(collection(db, 'orders'))
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrderInDB()
        .then(response => {
            //estado global para lee la qty
            ctx.cartList.forEach(async (element) => {
                const itemRef = doc(db, "products", element.id);

                await updateDoc(itemRef, {
                    available_quantity: increment(-element.qty)
                  });
            });
            alert("Se creo la orden de compra Nro  " + response.id + " .");

            ctx.clearCart()
        })
        .catch(err => console.log(err))
       
    }


    return (
        <>
        <div>  
            { ( ctx.cartList.length > 0 )
                ? <h1>Mi carrito</h1>
                : <>
                    <h5 className='cart'>Tu carrito esta vacio</h5>
                    <Link to='/'>
                        <button>Volver a la tienda</button>
                    </Link>
                </>
                }
            {
                ctx.cartList.length > 0 && 
                <div className='cartDivContainer'>
                    <CartDetail />
                    <CartSummary createOrder={createOrder}/>
                </div>
                
            }
        </div>
        {ctx.cartList.length > 0 && <button onClick={ctx.clearCart}>Vaciar carrito</button>}

        </>
    );
};

export default Cart;