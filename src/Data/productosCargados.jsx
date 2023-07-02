import React from 'react'


const ProductosCargados = (handleNewProduct) => {
  return (
    <div>
        <input placeholder='Ingrese ID Del Producto' ></input>
        <input placeholder='Ingrese Nombre Del Producto' ></input>
        <input placeholder='Ingrese Stock Del Producto' ></input>
        <input placeholder='Ingrese Descripcion Del Producto'></input>
        <input placeholder='Ingrese Precio Del Producto'></input>
        <button onClick={handleNewProduct}>Añadir Producto al Catalogo</button>
    </div>
  )
}

export default ProductosCargados