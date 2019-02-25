import React from 'react';
import { Icon } from 'react-icons-kit'
import { globe, spaceShuttle, tree } from 'react-icons-kit/fa/'
import '../assets/css/Tracks.css';

export default class Tracks extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            iconSize: 128
        };
    }

    render() {
        return ( 
            <div className="Tracks">
                <div><Icon size={this.state.iconSize} icon={globe} /><br/><p>Social Good</p></div>
                <div><Icon size={this.state.iconSize} icon={spaceShuttle} /><br/><p>Entrepreneurship</p></div>
                <div><Icon size={this.state.iconSize} icon={tree} /><br/><p>Agtech</p></div>
            </div>
        );
    }

}
