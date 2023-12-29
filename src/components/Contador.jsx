import React from 'react';
import './Contador.css';

const Contador = ({ title, number }) => {
  return (
    <div className='counter'>
      <p className='counter-number'>{number !== undefined ? number : '--'}</p>
      <h3 className='counter-text'>{title}</h3>
    </div>
  );
};

export default Contador;
