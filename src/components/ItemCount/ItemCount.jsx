import React, { useEffect, useState } from 'react'
import "./styles.css"

const ItemCount = ({stock , initial, onAdd}) => {

    const [count, setCount] = useState(1)

    const handleAdd = ()=>{
       
            setCount(count + 1)            
                    
    }
    const handleRest = ()=>{
        if (count > 0) {
            setCount(count - 1)
            
        }else{
            alert("Debes Agregar mas de 1 Producto")
        }        
    }
    
    //si tenemos mas de 2 estados que modificar, lo tenemos que hacer en una funcion flecha para modificar, en este caso le pasamos la suma con el contador, y aparte volvemos a 1 el contador de productos, para seguis con las compras del usuario.
     const addCart = ()=>{
        onAdd(count)
        setCount(initial)
    } 
    //MONTAJE DEL COMPONENTE    
    useEffect(()=>{
        //EL ARRAY DE DEPENDENCIAS VACIO IMPLICA QUE EL CALLBACK, SE EJECUTARA CAUDNO SE MONTA EL COMPONENTE POR UNICA VEZ

        /* console.log("Se monto El ItemCount") */
    },[])

    //Actualizacion del Componente
    
    useEffect(()=>{
    //la funcion Callback dentro del useeffect se ejecutara cuando se MONTE el componente, y cuando se ACTUALIZE el valor del estado "Count" en este caso

        /* console.log("Se Actualizo el Estado") */
    }, [count])

  return (
    <div className='divcontadorproductoDetail'>
       <h2>{count}</h2>   
       <div className='divbtnDetail'>
            <button className='button-32' onClick={handleAdd}>+</button>
            <button className='button-32' onClick={handleRest}>-</button>  
       </div> 
       {/* /* El valor al llamar solo una funcion por parametro "onAdd" nos devuelve el evento completo, entonces no podemos ver el valor que queremos, en este caso el numero que selecciono el usuario, por ende tenemos que apuntar a la funcion con una Arrowfunction y entre parentesis el valor que queremos tomar "count" en este caso */  }   
       <button className='button-32' onClick={addCart}>Agregar Al Carrito</button>
    </div>
  )
}

export default ItemCount