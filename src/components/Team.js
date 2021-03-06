import React from 'react';
import './Team.css';

const Team = props => {
  const { team } = props;
  return (
    <div className='team-container'>
      <div className='bar'>
        {team.map(pros => (
          <div key={pros.id}>
            <img id='pro-image' src={pros.imageUrl} alt={pros.name}></img>
            <h1 style={{ textAlign: 'center' }}>{pros.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
