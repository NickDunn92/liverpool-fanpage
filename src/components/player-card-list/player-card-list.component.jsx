import React from 'react';
import { Card } from '..';

export const CardList = ({ players }) => {
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
