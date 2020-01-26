import React from 'react';
import { Card } from '../Card/card.component';

const CardList = ({ players }) => {
  return (
    <>
    {
      players.map((player, i) => {
        return (
        <Card 
            key={`playercard${i}`}
            {...player}
            />
          );
        })
      }
    </>
  );
};

export default CardList;