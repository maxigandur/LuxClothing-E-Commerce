import React from 'react'
import "./Item.css"
import { useNavigate } from 'react-router-dom'

const Item = (product) => {
    const imgPath = product.product.image 
    const navigate = useNavigate()  
    const handleNavigate = ()=>{
      navigate(`/detail/${product.product.id}`)
    }

  return (
    <div >   
     <div className="container d-flex justify-content-center">
     <figure className="card card-product-grid card-lg"> 
        <a href="#" className="img-wrap" data-abc="true">
             <img onClick={handleNavigate} src={imgPath} width={200} alt=''/>
        </a>
         <figcaption className="info-wrap">
             <div className="row">
                 <div className="col-md-9 col-xs-9 divName">
                     <a href="#" className="title" data-abc="true" onClick={handleNavigate}>{product.product.title}</a> 
                 </div>
                 <div className="col-md-3 col-xs-3">
                 </div>                                 
             </div>
         </figcaption>
         <div className="bottom-wrap-payment">
             <figcaption className="info-wrap">
                 <div className="row">
                     <div className="col-md-9 col-xs-9 divProductPrice" > <a href="#" className="title" data-abc="true" >${product.product.price}</a> <span className="rated">VISA Platinum</span> </div>
                     <div className="col-md-3 col-xs-3 divDescr">
                          {/* <div className="rating text-right divDescriptionProduct">Hot Sale! </div>  */}
                     </div>
                 </div>
             </figcaption>
         </div>
         <div className="bottom-wrap"> <a href="#" className="btn btn-primary float-right button-32" data-abc="true" onClick={handleNavigate}> Buy now </a>
             
         </div>
     </figure>
 </div>
      
     
    </div>
  )
}

export default Item