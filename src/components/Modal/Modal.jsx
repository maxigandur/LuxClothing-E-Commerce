import React from 'react'
import "./Modal.css"
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const Modal = ({handleClose}) => {

    useEffect(()=>{
        const handleEsc = (e)=>{
            
            //Esc
            if(e.keyCode === 27){
                console.log("El Modal se Cerrara")
                handleClose(false)
            } 
            if(e.keyCode === 13){
                console.log("Formulario Enviado")
                handleSubmit()
            }
        }

        window.addEventListener("keydown", handleEsc)
        //le tenemos que pasar la funcion como dependencia para que pueda usarla

        return ()=>{
            console.log("Se Desmonto El Modal")
            window.removeEventListener("keydown", handleEsc)
        }
    },[handleClose])


    const handleSubmit = (e)=>{
        //le ponemos el signo de pregunta, por si el evento no existe no ejecuta la funcion esa.
        e?.preventDefault()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tus Datos Se Enviaron Exitosamente!',
            showConfirmButton: false,
            timer: 3000
          })
        handleClose(false)
    }
    
    const onClose = ()=>{   
        handleClose(false)
       
    }
    
  return (
    <div className='divContainer'>
        <form className='modal-container' onSubmit={handleSubmit}>
            <h2 className='title'>Newsletter</h2>
            <p className='body'>Desea Recibir Notificaciones Via Mail o Telefono Las novedades de Nuevos Productos y/o reingresos?</p>   
                <div className='divSubmit'>
                    <input placeholder='Ingrese Mail o Numero Telefonico'></input>
                    <button className='btnSubmit' type='submit' onClick={handleSubmit}>Enviar</button>
                </div>        
                <img className='img' src="" alt="" />
                <button className='btnCancel' type='button' onClick={onClose}><ion-icon name="close-circle-outline"></ion-icon></button>   
                                  
        </form>
    </div>
  )
}

export default Modal