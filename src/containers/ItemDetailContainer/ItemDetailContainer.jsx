import React, { useEffect, useState } from 'react'
import ItemListDetails from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

function ItemDetailContainer({greeting}) {

  const [productFetch, setProducts] = useState({})
  //La promise se ejecuta una unica vez cuando se MONTA el Componente 

  const {productId} = useParams()
  
  //Utilizamos Useparams, de Routes Para recibir el productId, y lo pasamos al Fetch dentro del useeffect como parametro para ir cambiando el Detalle de
   
  useEffect(() => {
    (async ()=>{ 
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
      const productosFetcheds = await response.json()   
      setProducts(productosFetcheds)           
      } catch (error) {
        console.log(error)
      }     
    })()
  }, [productId])

    return (   
          <div className='itemdetailContainer'>  
              <div className='divdetailInside'>
                  <ItemListDetails product={productFetch}/>                    
              </div>      
          </div>     
          )
  }

export default ItemDetailContainer