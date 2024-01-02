import React from 'react'
import './Form.css'
import {useState} from 'react'

const Form = ({reservations, setReservations}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number
    }
    setReservations([...reservations, newReservation]); // using the spread operator to add the new reservation to the existing reservations array

    setName('');
    setDate('');
    setTime('');
    setNumber('');
  }

  return (
    <main>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Name'
        value={name}
        name='name'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder='Date'
        value={date}
        name='date'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setDate(e.target.value)}
        />
        <input
        type="text"
        placeholder='Time'
        value={time}
        name='time'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setTime(e.target.value)}
        />
        <input
        type="number"
        placeholder='Number of Guests'
        value={number}
        name='number'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setNumber(e.target.value)}
        />
        <button className='submit-button'> 
          Make Reservation
        </button> 
      </form>
    </main>
    

  )
}

export default Form