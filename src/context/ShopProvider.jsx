import { createContext, useState } from "react";
import React from 'react'

//primero declarar el contexto
export const Shop = createContext(null)


//paso 2, crear el provider (poveedor) que me envolvera la app

const ShopProvider = ({children}) => {

//Dentro del context van : estados, efectos y funciones auxiliares  

  const [cart, setCart] = useState([])
  let [subtotal, setSubtotal] = useState(0)
  
  const addItem = (item) =>{ 
    const productoRepetido = isInCart(item.id)
    if (productoRepetido) {
      const cartModified2 = cart.map(product =>{
        if(product.id === item.id){
          product.quantity += item.quantity
          return product
        }
        return product
      })
      setCart(cartModified2)
    }else{
      const cartModificado = [...cart, item]
      setCart(cartModificado)
    }
  }

  const isInCart = (id)=>{
    return cart.some(product => product.id === id)
  }

  const removeItem = (itemToRemove)=>{
      const filteredProduct = cart.filter(item => item !== itemToRemove)
      const montoarestar = parseInt(itemToRemove.quantity * itemToRemove.price)
      console.log(montoarestar);
      if (subtotal < 0) {
          subtotal = 0
      }
      setSubtotal((subtotal - montoarestar))
      setCart(filteredProduct)
      
  }   
  const clearCart = ()=>{
      setCart([])
  }

  const subtotalAdd = (balance)=>{    
    subtotal += balance
    setSubtotal(subtotal)
  }
  

  return (
    <Shop.Provider value={{ cart, addItem, removeItem, clearCart, subtotalAdd, subtotal}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider