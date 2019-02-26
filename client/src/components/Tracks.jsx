import React from 'react';
import { Icon } from 'react-icons-kit'
import { globe, spaceShuttle, tree } from 'react-icons-kit/fa/'
import '../assets/css/Tracks.css';

export default class Tracks extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            iconSize: 50
        };
    }

    render() {
        return ( 
            <div className="Tracks">
                <div>
                    <Icon className="TrackIcon" size={this.state.iconSize} icon={globe} /><span>Social Good</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna. Cras tincidunt scelerisque massa id luctus. Cras suscipit in diam non congue. Nam ut urna at nisl efficitur varius sit amet sed purus. Nullam vel orci turpis. Praesent mattis, arcu sed condimentum tempus, nisl tortor pretium ligula, dignissim ultrices lorem eros vel ante. Ut in tempor est.</p>
                </div>
                <div>
                    <Icon className="TrackIcon" size={this.state.iconSize} icon={spaceShuttle} /><span>Entrepreneurship</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna. Cras tincidunt scelerisque massa id luctus. Cras suscipit in diam non congue. Nam ut urna at nisl efficitur varius sit amet sed purus. Nullam vel orci turpis. Praesent mattis, arcu sed condimentum tempus, nisl tortor pretium ligula, dignissim ultrices lorem eros vel ante. Ut in tempor est.</p>
                </div>
                <div>
                    <Icon className="TrackIcon" size={this.state.iconSize} icon={tree} /><span>Agtech</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna. Cras tincidunt scelerisque massa id luctus. Cras suscipit in diam non congue. Nam ut urna at nisl efficitur varius sit amet sed purus. Nullam vel orci turpis. Praesent mattis, arcu sed condimentum tempus, nisl tortor pretium ligula, dignissim ultrices lorem eros vel ante. Ut in tempor est.</p>
                </div>
            </div>
        );
    }

}
