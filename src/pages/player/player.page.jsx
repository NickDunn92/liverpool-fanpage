import React from 'react';
import { Card } from '../../components';
import players from '../../players';

//
export const Player = props => {

console.log(props);

  // Use find method on players array
  const player = players.find(p => 

    /* 
      Find a player that has an id which
      matches the id of the player that has been clicked 
    */
    p.id == props.match.params.playerId);

      console.log(player);

  // 
  return (
    <>
      <Card {...player} />
    </>
  )
};

 