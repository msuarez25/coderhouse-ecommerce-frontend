import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import Login from '../Login/Login';

const RoutesComponent = () => {
  return (
    <Routes>
      <>
        <Route exact path='/' element={<ProductsList />}></Route>
        <Route path='/login' element={<Login />}></Route>
        {/* <Route path='/productos'><ItemDetailContainer /></Route>
          <Route path='/carrito'><Cart /></Route>
        <Route path='/logout'><Cart /></Route> */}
      </>
    </Routes>
  );
};

export default RoutesComponent;
