import React, { Component } from 'react';
import "../assets/css/NavBar.css";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import HM from '../assets/images/HackMerced.png';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Menu className = "menu">
                    <img src={HM} alt="HackMerced" className="HackMerced" />
                    <p>This is it, Good Luck!</p>
                    <p>Wi-Fi: UCM-Guest</p>
                    <Link className = "menu-item" to = {"/"}>Schedule</Link>
                    {/* <Link className = "menu-item" to = "/Map">Map</Link> */}
                    <Link className = "menu-item" to = {"/Prizes"}>Prizes</Link>
                    {/*<Link className = "menu-item" to = "/Hardware">Hardware</Link>
                    <Link className = "menu-item" to = "/Submission">Submission</Link>*/}
                    <a href='https://join.slack.com/t/hackmerced2019/shared_invite/enQtNTY1NjQ1NjU5OTczLWFlOTJlNDYzZDQyYTdkMmFkZmUzOTgwNDAwNjUxY2RmNzlhOGYwM2Q2NDc3ZmEwMzhjNmNiZWMzNzNjMGYxYTE' target="_blank" rel="noreferrer noopener">Slack</a>
                </Menu>              
            </React.Fragment>
          );
    }
}
 
export default NavBar;