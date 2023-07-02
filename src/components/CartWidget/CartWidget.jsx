import React from 'react'
import "./CartWidget.css"
import {MdShoppingCartCheckout} from "react-icons/md"
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <>
      {/* <ion-icon name="cart-outline" id="cart-Widget"></ion-icon>  */}
      <Link to="/cart/#"><MdShoppingCartCheckout id="cart-Widget"/></Link>
     </>
  )
}

export default CartWidget