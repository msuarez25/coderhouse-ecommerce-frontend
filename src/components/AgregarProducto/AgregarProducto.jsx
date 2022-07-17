import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';

const AgregarProducto = ({ title, action }) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(Context);
  const { id } = useParams();

  const { errorMessage, setErrorMessage } = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((item, index) => {
      data[index] = item;
    });
    try {
      let response = null;
      if (action === 'agregar') {
        response = await axios.post(`${baseUrl}/api/producto`, data);
      } else {
        response = await axios.post(`${baseUrl}/api/producto/${id}`, data);
      }

      if (response.data.isLoggedIn) {
        setLogged({
          isLoggedIn: true,
          user: response.data.user,
        });

        setTimeout(() => {
          navigate('/productos');
        }, 2000);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [logged, errorMessage]);

  return (
    <>
      {errorMessage ? (
        <div className='error'>
          <div className='container'>
            <h1>Error</h1>
            Please try again
            <Link to='/agregar-producto' className='btn btn-warning'>
              Agregar Producto
            </Link>
          </div>
        </div>
      ) : (
        <div className='container'>
          <div className='jumbotron'>
            <h1>{title}</h1>
            <br />
            <form
              className='form'
              autoComplete='off'
              onSubmit={handleSubmit}
              enctype='multipart/form-data'
            >
              <div className='mb-3'>
                <label for='nombre' className='form-label'>
                  Nombre
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='nombre'
                  name='nombre'
                />
              </div>
              <div className='mb-3'>
                <label for='precio' className='form-label'>
                  Precio
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='precio'
                  name='precio'
                />
              </div>
              <div className='mb-3'>
                <label for='stock' className='form-label'>
                  Stock
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='stock'
                  name='stock'
                />
              </div>
              <div className='mb-3'>
                <label for='foto' className='form-label'>
                  Imagen
                </label>
                <input
                  className='form-control'
                  type='file'
                  id='foto'
                  name='foto'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Agregar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AgregarProducto;
