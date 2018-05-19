import React, {Component} from 'react'
import icon from '../Resources/images/icon.png';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <span className="icon"><img src={icon} height="100px" align="center"/>
                <img className="footerImg"src="https://avatars1.githubusercontent.com/u/32690780?s=400&u=8e9be09bdc34ee0bfad2454874317c153782954e&v=4" height="100px" align="middle"/>
                 <span class="footerLine"> Designed And Develovped By <a href="https://www.github.com/ganeshhyc">Ganesh Kumar</a></span>
                </span>
            </div>
        );
    }

}
