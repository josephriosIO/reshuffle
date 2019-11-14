import React from 'react';
import Cards from './components/Cards';
import UsersCreatedTeams from './components/UsersCreatedTeams';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      {/*TODO create new component just for navbar*/}
      <div className='nav-bar'>
        <Link id='home' to='/'>
          CDL Pro Players
        </Link>
        <Link id='teams' to='/teams'>
          Created CDL Teams
        </Link>
      </div>
      <Route exact path='/' component={Cards} />
      <Route exact path='/teams' component={UsersCreatedTeams} />
    </>
  );
}

export default App;
