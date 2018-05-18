import React, { Component } from 'react';
import Artist from './Artist';
import styles from '../Resources/style.css';

export default class ArtistSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id="bodyContent">
            <div className="picker">
                <span className="icon"><img src="images/music.png" height="100px" align="middle"/></span>
                <table border="0" align="right" cellpadding="20">
                <tr>
                <td>
                    <Artist imageUrl="http://images6.fanpop.com/image/photos/37000000/JT-is-20-20-justin-timberlake-37001462-475-475.jpg"/>
                </td>
                <td>
                    <Artist imageUrl="http://images.gibson.com/Lifestyle/English/aaFeaturesImages2010/maroon-5_call-and-response.jpg"/>
                </td>
                <td>
                    <Artist imageUrl="https://c.saavncdn.com/artists/Coldplay.jpg"/>
                </td>
                <td>
                    <Artist imageUrl="http://www.heylo.ir/wp-content/uploads/2016/11/adele-cooperation-vanity-fair-magazine-500.500.jpg"/>
                </td>
                <td>
                    <Artist imageUrl="http://wilesmag.com/wp-content/uploads/2014/07/Ariana-Grande.jpg"/>
                </td>
                </tr>
            </table>
            </div>
        </div>
        );
    }
}