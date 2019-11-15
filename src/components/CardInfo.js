import React from 'react';
import './Card.css';

const CardInfo = props => {
  const { pro } = props;
  return (
    <div className={`card `}>
      <div className='card-header'>
        <img
          alt='CDL Logo'
          id='cdl-logo'
          src='https://venturebeat.com/wp-content/uploads/2019/10/cod-league-2.jpg?fit=1486%2C824&strip=all'
        />
      </div>

      <img id='pro-image' src={pro.imageUrl} alt={pro.name}></img>
      <div>
        <h2>{pro.name}</h2>
        <h2>Role: {pro.role}</h2>
      </div>
    </div>
  );
};

export default CardInfo;
