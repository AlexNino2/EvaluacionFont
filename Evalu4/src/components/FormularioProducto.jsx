import React, { useState } from 'react';

const FormularioProducto = ({ agregarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      setErrores(prevErrores => ({
        ...prevErrores,
        nombre: 'El nombre del producto es requerido'
      }));
      return;
    }
    if (!categoria.trim()) {
      setErrores(prevErrores => ({
        ...prevErrores,
        categoria: 'La categoría es requerida'
      }));
      return;
    }
    if (!precio.trim()) {
      setErrores(prevErrores => ({
        ...prevErrores,
        precio: 'El precio es requerido'
      }));
      return;
    }
    if (!descripcion.trim()) {
      setErrores(prevErrores => ({
        ...prevErrores,
        descripcion: 'La descripción es requerida'
      }));
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      nombre,
      categoria,
      precio: parseFloat(precio.replace(/\./g, '')),
      descripcion
    };
    agregarProducto(nuevoProducto);
    setNombre('');
    setCategoria('');
    setPrecio('');
    setDescripcion('');
    setErrores({});
  };

  const handlePrecioChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    const formattedValue = new Intl.NumberFormat('es-CL').format(rawValue);
    setPrecio(formattedValue);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre producto</label>
        <input 
          type="text" 
          className={`form-control ${errores.nombre && 'is-invalid'}`} 
          id="nombre" 
          value={nombre} 
          onChange={(e) => { setNombre(e.target.value); setErrores({ ...errores, nombre: '' }); }} 
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="categoria" className="form-label">categoria</label>
        <select
          className={`form-control ${errores.categoria && 'is-invalid'}`}
          id="categoria"
          value={categoria}
          onChange={(e) => { setCategoria(e.target.value); setErrores({ ...errores, categoria: '' }); }}
        >
          <option value="">Seleccionar categoría</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          <option value="Alimentos">Alimentos</option>
          <option value="Hogar">Hogar</option>
        </select>
        {errores.categoria && <div className="invalid-feedback">{errores.categoria}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="precio" className="form-label">precio</label>
        <input 
          type="text" 
          className={`form-control ${errores.precio && 'is-invalid'}`} 
          id="precio" 
          value={precio} 
          onChange={handlePrecioChange} 
        />
        {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">descripcion</label>
        <textarea
          className={`form-control ${errores.descripcion && 'is-invalid'}`}
          id="descripcion"
          value={descripcion}
          onChange={(e) => { setDescripcion(e.target.value); setErrores({ ...errores, descripcion: '' }); }}
        />
        {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
      </div>
      <button type="submit" className="btn btn-primary">agregar producto</button>
    </form>
  );
};

export default FormularioProducto;


