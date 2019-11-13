import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { players, addTeam } from '../../backend/backend';
import Card from './Card';
import './Cards.css';

const Cards = props => {
  const [pros, setPros] = useState(undefined);
  const [filter, setFilter] = useState([]);
  const [createdTeam, setCreatedTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await players();
      setPros(users);
    };
    fetchData();
  }, []);

  const onSubmit = () => {
    if (createdTeam.length < 5) {
      return console.log('error');
    }

    addTeam(createdTeam);
  };

  const search = e => {
    const pro = pros.filter(pro => {
      if (pro.name.toLowerCase().includes(e.target.value)) {
        return pro;
      }
      return null;
    });

    setFilter(pro);
  };

  const addPros = pro => {
    const ids = createdTeam.map(pros => pros.id);

    //TODO Move error checking to backend

    // if pro is already in users list don't add them
    if (ids.includes(pro.id)) {
      return;
    }
    // if users list is more than 5 don't let team PS CDL teams are a 5 man team.
    if (createdTeam.length >= 5) {
      return;
    }

    setCreatedTeam([...createdTeam, pro]);
  };

  return (
    <>
      <div>
        <h1>Created Team</h1>
        <button onClick={onSubmit}>Save Team</button>
        <div className='cards'>
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
      </div>
      <div>
        <h1>List of Pros</h1>
        <form>
          <input type='search' onKeyDown={search} placeholder='Search' />
        </form>
        <div className='cards'>
          {pros ? (
            <Card pros={filter.length > 0 ? filter : pros} addPros={addPros} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cards;
