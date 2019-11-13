import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { players } from '../../backend/backend';
import Card from './Card';
import PropTypes from 'prop-types';
import './Cards.css';

const Cards = props => {
  const [pros, setPros] = useState(undefined);
  const [createdTeam, setCreatedTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await players();
      setPros(users);
    };
    fetchData();
  }, []);

  const addPros = pro => {
    const ids = createdTeam.map(pros => pros.id);

    if (ids.includes(pro.id)) {
      return;
    }

    setCreatedTeam([...createdTeam, pro]);
  };

  return (
    <>
      <h1>CDL Pro Players</h1>
      <div>
        <h1>Created Team</h1>
        {createdTeam.length >= 1 ? (
          createdTeam.map(pros => (
            <div key={pros.id}>
              <Card pros={pros} />
            </div>
          ))
        ) : (
          <div>Please Select Pros to create your team.</div>
        )}
      </div>
      <div>
        <h1>List of Pros</h1>
        <div className='cards'>
          {pros
            ? pros.map(pros => (
                <div key={pros.id}>
                  <Card pros={pros} addPros={addPros} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Cards;
