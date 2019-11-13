import React from 'react';
import Cards from './components/Cards';
import UsersCreatedTeams from './components/UsersCreatedTeams';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Link to='/'>
          <h1>CDL Pro Players</h1>
        </Link>
        <Link to='/teams'>Created CDL Teams</Link>
      </div>
      <Route exact path='/' component={Cards} />
      <Route exact path='/teams' component={UsersCreatedTeams} />
    </div>
  );
}

export default App;
