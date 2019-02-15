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
                    <Link className = "menu-item" to = "/Schedule">Schedule</Link>
                    <Link className = "menu-item" to = "/Tracks">Tracks</Link>
                </Menu>              
            </React.Fragment>
          );
    }
}
 
export default NavBar;