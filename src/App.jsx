import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

//IMPORT COMPONENTS
import Contact from "./components/Contact";
import Hardware from "./components/Hardware";
import MapUCM from "./components/Map";
import Schedule from "./components/Schedule";
import Submission from "./components/Submission";
import Prizes from "./components/Prizes";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";
import Raccoons from "./components/Raccoons";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <NavBar />
            <Timer />
          </div>
          <Raccoons />
          <div className="App-content">
            <Route exact path = "/" component = {Schedule}/>
            <Route path = "/Map" component = {MapUCM}/>
            <Route path = "/Prizes" component = {Prizes}/>
            {/*<Route path = "/Hardware" component = {Hardware}/>
            <Route path = "/Submission" component = {Submission}/>
            <Route path = "/Contact" component = {Contact}/>*/}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
