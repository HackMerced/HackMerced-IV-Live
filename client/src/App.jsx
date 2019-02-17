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
import MapUCM from "./components/Map";
import Prizes from "./components/Prizes";
import Schedule from "./components/Schedule";
import Submission from "./components/Submission";
import Tracks from "./components/Tracks";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";
import API from "./components/API";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Timer />
          <header className="App-header">
            <Route path = "/" />
            <Route path = "/Schedule" component = {Schedule}/>
            <Route path = "/Map" component = {MapUCM}/>
            <Route path = "/Tracks" component = {Tracks}/>
            <Route path = "/Prizes" component = {Prizes}/>
            <Route path = "/API" component = {API}/>
            <Route path = "/Hardware" component = {Hardware}/>
            <Route path = "/Submission" component = {Submission}/>
            <Route path = "/Contact" component = {Contact}/>
            <img src={Raccoon} alt="Raccoon" className="Raccoon"/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
