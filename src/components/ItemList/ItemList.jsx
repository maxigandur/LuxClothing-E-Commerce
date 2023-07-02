import React, {  useState } from 'react'
import Item from '../Item/Item'
import "./ItemList.css"
import ScrollReveal from 'scrollreveal'

const ItemList = ({products}) => {
  /* const sr = ScrollReveal({
    distance:"60px",
    duration:2500,
    delay:400,
    reset:true
  })  
  sr.reveal(".divbodyMain",{delay:500,origin:"top"})
  */

  return (
    <div className='divbodyMain'>
        <div className='divListItems'>           
                {products.map(product =>{
                return <Item key={product.id} product={product}/>   
            })}

        </div>
    </div>
  )
}

export default ItemList