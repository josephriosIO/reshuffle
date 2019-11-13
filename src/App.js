import React from 'react';
import Cards from './components/Cards';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={Cards} />
    </div>
  );
}

export default App;
