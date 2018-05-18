import React, {Component} from 'react'
import '../Resources/style.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <span className="icon"><img src="images/icon.png" height="70px" align="middle"/></span>
                <span className="songMap">Song Map</span>
                <span className="myMusic">My Music</span>
                <span className="more">More</span>
                <span className="login">Login</span>
                <span className="signup">Signup</span>
            </div>
        );
    }

}