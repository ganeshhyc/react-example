import React, { Component } from 'react'
import axios from 'axios';


export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt:'',
            artist: []
          }
          this.txtF=this.txtF.bind(this);
          this.clicked=this.clicked.bind(this);
          this.clear=this.clear.bind(this);
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
    clicked(){
        document.getElementById("searched").innerHTML =
                                                      this.state.artist.map((ArtistData)=>
                                                        {return (
                                                                  "<span class = 'dtable'><table><tr><th><img src='"+ArtistData.strArtistThumb+
                                                                  "' height='100px'/></th><th><table class='innerTable'><tr><th>"+ArtistData.strArtist+
                                                                  "</th</tr><tr><td><a href='#'>View Album</a></td></tr></table></th></tr></table></span>"
                                                                )
                                                        })
    }
    clear(){
      this.setState({
          txt : '',
          artist : []
      })

      document.getElementById("searched").innerHTML = ''
    }

    render() {
        return (
          <div>
            <div id="search">
                <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} align="middle"/>
                <button class="btn" onClick={this.clicked}>Search</button>
                <button class="btn1" onClick={this.clear}>Clear</button>
                <table border="0" align="right"><tbody><tr>
                    <td>
                      <a  href="#">
                        <img class="searchImg" height="75" src={this.state.artist?this.state.artist[0] !== undefined ? this.state.artist[0].strArtistThumb:"":""} align="middle"/></a></td>
                    <td>
                      <a  href="#">
                        <img class="searchImg" height="75" src={this.state.artist?this.state.artist[1] !== undefined ? this.state.artist[1].strArtistThumb:"":""} align="middle"/></a></td>
                    <td>
                      <a  href="#">
                        <img class="searchImg" height="75" src={this.state.artist?this.state.artist[2] !== undefined ? this.state.artist[2].strArtistThumb:"":""} align="middle"/></a></td>
                </tr></tbody></table>
            </div>

            <div id="searched"></div>
          </div>
        );
    }
}
