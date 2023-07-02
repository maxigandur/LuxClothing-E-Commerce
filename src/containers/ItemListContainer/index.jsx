import React, { useEffect, useState } from 'react'
import "./styles.css"
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import BannerFooter from '../BannerFooterContainer/BannerFooter'
import Footer from '../../components/Footer/Footer'
/* import Modal from '../../components/Modal/Modal' */
import { db } from '../../firebase/config'

function ItemListConteiner({greeting}) {

  console.log(db)
 /*  const [modalShow, setModalShow] = useState(true) */
  const [productz, setProducts] = useState([])
  //La promise se ejecuta una unica vez cuando se MONTA el Componente 
  const {categoryId} = useParams()
   
  useEffect(() => {

  
    (async ()=>{ 

      //FETCH EN CAMBIO DE CATEGORIA, FILTRO, TRAEMOS SEGUN EL ID DE LA CATEGORIA Y FILTRAMOS LOS PRODUCTOS
    try {
      if (categoryId) {
        const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId)
        const productosFetcheds = await response.json()  
        //importante AWAIT en RESPONSE para no absorber una promesa, sino una respuesta 
        setProducts(productosFetcheds)
      }else{
        const response = await fetch("https://fakestoreapi.com/products")
      //Recibimos los Producots en forma de RESPUESTA, y tenemos que convertirlos a Json para poder trabajarlo en Javascript, Luego seteamos los productos a nuestro ESTADO
      const productosFetcheds = await response.json()  
      //importante AWAIT en RESPONSE para no absorber una promesa, sino una respuesta 
      setProducts(productosFetcheds)
      
      }
            
    } catch (error) {
      console.log(error)
    }     
  })()
  }, [categoryId])

    return (
      <div className='divListContainerMain'>
           
              {/* <h1>{greeting}</h1>  
               {modalShow ? <Modal handleClose={setModalShow}/> : null}    */}
     
              <ItemList products={productz} stock={15}/>     
              <BannerFooter/>   
              <Footer/>     
      </div> 
    )
  }
/* Recibiendo Directamente la Propiedad Greeting, Con destructuring */
export default ItemListConteiner