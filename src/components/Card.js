import React, { useState } from 'react';
import CardInfo from './CardInfo';
import './Card.css';

const Card = props => {
  const [selected, setSelected] = useState(false);
  const { pros, addPros } = props;
  const teamCreator = pro => {
    setSelected(true);
    if (addPros === undefined) {
      return;
    }
    addPros(pro);

    return;
  };
  return pros.map(pro => (
    <div
      key={pro.id}
      onClick={() => teamCreator(pro)}
      style={{
        backgroundImage: `linear-gradient(-90deg,white 30%,${pro.color})`,
      }}
      className={`card-container`}
    >
      <CardInfo pro={pro} />
    </div>
  ));
};

export default Card;
