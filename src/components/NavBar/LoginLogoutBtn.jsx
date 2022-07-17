import React from 'react';

const isLoggedIn = false;

const LoginLogoutBtn = () => {
  return (
    <li className='nav-item ms-auto'>
      {isLoggedIn && (
        <a className='nav-link btn btn-danger btn-logout' href='/logout'>
          Logout
        </a>
      )}

      {!isLoggedIn && (
        <a
          className='nav-link btn btn-primary btn-login text-white'
          href='/login'
        >
          Login
        </a>
      )}
    </li>
  );
};

export default LoginLogoutBtn;
