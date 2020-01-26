import React from 'react';
import { Grid } from 'semantic-ui-react';
import CardList from '../Card-List/card-list.component';

export const CardGrid = ({ players }) => {

  return (
    <Grid>
      <Grid.Row>
        <CardList players={players.filter(player => player.area === 'GK')} />
      </Grid.Row>
      <Grid.Row>
        <CardList players={players.filter(player => player.area === 'Defence')} />
      </Grid.Row>
      <Grid.Row>
        <CardList players={players.filter(player => player.area === 'Midfield')} />
      </Grid.Row>
      <Grid.Row>
        <CardList players={players.filter(player => player.area === 'Attack')} />
      </Grid.Row>
    </Grid>
  );
};