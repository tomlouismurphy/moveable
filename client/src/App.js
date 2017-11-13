import React, { Component } from 'react';
import './App.css';
import {AppScreen} from './AppScreen/AppScreen.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Moveable</h1>
        <AppScreen/>
      </div>
    );
  }
}

export default App;