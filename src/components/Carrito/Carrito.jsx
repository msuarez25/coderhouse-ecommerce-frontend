import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import CarProduct from './CarProduct';
import { Context } from '../../Context/Context';

const Carrito = () => {
  const { carObj, setCarObj } = useContext(Context);

  const getCarrito = async () => {
    let products;

    products = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/carrito/${carObj._id}/productos`
    );

    setCarObj(products.data);
    console.log('DTA: ', products.data);
  };

  useEffect(() => {
    getCarrito();
    // eslint-disable-next-line
  }, [carObj]);

  return (
    <div className='container'>
      <h1 class='text-center'>Carrito</h1>
      <div class='d-flex justify-content-center'>
        <div class='col-12 col-md-10 mt-5 mb-4'>
          <div class='row' id='lista-productos-labels'>
            <div class='col-md-2 text-center'></div>
            <div class='col-md-4 text-center'>
              <strong>Producto</strong>
            </div>
            <div class='col-md-2 text-center'>
              <strong>Cantidad</strong>
            </div>
            <div class='col-md-3 text-center'>
              <strong>Precio</strong>
            </div>
            <div class='col-md-1 text-center'></div>
          </div>
          <div class='row' id='lista-productos'>
            {carObj.productos.length ? (
              carObj.productos.map((producto) => (
                <CarProduct
                  key={producto._id}
                  id={producto._id}
                  precio={producto.precio}
                  foto={producto.foto}
                  nombre={producto.nombre}
                  code={producto.code}
                />
              ))
            ) : (
              <div class='mt-5 alert alert-warning' role='alert'>
                Tu carrito esta vacio. Ve a<a href='/productos'>La tienda</a>{' '}
                para agregar productos a tu carrito.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrito;
