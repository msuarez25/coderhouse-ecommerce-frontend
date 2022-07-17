import React from 'react';

const CarProduct = ({ id, precio, amount, foto, nombre, code }) => {
  return (
    <div className='col-12 mt-5'>
      <div className='row align-items-center'>
        <div className='col-md-2 d-flex justify-content-center align-items-center'>
          <img src={foto} className='card-img-top' alt={`foto de ${nombre}`} />
        </div>
        <div className='col-md-4 d-flex flex-wrap align-items-center'>
          <p className='h5 card-title'>{nombre}</p>
          <p className='card-text'>Código del producto: {code}</p>
        </div>
        <div className='col-md-2 d-flex justify-content-center align-items-center'>
          {amount}
        </div>
        <div className='col-md-3 d-flex justify-content-center align-items-center'>
          ${precio}
        </div>
        <div className='col-md-1 d-flex justify-content-center align-items-center'>
          <button data-prod-id={id} className='btn btn-danger remove-from-cart'>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarProduct;
