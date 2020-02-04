import React, { Component } from 'react';
import { CardGrid, SearchBox } from '..';
import players from '../../players';

export class PlayerSearch extends Component {
  constructor() {
    super()
    this.state = {
      players,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { players, searchfield } = this.state;

    const filteredPlayers = players.filter(player => {
      return player.name.toLowerCase().includes(searchfield.toLowerCase());
    }); 
    
    return !players.length ?  
    <h1>Loading</h1> :
    (
      <>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardGrid players={filteredPlayers}/>
      </>
    );
  }
}
