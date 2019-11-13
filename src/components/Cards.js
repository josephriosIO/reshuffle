import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { players } from '../../backend/backend';
import Card from './Card';
import PropTypes from 'prop-types';
import './Cards.css';

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
    <>
      <h1>CDL Pro Players</h1>
      <div className='cards'>
        {pros
          ? pros.map(pros => (
              <div>
                <Card id={pros.id} pros={pros} />
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Cards;
