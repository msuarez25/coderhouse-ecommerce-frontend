import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Login = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(Context);

  const { errorMessage, setErrorMessage } = useState(true);

  const goSignup = () => {
    navigate('/signup');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((item, index) => {
      data[index] = item;
    });
    try {
      const response = await axios.post(`${baseUrl}/login`, data);

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
          <h1>Error</h1>
        </div>
      ) : (
        ''
      )}
      <div className='container'>
        {logged.isLoggedIn ? (
          <>
            <h1>Welcome {logged.user.userName}</h1>
            <Link className='btn btn-danger' to='/logout'>
              Logout
            </Link>
          </>
        ) : (
          <div className='jumbotron'>
            <h1>LOGIN</h1>
            <br />
            <form className='form' autoComplete='off' onSubmit={handleSubmit}>
              <div className='form-group mb-3'>
                <input
                  name='username'
                  placeholder='Nombre'
                  className='form-control'
                  type='text'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  name='password'
                  placeholder='Password'
                  className='form-control'
                  type='password'
                  required
                />
              </div>

              <div className='form-group'>
                <input
                  className='btn btn-success my-3'
                  type='submit'
                  value='Login'
                />
              </div>
            </form>

            <hr />
            <div className='text-center'></div>
            <button className='btn btn-warning my-3' onClick={goSignup}>
              SIGNUP
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
