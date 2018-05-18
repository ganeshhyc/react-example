import React, { Component } from 'react';
import Artist from './Artist';
import music from '../Resources/images/music.png'

export default class ArtistSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id="bodyContent">

            <div className="padPicker"><br/></div>
            <div className="picker">
                <img className="icon" src={music} height="100px" align="middle"/>
                <table border="0" align="right" cellPadding="60"><tbody>
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
                </tr></tbody>
            </table>
            </div>
        </div>
        );
    }
}
