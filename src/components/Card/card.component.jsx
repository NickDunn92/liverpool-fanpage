import React from 'react';

export const Card = ({ name, position, number, imageUrl }) => {
  return ( 
    <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        src={imageUrl}
        alt='football player'
        height="200px"
        width="350px"
      />
      <>
        <h2>{name}</h2>
        <p>{position}</p>
        <p>{number}</p>
      </>
    </div>
  );
};
