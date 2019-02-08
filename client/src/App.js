import React, { Component } from 'react';
import './App.css';
import Raccoon from './assets/images/raccoon.png';
import Tracks from './components/Tracks';
class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <Tracks />
            <img src={Raccoon} alt="Raccoon" className="Raccoon"/>
          </header>
      </div>
    );
  }
}

export default App;
