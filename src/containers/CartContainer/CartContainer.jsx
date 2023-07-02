import React, { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import "./CartContainer.css"
import "./CartContainer.scss"

const CartContainer = () => {
  let empty = null
 
  const {cart,removeItem, clearCart,subtotal} = useContext(Shop)
  

  if (cart.length <= 0 ) {
    empty = true
    console.log("el carrito esta vacio");
  }else{
    empty = false
    console.log("El carrito esta lleno");
  }
  
  
  return (
    <div className='main'>
      <div className='carditemContainer'>
            <ul>
              <li>Producto</li>
              <li>Descripcion</li>
              <li>Cantidad</li>
              <li>Precio</li>
            </ul>
            
          <div className='cart'>
            
          {empty <= 0  ? 
          cart.map(product =>{ 
        return <div className='divitemCartDetail' key={product.id}>     
                 
                    <div className='divImg'>
                        <img src={product.image} alt="Product" width={"60px"} /> 
                    </div>                 
                    <div className='divTitle'>
                        <p>{product.title}</p>
                    </div>
                    <div className='divCantidad'>
                        <p>{product.quantity}</p>  
                    </div>
                    <div className='divPrice'>
                        <p>${product.price}</p> 
                        
                    </div>
                                                             
                  <button onClick={()=> removeItem(product)}><ion-icon name="trash-outline"></ion-icon></button>                            
                </div>                 
            
                
            }) 
            
            : <div><h1>Carrito Vacio <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg></h1></div>  }
            <button className='button-32' onClick={()=>clearCart()}>Clear Cart</button>
          </div>
      </div>
        <div className='payment'>
          <h2>Card Details</h2>
          <hr />
          <h3>Card Type</h3>
          <div className='divCreditcards'>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i
                        className="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>
          </div>
          <div className='inputDatos'>
             
              <input type="text" placeholder='Enter Your Number'/>
              <input type="text" placeholder='Enter Your E-Mail'/>
              <input type="text" placeholder='Enter Your Addres'/>

              <input type="text" placeholder='Cardholder`s Name'/>
              <input type="text" placeholder='Card Number'/>
                      
          </div>
          <div className='divExpiration'>
                <input type="text" placeholder='Exp'/>
                <input type="text" placeholder='Cvv'/>
          </div>
         <div className='divSubtotal'>
              <div>
                <p>Subtotal</p> 
                <p>${parseInt(subtotal) }</p>
              </div>
              <div>
                <p>Shipping</p> 
                <p>$20</p>
              </div>
              <div>
                <p>Total(Incl. Taxes 10%)</p> 
                <p>${!subtotal <= 0 ? parseInt((subtotal+20)*1.10) : 0}</p>
              </div>
          </div> 
          <div className='divTerms'>
            <input type="checkbox" name="" id="" />
            <a href="">i Agree The Terms And Conditions Of this page..</a>
          </div>
          <button className='btnCheckout button-32'>${!subtotal <= 0 ? parseInt((subtotal+20)*1.10) : 0}<a href='#/'>CheckOut <ion-icon name="arrow-redo-outline"></ion-icon></a></button>
        </div>
    </div>
    
          
              
      
  )
  
}

export default CartContainer



