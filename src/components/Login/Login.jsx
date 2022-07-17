import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context/Context';
import axios from 'axios';

const Login = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  const { logged } = useContext(Context);
  const { setLogged } = useContext(Context);

  const { errorMessage, setErrorMessage } = useState(false);

  const goSignup = () => {
    window.location.href = '/signup';
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((item, index) => {
      data[index] = item;
    });
    const response = await axios.post(`${baseUrl}/login`, data);

    if (response.data.isLoggedIn) {
      setLogged({
        isLoggedIn: true,
        user: response.data.user,
      });

      console.log(response.data.user);
    } else {
      setErrorMessage(true);
    }
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line
  }, [errorMessage]);

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
          <h1>Welcome</h1>
        ) : (
          <div className='jumbotron'>
            <h1>LOGIN</h1>
            <br />
            <form
              className='form'
              role='form'
              autoComplete='off'
              onSubmit={handleSubmit}
            >
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
