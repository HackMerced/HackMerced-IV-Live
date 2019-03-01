import React from 'react';
import { Icon } from 'react-icons-kit'
import { globe, spaceShuttle, tree, shareAlt, gamepad, unlock, trophy } from 'react-icons-kit/fa/'
import { ic_developer_mode, ic_devices } from 'react-icons-kit/md/'
import '../assets/css/Tracks.css';

export default class Tracks extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            tracksIconSize: 50,
            subCatsIconSize: 34,
            trophyIconSize: 20
        };
    }

    render() {
        return (
            <div className="TracksContainer"> 
                <h3><i>Main Tracks</i></h3>
                <div className="Tracks">
                    <div>
                        <Icon className="TrackIcon" size={this.state.tracksIconSize} icon={globe} /><br /><span>Social Good</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>Charles will do your dishes.</span>
                        </div>
                    </div>
                    <div>
                        <Icon className="TrackIcon" size={this.state.tracksIconSize} icon={spaceShuttle} /><br /><span>Entrepreneurship</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>Adrian will clean your room.</span>
                        </div>
                    </div>
                    <div>
                        <Icon className="TrackIcon" size={this.state.tracksIconSize} icon={tree} /><br /><span>Agtech</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit. Duis et porttitor eros. Aenean ipsum nibh, malesuada bibendum congue consectetur, commodo id magna.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>Charles will do your laundry.</span>
                        </div>
                    </div>
                </div>
                <h3><i>Subcategories</i></h3>
                <div className="Subcategories">
                    <div>
                        <Icon className="TrackIcon" size={this.state.subCatsIconSize} icon={ic_developer_mode} /><br/><span>CSxA Award</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>$250 to your team or a charity of your choice</span>
                        </div>
                    </div>
                    <div>
                        <Icon className="TrackIcon" size={this.state.subCatsIconSize} icon={shareAlt} /><br/><span>Best Social Media</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>2<sup>nd</sup> Genereation Amazon Echo Dot (4)</span>
                        </div>
                    </div>
                    <div>
                        <Icon className="TrackIcon" size={this.state.subCatsIconSize} icon={unlock} /><br/><span>Best Beginner Hack</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>makey makey classic kits</span>
                        </div>
                    </div>                
                    <div>
                        <Icon className="TrackIcon" size={this.state.subCatsIconSize} icon={gamepad} /><br/><span>Best Game (2)</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>Coolermaster keyboard, earbuds, and mouse</span>
                        </div>
                    </div>                
                    <div>
                        <Icon className="TrackIcon" size={this.state.subCatsIconSize} icon={ic_devices} /><br/><span>Wolfram Alpha API</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis venenatis ante, vel pellentesque sapien aliquet id. Praesent porta et purus eget imperdiet. Nulla augue lorem, sagittis id lorem bibendum, elementum sagittis velit.</p>
                        <div className="Prizes">
                            <Icon className="TrophyIcon" size={this.state.trophyIconSize} icon={trophy} />
                            <span>???</span>
                        </div>
                    </div>                
                </div>
            </div>
        );
    }

}