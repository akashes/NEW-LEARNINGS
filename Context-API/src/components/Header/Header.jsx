import {  useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/Cart/CartContext"
import './Header.css'

const Header = () => {
   const {cartCount}= useContext(CartContext)
 
  return (
    <div>
        <header className="text-center text-primary  fw-bold  " > 
        <span   className=" badge ">{cartCount}</span>
        </header>
      
      <img src="askjfhjsd.fkasdhf.fjasd" alt="" />
    </div>
  )
}

export default Header
