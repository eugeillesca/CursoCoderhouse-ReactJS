import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';

const CartWidget = () => {
    const ctx = useContext(CartContext)
    return (
      <>
      <div className="divnotification" >
          <Link className="notification" to='/cart'>
              <i className="fa fa-shopping-cart"></i>
              {ctx.calcTotalQty()>0 && <span className="badge">{ctx.calcTotalQty()}</span>}
          </Link>
      </div>
      </>
      
  )
}

export default CartWidget;