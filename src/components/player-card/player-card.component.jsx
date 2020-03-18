import React from 'react';
import { withRouter } from 'react-router-dom';
import './player-card.styles.scss';


const Card = ({ id, name, position, number, imageUrl, history, match }) => {
  return ( 
    <div
      className='card' 
      onClick={() => history.push(`${match.url}/${id}`)}
    >
      <img
        className='background-image'
        src={imageUrl}
        alt='football player'
      />
      <>
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{number}</p>
      </>
    </div>
  );
};

export default withRouter(Card);
