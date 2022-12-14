import React, { Component } from 'react'
import './card.styles.css'

class Card extends Component {
  render() {
    const { monster } = this.props
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        />
        <h2> {monster.name} </h2>
        <p> {monster.email} </p>
      </div>
    )
  }
}
export default Card;
