import React, { useContext, useState } from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'

const ItemDetail = ({product}) => {

    
    let balance = 0
  const [qty, setQty] = useState(0)
  const navigate = useNavigate()
  const {addItem} = useContext(Shop)
  const {subtotalAdd} = useContext(Shop)
  const agregarAlCarrito = (quantity)=>{     
    setQty(quantity)
  }
  
  const handleFinish = ()=>{
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    console.log(productToSave.price * qty);
    
    balance +=  (productToSave.price  * qty)  
    subtotalAdd(parseInt(balance))
    navigate("/cart/")   
  }
  
  return (
    <div className="container d-flex justify-content-center imgDetail" >
     <figure className="card card-product-grid card-lg carddet"> <a href="#" className="img-wrap" data-abc="true"> <img src={product.image} /> </a>
         <figcaption className="info-wrap">
             <div className="row">
                 <div className="col-md-9 col-xs-9"> <a href="#" className="title" data-abc="true">{product.title}</a> </div>
                 <div className="col-md-3 col-xs-3">
                     <div className="rating text-right"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> 
                     <h2>Stock:{product.stock}</h2>  </div>
                 </div>
             </div>
         </figcaption>
         <div className="bottom-wrap-payment">
             <figcaption className="info-wrap">
                 <div className="row rowprice">
                     <div className="col-md-9 col-xs-9 divProductPrice"><a href="#" className="title" data-abc="true" >${product.price}</a> <span className="rated">VISA Platinum</span>  </div>
                      
                     <div className="col-md-3 col-xs-3 divDescr">                       
                         <div className="rating text-right divDescriptionProduct"> {product.description}  </div> 
                                              
                     </div>
                 </div>
             </figcaption>
         </div>
         {qty ? <button onClick={handleFinish} className='button-32'>Finalizar Compra</button> : <ItemCount initial={1} stock={15} onAdd={agregarAlCarrito}/>}
         <div className="bottom-wrap"> 
             <div className="price-wrap"> 
                <a href="/" className="btn btn-warning float-center button-32" data-abc="true"> Cancel </a>
             </div>        
         </div>
     </figure>
     
 </div>
    
  )
}
{/* <div classNameName='divDetail'>
        <h1 >{product.title}</h1>
        <img src={product.image} alt="" width="500px"/>
        <h2>{product.description}</h2>
        <h1 classNameName='price'>${product.price}</h1>
        {qty ? <button onClick={handleFinish}>Finalizar Compra</button> : <ItemCount initial={1} stock={15} onAdd={agregarAlCarrito}/>}
    </div> */}
export default ItemDetail