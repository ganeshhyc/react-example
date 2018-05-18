import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt:'',
            artist:[]
        }
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    txtF(event) {
        this.setState({
            txt : event.target.value
        })
        axios.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s="+event.target.value)
        .then((resp,req)=>{
            this.setState({
            artist: resp.data.artists
            })
            console.log(this.state.artist)
        })
        .catch(console.error)
    }

    render() {
        return (
        <div id="search">
            <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} />
            {this.state.txt}

        </div>
        );
    }
}
