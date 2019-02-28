import React, { Component } from 'react';
import Raccoon from '../assets/images/Raccoon.png';
import Raccoon1 from '../assets/images/Raccoon1.png';
import Raccoon2 from '../assets/images/Raccoon2.png';
import Raccoon3 from '../assets/images/Raccoon3.png';
import Raccoon4 from '../assets/images/Raccoon4.png';
import Raccoon5 from '../assets/images/Raccoon5.png';
import Raccoon6 from '../assets/images/Raccoon5.png';
import '../assets/css/Raccoons.css';

function RaccoonFamily (props) {
  let raccoons = [
    {id: 1, content: <img src={Raccoon1} alt="Raccoon" className="raccoon raccoon1" />},
    {id: 2, content: <img src={Raccoon2} alt="Raccoon" className="raccoon raccoon2" />},
    {id: 3, content: <img src={Raccoon3} alt="Raccoon" className="raccoon raccoon3" />},
    {id: 4, content: <img src={Raccoon4} alt="Raccoon" className="raccoon raccoon4" />},
    {id: 5, content: <img src={Raccoon5} alt="Raccoon" className="raccoon raccoon5" />},
    {id: 6, content: <img src={Raccoon6} alt="Raccoon" className="raccoon raccoon6" />}
  ];

  const revealRaccoons = raccoons.map(raccoon => 
    <div key={raccoon.id}>
      <div>{raccoon.content}</div>
    </div>
  );

  if(!props.reveal) {
    return null;
  }

  return (
    <div>
      {revealRaccoons}
    </div>
  );
}

export default class Raccoons extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      showRaccoons: false
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState( state => ({
      showRaccoons: !state.showRaccoons
    }));
  }

  render() {
    let raccoon_button = (        
      <button>
        <img src={Raccoon} alt="Raccoon" className="raccoon raccoon-btn" onClick={this.handleToggleClick}/>
      </button>  
    );
 
    return (
      <div className="raccoon-family">
        <RaccoonFamily reveal={this.state.showRaccoons} />
        {raccoon_button}
      </div>
    );
  }
}
