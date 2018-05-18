import React, { Component } from 'react'
import axios from 'axios';

import Artist from './Artist';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt:'',
            artist: []
        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    txtF(event) {
      // console.log(event);
        this.setState({
            txt : event.target.value
        })
        axios.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s="+event.target.value)
        .then((resp,req)=>{
          console.log(resp.data.artists);
            this.setState({
            artist: resp.data.artists
            // artist: []
            })


        })
        .catch(console.error)
        console.log(this.state.artist);
    }

    render() {
        return (
        <div id="search">
            <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} align="middle"/>
            <table border="0" align="right"><tbody><tr>
                <td><img class="searchImg" height="90" src={this.state.artist?this.state.artist[0] !== undefined ? this.state.artist[0].strArtistThumb:"":""} align="middle"/></td>
                <td><img class="searchImg" height="90" src={this.state.artist?this.state.artist[1] !== undefined ? this.state.artist[1].strArtistThumb:"":""} align="middle"/></td>
                <td><img class="searchImg" height="90" src={this.state.artist?this.state.artist[2] !== undefined ? this.state.artist[2].strArtistThumb:"":""} align="middle"/></td>
            </tr></tbody></table>
        </div>
        );
    }
}
