import { useState } from 'react'

const ItemCount = ({available_quantity, onAdd}) => {
    const [cnt, setCnt] = useState(1)
    const restProd = () => {
        if (cnt > 1) {setCnt(cnt - 1)}
    }
    const addProd = () => {
        if (cnt < available_quantity) {setCnt(cnt + 1)}
    }
    

    return (
        <>
        <div>
            <button className="buttonCart" onClick={restProd}>-</button>
            <span>{cnt}</span>
            <button className="buttonCart" onClick={addProd}>+</button>
            <button className="addCart" onClick={() => onAdd(cnt)}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default ItemCount