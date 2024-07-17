import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Producto = ({ producto, eliminarProducto, editarProducto }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState(producto.nombre);
  const [categoria, setCategoria] = useState(producto.categoria);
  const [precio, setPrecio] = useState(producto.precio);
  const [descripcion, setDescripcion] = useState(producto.descripcion);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editarProducto({ ...producto, nombre, categoria, precio: parseFloat(precio), descripcion });
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre del Producto</label>
              <input 
                type="text" 
                className="form-control" 
                id="nombre" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="categoria" className="form-label">Categoría</label>
              <select
                className="form-control"
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Seleccionar categoría</option>
                <option value="Electrónica">Electrónica</option>
                <option value="Ropa">Ropa</option>
                <option value="Alimentos">Alimentos</option>
                <option value="Hogar">Hogar</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input 
                type="text" 
                className="form-control" 
                id="precio" 
                value={precio} 
                onChange={(e) => setPrecio(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <textarea
                className="form-control"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <button className="btn btn-success me-2" onClick={handleSave}>Guardar</button>
            <button className="btn btn-secondary" onClick={handleEdit}>Cancelar</button>
          </>
        ) : (
          <>
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">Categoría: {producto.categoria}</p>
            <p className="card-text">Precio: ${producto.precio}</p>
            {producto.descripcion && (
              <p className="card-text">Descripción: {producto.descripcion}</p>
            )}
            <button className="btn btn-primary me-2" onClick={handleEdit}><FaEdit /></button>
            <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}><FaTrash /></button>
          </>
        )}
      </div>
    </div>
  );
};

export default Producto;
