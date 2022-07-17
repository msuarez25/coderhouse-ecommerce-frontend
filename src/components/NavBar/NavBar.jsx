import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import ProductsNav from './ProductsNav';
import LoginLogoutBtn from './LoginLogoutBtn';
import { Context } from '../../Context/Context';
import LoggedPanel from './LoggedPanel';

const NavBar = ({ navTheme, logoAlt }) => {
  const { logged } = useContext(Context);
  return (
    <nav className={`navbar navbar-expand-lg ${navTheme}`}>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img src={Logo} alt={logoAlt} />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <LoggedPanel show={logged} />
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 pt-2 pt-lg-0'>
            <li className='nav-item mx-lg-3 mb-2 mb-lg-0'>
              <Link className='nav-link active' aria-current='page' to='/'>
                Inicio
              </Link>
            </li>
            <ProductsNav />
            <li className='nav-item mx-lg-3 mb-2 mb-lg-0'>
              <Link className='nav-link active' to='/carrito'>
                Carrito
              </Link>
            </li>
            <LoginLogoutBtn show={logged} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
