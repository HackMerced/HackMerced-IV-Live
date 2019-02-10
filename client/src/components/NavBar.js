import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <ul className = "menu">
                    <li className = "menuList"><Link className = "tempLink" to = "/Workshops">Workshops</Link> </li>
                    <li className = "menuList"><Link className = "tempLink" to = "/Prizes">Prizes</Link> </li>
                    <li className = "menuList"><Link className = "tempLink" to = "/ContactUs">Contact Us</Link> </li>
                </ul>              
            </React.Fragment>
          );
    }
}
 
export default NavBar;