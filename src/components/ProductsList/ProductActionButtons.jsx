import React from 'react';

const ActionButtons = ({ id }) => {
  return (
    <>
      <button data-prod-id={id} className='btn btn-primary add-to-cart mb-3'>
        Agregar al carrito
      </button>
      <a href={`/editar/${id}`} className='btn btn-warning edit-product mb-3'>
        Editar producto
      </a>
      <button data-prod-id={id} className='btn btn-danger delete-product mb-3'>
        Eliminar producto
      </button>
    </>
  );
};

export default ActionButtons;
