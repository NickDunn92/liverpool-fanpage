import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, Players, Player } from './pages';
import { Header } from "./components";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
     // user: {
        //name: 'nick'
     // },
      user: null
    }
  }
  render () {
    return (
      <div className='app'>
        <Header />
        <Switch>
          {
            (!this.state.user) ?
            (<Route exact path='/' component={HomePage} />) :
            (<Route exact path='/' component={Players} />)
          }
          <Route exact path='/players' component={Players} />
          <Route path='/players/:playerId' component={Player} />
        </Switch>
      </div>
    )
  }
}

export default App;