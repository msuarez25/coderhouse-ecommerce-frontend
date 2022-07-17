import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = () => {
  return (
    <li className='nav-item mx-lg-3 mb-2 mb-lg-0 dropdown'>
      <Link
        className='nav-link dropdown-toggle'
        to='#'
        id='navbarDropdown'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        Productos
      </Link>
      <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <li>
          <Link className='dropdown-item' to='/productos'>
            Ver Productos
          </Link>
        </li>
        <li>
          <Link className='dropdown-item' to='/agregar'>
            Agregar Productos
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ProductsNav;
