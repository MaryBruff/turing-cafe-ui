import './App.css';
import React from 'react';
import getReservations from '../Api-calls';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';

function App() {

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations()
      .then(data => setReservations(data))
      .catch(error => console.log(error))
  } ,[])

  const currentReservations = reservations.map(reservation => {
    return (
      <Card 
        key={reservation.id} // key is required in map
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  });

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form />
      </div>
      <div className='resy-container'>
        {currentReservations}
      </div>
    </div>
  );
}

export default App; 