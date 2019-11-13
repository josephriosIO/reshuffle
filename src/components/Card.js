import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div>
      <h1>{props.pros.name}</h1>
    </div>
  );
};

export default Card;
