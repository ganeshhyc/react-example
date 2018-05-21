import React, { Component } from 'react';

export default class SongList extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        // console.log(this.state.track);
        return (
            <div id="myNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onClick={this.props.onClick}>&times;</a>
            <div className="overlay-content">
                <span className = 'dtable'>
                  <table className='innerTable'>
                    <tr><th>&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;</th>
                    </tr>
                    {
                    this.props !== null
                    ?
                        typeof(this.props.tracks) !== Array
                        ?
                            this.props.tracks !== undefined
                            ?
                                this.props.tracks.map((dv)=>

                                <tr>
                                    <th>&nbsp;&nbsp;{dv.intTrackNumber}</th>
                                        <td>{dv.strTrack}</td>
                                        <td>{parseInt(+(dv.intDuration)/60000)}:{(dv.intDuration)%60}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                </tr>
                                )
                            : ""
                        : ""
                    :""}
            </table>
        </span>
        </div>
    </div>
        );
    }
}
