import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState('Bienvenid@');

  const getProductos = async () => {
    let products;

    products = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/productos`
    );

    setTitle('Productos');
    setProductos(products.data);
  };

  useEffect(() => {
    getProductos();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1 className='text-center mt-5'>{title}</h1>
        <div className='row' id='lista-productos'>
          {productos.map((producto) => (
            <Product
              key={producto._id}
              id={producto._id}
              precio={producto.precio}
              foto={producto.foto}
              nombre={producto.nombre}
              code={producto.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemList;
