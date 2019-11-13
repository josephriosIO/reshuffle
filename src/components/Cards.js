import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { players } from '../../backend/backend';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  const [pros, setPros] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const users = await players();
      console.log(users);
      setPros(users);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pros
        ? pros.map(pros => (
            <div>
              <Card pros={pros} />
            </div>
          ))
        : null}
    </div>
  );
};

export default Cards;
