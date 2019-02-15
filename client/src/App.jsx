import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Raccoon from './assets/images/raccoon.png';

//IMPORT COMPONENTS
import Contact from "./components/Contact";
import Hardware from "./components/Hardware";
import Map from "./components/Map";
import Prizes from "./components/Prizes";
import Schedule from "./components/Schedule";
import Submission from "./components/Submission";
import Tracks from "./components/Tracks";
import Workshops from "./components/Workshops";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <Route path = "/Schedule" component = {Schedule}/>
            <Route path = "/Tracks" component = {Tracks}/>
            <img src={Raccoon} alt="Raccoon" className="Raccoon"/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
