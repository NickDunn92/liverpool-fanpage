import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, Players, PlayerInformation, ShopPage } from './pages';
import { Header } from "./components";
import './App.css';

class App extends Component {

  render () {
    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/players' component={Players} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/players/playerid' component={PlayerInformation} />
        </Switch>
      </div>
    )
  }
}

export default App;