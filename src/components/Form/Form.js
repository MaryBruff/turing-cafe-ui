import React from 'react'
import './Form.css'
import {useState} from 'react'

const Form = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
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
        onChange={e => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder='Time'
        value={time}
        name='time'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setName(e.target.value)}
        />
        <input
        type="number"
        placeholder='Number of Guests'
        value={number}
        name='number'
        className="input-field"
        required
        autoComplete='off'
        onChange={e => setName(e.target.value)}
        />
        <button className='submit-button'>
          Make Reservation
        </button> 
      </form>
    </main>
    

  )
}

export default Form