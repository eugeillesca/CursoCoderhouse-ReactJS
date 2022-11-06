import { useState } from 'react'


//clase 5 (55) :boton y controles 
const ItemCount = ({available_quantity}) => {
    const [cnt, setCnt] = useState(1)
    const restProd = () => {
        if (cnt > 1) {setCnt(cnt - 1)}
    }
    const addProd = () => {
        if (cnt < available_quantity) {setCnt(cnt + 1)}
    }
    const addCart = () => {
        alert("Se han agregado " + cnt +" al carrito")
    }
    
    return (
        <>
        <div>
            <button className="buttonCart" onClick={restProd}>-</button>
            <span>{cnt}</span>
            <button className="buttonCart" onClick={addProd}>+</button>
            <button className="addCart" onClick={addCart}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount