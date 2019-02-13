import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Raccoon from './assets/images/raccoon.png';
import Tracks from './components/Tracks';

//IMPORT COMPONENTS
import Contact from "./components/Contact";
import Prizes from "./components/Prizes";
import Workshops from "./components/Workshops";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <header className="App-header">
                <Route path = "/" component = {NavBar}/ >
                <Route path = "/ContactUs" component = {Contact}/>
                <Route path = "/Prizes" component = {Prizes}/>
                <Route path = "/Workshops" component = {Workshops}/>
                <Timer/>
                <img src={Raccoon} alt="Raccoon" className="Raccoon"/>
              </header>
          </div>
      </Router>
    );
  }
}

export default App;
