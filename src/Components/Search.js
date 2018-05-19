import React, { Component } from 'react';
import BodyContent from './BodyContent';
import axios from 'axios';

var id=''
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt :'' ,
            artist : [] ,
            album : [],
            id : ''
          }
          this.txtF=this.txtF.bind(this);
          this.clicked=this.clicked.bind(this);
          this.clear=this.clear.bind(this);
          this.upperBody=this.upperBody.bind(this);
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
            this.setState({
            artist: resp.data.artists
            // artist: []
            })


        })
        .catch(console.error)
    }
    clear(){
      this.setState({
          txt : '',
          artist : [],
          id : '',
          album : []
      })

      document.getElementById("searched").style.display="none"
      document.getElementById("upperBody").style.display="none"
    }
    clicked(){
        document.getElementById("searched").style.display="inline"
    }
    upperBody(event){
      this.setState({
        id : event.target.value
      })
      id=event.target.value
      axios.get("http://www.theaudiodb.com/api/v1/json/1/album.php?i="+id)
      .then((resp,req)=>{
          this.setState({
          album: resp.data
          })

      })
      .catch(console.error)
      document.getElementById("searched").style.display="none"
      document.getElementById("upperBody").style.display="inline"

    }


    render() {
        return (
          <div>
            <div id="search">
                <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} align="middle"/>
                <button className="btn" onClick={this.clicked}>Search</button>
                <button className="btn1" onClick={this.clear}>Clear</button>
                <table border="0" align="right"><tbody><tr>
                    <td>
                      <a  href="#">
                        <img className="searchImg" height="75" src={this.state.artist?this.state.artist[0] !== undefined ? this.state.artist[0].strArtistThumb:"":""} align="middle"/></a></td>
                    <td>
                      <a  href="#">
                        <img className="searchImg" height="75" src={this.state.artist?this.state.artist[1] !== undefined ? this.state.artist[1].strArtistThumb:"":""} align="middle"/></a></td>
                    </tr></tbody></table>
            </div>
            <div id="upperBody">
              { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((album)=>
                <span className="dtable">
                <table>
                  <tr>
                    <th>
                      <img src={album.strArtistThumb} height='100px'/>
                    </th>
                    <th>
                      <table className='innerTable'>
                        <tr>
                          <th>{album.strArtist}</th>
                        </tr>
                        <tr>
                          <td>
                            Details
                          </td>
                        </tr>
                      </table>
                    </th>
                  </tr>
                </table>

                </span>
              ) : "" : "" }
            {this.state.album.album != undefined ? this.state.album.album.map((album)=>
              <span className="stable">
              <table>
                <tr>
                  <th>
                    <img className="roundT" src={album.strAlbumThumb} height='50px'/>
                  </th>
                  <th>
                    <table className='innerTable'>
                      <tr>
                        <th>{album.strAlbum}</th>
                      </tr>
                      <tr>
                        <td>
                          Details
                        </td>
                      </tr>
                    </table>
                  </th>
                </tr>
              </table></span>
            )
               : "" }
            </div>
            <div id="searched">
            { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((ArtistData)=>
                <span className = 'dtable'>
                  <table>
                    <tr>
                      <th>
                        <img src={ArtistData.strArtistThumb} height='100px'/>
                      </th>
                      <th>
                        <table className='innerTable'>
                          <tr>
                            <th>{ArtistData.strArtist}</th>
                          </tr>
                          <tr>
                            <td>
                              <button value={ArtistData.idArtist} className="link" onClick={(e)=>this.upperBody(e)}>View Track</button>
                            </td>
                          </tr>
                        </table>
                      </th>
                    </tr>
                  </table>
                </span>) : "":"" }
            </div>
          </div>
        );
    }
}
