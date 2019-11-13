import React from 'react';
import './Card.css';

const Card = props => {
  const { pros, addPros } = props;
  const teamCreator = pro => {
    addPros(pro);

    return;
  };
  return pros.map(pro => (
    <div
      key={pro.id}
      onClick={() => teamCreator(pro)}
      style={{ background: pro.color }}
      className='card-container'
    >
      <div className='card'>
        <img id='pro-image' src={pro.imageUrl} alt={pro.name}></img>
        <div>
          <h2>{pro.name}</h2>
          <h2>Role: {pro.role}</h2>
        </div>
      </div>
    </div>
  ));
};

export default Card;
