const CartWidget = (props) => {
    return (
      <>
      <div className="divnotification" >
          <a href="." className="notification">
              <i className="fa fa-shopping-cart"></i>
              {props.cant>0 && <span className="badge">{props.cant}</span>}
          </a>
      </div>
      </>
      
  )


}

export default CartWidget;