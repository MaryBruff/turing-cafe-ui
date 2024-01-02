import './App.css';
import React from 'react';
import getReservations from '../Api-calls';
import { useState, useEffect } from 'react';

function App() {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations()
      .then(data => setReservations(data))
      .catch(error => console.log(error))
  } ,[])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 