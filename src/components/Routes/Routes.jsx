import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Signup from '../Signup/Signup';
import AgregarProducto from '../AgregarProducto/AgregarProducto';
import Carrito from '../Carrito/Carrito';

const RoutesComponent = () => {
  return (
    <Routes>
      <>
        <Route exact path='/' element={<ProductsList />}></Route>
        <Route path='/productos' element={<ProductsList />}></Route>
        <Route path='/carrito' element={<Carrito />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route
          path='/agregar'
          element={
            <AgregarProducto title='Agregar Producto' action='agregar' />
          }
        ></Route>
        <Route
          path='/editar/:id'
          element={<AgregarProducto title='Editar Producto' action='editar' />}
        ></Route>
      </>
    </Routes>
  );
};

export default RoutesComponent;
