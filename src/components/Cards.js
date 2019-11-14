import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import { players, addTeam } from '../../backend/backend';
import Card from './Card';
import './Cards.css';

const Cards = props => {
  const [pros, setPros] = useState(undefined);
  const [filter, setFilter] = useState([]);
  const [createdTeam, setCreatedTeam] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [alert, setAlerts] = useState(false);
  const [errorType, setErrorType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const users = await players();
      setPros(users);
    };
    fetchData();
  }, []);

  const onSubmit = () => {
    if (createdTeam.length < 5) {
      setErrorMsg('Add 5 CDL Pro players to create a team.');
      setErrorType('danger');
      setAlerts(true);
      setTimeout(() => {
        setAlerts(false);
      }, 5000);
      return;
    }

    setErrorMsg('Team Saved');
    setErrorType('success');
    setAlerts(true);
    setTimeout(() => {
      setAlerts(false);
    }, 5000);

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
      setErrorMsg('Pro is already in your team, please add a new pro.');
      setErrorType('danger');
      setAlerts(true);
      setTimeout(() => {
        setAlerts(false);
      }, 5000);
      window.scrollTo(0, 0);
      return;
    }
    // if users list is more than 5 don't let team PS CDL teams are a 5 man team.
    if (createdTeam.length >= 5) {
      setErrorMsg('Created team already has 5 Pros. CDL teams max out at 5.');
      setErrorType('danger');
      setAlerts(true);
      setTimeout(() => {
        setAlerts(false);
      }, 5000);
      window.scrollTo(0, 0);
      return;
    }

    setCreatedTeam([...createdTeam, pro]);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        {alert ? (
          <div className={`alert  btn-${errorType}`}>{errorMsg}</div>
        ) : null}
        <div className='created-teams'>
          <h1>Created Team</h1>
          <a id='save' onClick={onSubmit}>
            Save Team
          </a>
        </div>
        <div className='cards'>
          {createdTeam.length >= 1 ? (
            <Card pros={createdTeam} />
          ) : (
            <div>Please Select Pros to create your team.</div>
          )}
        </div>
      </div>
      <div>
        <div className='pro-list'>
          <h1>List of Pros</h1>
          <input
            className='input'
            type='search'
            onKeyDown={search}
            placeholder='Search by Name'
          />
        </div>
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
