import React, {Component} from 'react'
import icon from '../Resources/images/icon.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
            
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand"><img src={icon} height="100px" align="middle"/></a>
                    <span className="signup">Signup</span>
                </nav>
                {/* <span className="icon"><img src={icon} height="100px" align="middle"/></span>
                <span className="songMap">Song Map</span>
                <span className="myMusic">My Music</span>
                <span className="more">More</span>
                <span className="login">Login</span>
                <span className="signup">Signup</span> */}
            </div>
        );
    }

}
