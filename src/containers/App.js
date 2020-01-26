import React, { Component } from 'react';
import { SearchBox } from '../components/Search-box/search-box.component';
import { CardGrid } from '../components/Card-Grid/card-grid.component';
import players from '../players';
import './App.css';

class App extends Component {
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
      <div className='tc'>
        <h1 className="f1">Liverpool FC</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardGrid players={filteredPlayers}/>
      </div>
    );
  }
}

export default App;