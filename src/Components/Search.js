import React, { Component } from 'react';
import BodyContent from './BodyContent';
import SearchResultHead from './SearchResultHead';
import ArtistdDetailHead from './ArtistDetailHead';
import axios from 'axios';

var id='';var albumId=''
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            txt :'' ,
            artist : [] ,
            album : [],
            id : '',
            albumId:'',
            track : []
          }
          this.txtF=this.txtF.bind(this);
          this.clicked=this.clicked.bind(this);
          this.clear=this.clear.bind(this);
          this.upperBody=this.upperBody.bind(this);
          this.openNav=this.openNav.bind(this);
          this.closeNav=this.closeNav.bind(this);
    }
    componentWillMount(){
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
          album : [],
          albumId : '',
          track : []
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
    openNav(event) {
      this.setState({
        albumId : event.target.value
      })
      albumId = event.target.value
      axios.get("http://www.theaudiodb.com/api/v1/json/1/track.php?m="+albumId)
      .then((resp,req)=>{
          this.setState({
          track: resp.data
          })

      })
      .catch(console.error)
      console.log(this.state.track)
      document.getElementById("myNav").style.display = "block";
    }
    closeNav() {
    document.getElementById("myNav").style.display = "none";
    }

    generateArtistHead = (album,isDetail=true) => {
      return (
        
        <ArtistdDetailHead artistThumb={album.strArtistThumb} idArtist={isDetail?"":album.idArtist} artist={album.strArtist} onClick={isDetail?()=>{}:(e)=>this.upperBody(e)} text={isDetail?"Detail":"View Album"}/>
      );
    }

    render() {
        return (
          <div>
            <div id="search">
            <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} align="middle"/>
            <button className="btn" onClick={this.clicked}>Search</button>
            <button className="btn1" onClick={this.clear}>Clear</button>
            <SearchResultHead imageUrl={[this.state.artist?this.state.artist[0] !== undefined ? this.state.artist[0].strArtistThumb:"":""
            ,this.state.artist?this.state.artist[1] !== undefined ? this.state.artist[1].strArtistThumb:"":""
            ]}/>
            </div>
            <div id="upperBody">
              { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((album)=>this.generateArtistHead(album)) : "" : "" }
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
                          <button value={album.idAlbum} className="link" onClick={(e)=>this.openNav(e)}>View Playlist</button>
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
            { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((ArtistData)=>this.generateArtistHead(ArtistData,false)) : "":"" }
            </div>
            <div id="myNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
            <div className="overlay-content">
              <span className = 'dtable'>
                  <table className='innerTable'>
                { this.state.track.track!== undefined ? this.state.track.track.map((dv)=>

                  <tr>
                    <th>{dv.intTrackNumber}</th>
                    <td>{dv.strTrack}</td>
                    <td>{parseInt(+(dv.intDuration)/60000)}:{(dv.intDuration)%60}</td>
                  </tr>



                ):""}

          </table>
        </span>

            </div>
</div>

          </div>
        );
    }
}
