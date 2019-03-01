import React, { Component } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import '../assets/css/Map.css';

const TOKEN = 'pk.eyJ1IjoiYWRhcmlhbiIsImEiOiJjam4zdDd1dTQwamthM3BxZ2p0dHRicjMyIn0.EaQADwzB68lFNnJE6UbG8g';

class Map extends Component {
  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: 37.365224,
      longitude: -120.425479,
      zoom: 14.5
    }
  };

  render() {
    return (
      <div className="Map">
        <ReactMapGL
          className="MapBox"
          {...this.state.viewport}
          mapboxApiAccessToken={TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}
        >
        <Popup latitude={37.365224} longitude={-120.425479} closeButton={true} closeOnClick={false} anchor="top">
          <div className="location">HackMerced</div>
        </Popup>
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;