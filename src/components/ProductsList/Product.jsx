import React from 'react';
import ActionButtons from './ProductActionButtons';
// import { Link } from "react-router-dom";
// import ItemCount from "../ItemCount/ItemCount";
// import PriceFormat from "../PriceFormat/PriceFormat";

const baseUrl = process.env.REACT_APP_API_URL;

const Item = ({ id, precio, foto, nombre, code }) => {
  return (
    <div id={`producto-${id}`} className='col-6 col-md-4 col-xl-3 mb-4'>
      <div className='card'>
        <img
          src={foto.indexOf('http') > -1 ? foto : baseUrl + foto}
          className='card-img-top'
          alt={`foto de ${nombre}`}
        />
        <div className='card-body'>
          <h5 className='card-title'>{nombre}</h5>
          <p className='card-text'>Código del producto: {code}</p>
          <ActionButtons />
        </div>
        <div className='card-footer text-muted'>Precio: {precio}</div>
      </div>
    </div>
  );
};

export default Item;
