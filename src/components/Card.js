import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  const { pros } = props;
  return (
    <div className='card-container'>
      <div className='card'>
        <h1>{pros.name}</h1>
        <h1>Role: {pros.role}</h1>
        <img src={pros.imageUrl} alt={pros.name}></img>
      </div>
    </div>
  );
};

export default Card;
