import React, { Component } from 'react';

export default class ArtistDetailHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className = 'dtable'>
            <table>
            <tr>
                <th>
                <img src={this.props.artistThumb} height='100px'/>
                </th>
                <th>
                <table className='innerTable'>
                    <tr>
                    <th>{this.props.artist}</th>
                    </tr>
                    <tr>
                    <td>
                        <button value={this.props.idArtist} className="link" onClick={this.props.onClick}>View Album</button>
                    </td>
                    </tr>
                </table>
                </th>
            </tr>
            </table>
        </span>
        );
    }
}