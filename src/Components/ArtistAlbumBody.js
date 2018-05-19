import React, { Component } from 'react';

export default class ArtistAlbumBody extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="stable">
            <table>
                <tr>
                    <th>
                        <img className="roundT" src={this.props.albumThumb} height='50px'/>
                    </th>
                    <th>
                    <table className='innerTable'>
                        <tr>
                            <th>{this.props.album}</th>
                        </tr>
                        <tr>
                            <td>
                                <button value={this.props.idAlbum} className="link" onClick={this.props.onClick}>View Playlist</button>
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