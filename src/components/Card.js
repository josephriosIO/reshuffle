import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  const { pros, addPros } = props;
  const teamCreator = pro => {
    addPros(pro);

    return;
  };
  return (
    <div
      onClick={() => teamCreator(pros)}
      style={{ background: pros.color }}
      className='card-container'
    >
      <div className='card'>
        <img id='pro-image' src={pros.imageUrl} alt={pros.name}></img>
        <div>
          <h2>{pros.name}</h2>
          <h2>Role: {pros.role}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
