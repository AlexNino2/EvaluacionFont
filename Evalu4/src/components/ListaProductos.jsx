import React from 'react';
import Producto from './Producto';

const ListaProductos = ({ productos, eliminarProducto, editarProducto }) => {
  return (
    <div className="lista-productos">
      {productos.map(producto => (
        <Producto 
          key={producto.id} 
          producto={producto} 
          eliminarProducto={eliminarProducto} 
          editarProducto={editarProducto} 
        />
      ))}
    </div>
  );
};

export default ListaProductos;
