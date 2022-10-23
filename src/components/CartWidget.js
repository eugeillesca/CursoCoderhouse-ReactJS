const CartWidget = (props) => {
    return (
      <>
      <div className="divnotification" >
          <a href="." class="notification">
              <i class="fa fa-shopping-cart"></i>
              {props.cant>0 && <span class="badge">{props.cant}</span>}
          </a>
      </div>
      </>
      
  )


}

export default CartWidget;