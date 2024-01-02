import React from 'react'
import './Card.css'

const Card = ({id, name, date, time, number }) => {
  return (
    <section className="card">
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <div className="card-detail">
          <p>{date}</p>
          <p>{time}</p>
          <p>Number of Guests: {number}</p>
        </div>
    <button className="button"> Cancel</button>
      </div>
    </section>
  )
}

export default Card