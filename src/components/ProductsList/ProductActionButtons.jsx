import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ActionButtons = ({ id }) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { logged, carObj, setCarObj } = useContext(Context);
  const addProd = async (id) => {
    console.log('carObj: ', carObj);
    if (carObj.id === '') {
      const carID = await axios.post(`${baseUrl}/api/carrito`, {});
      console.log(carID);
      if (carID) {
        setCarObj(carID);
      }
    }

    // if (response.data.isLoggedIn) {
    //   setLogged({
    //     isLoggedIn: true,
    //     user: response.data.user,
    //   });

    //   setTimeout(() => {
    //     navigate('/productos');
    //   }, 2000);
  };
  const deleteProd = (id) => {
    navigate('/productos');
  };
  return (
    <>
      {logged.isLoggedIn && (
        <>
          <button
            className='btn btn-primary add-to-cart mb-3'
            onClick={() => {
              addProd(logged.user.userId);
            }}
          >
            Agregar al carrito
          </button>
          <Link
            className='btn btn-warning edit-product mb-3'
            to={`/editar/${logged.user.userId}`}
          >
            Editar producto
          </Link>

          <button
            className='btn btn-danger delete-product mb-3'
            onClick={() => {
              deleteProd(logged.user.userId);
            }}
          >
            Eliminar producto
          </button>
        </>
      )}
    </>
  );
};

export default ActionButtons;
