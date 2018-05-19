import React, { Component } from 'react';
import BodyContent from './BodyContent';
import SearchResultHead from './SearchResultHead';
import ArtistdDetailHead from './ArtistDetailHead';
import ArtistAlbumBody from './ArtistAlbumBody';
import SongList from './SongList';
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
        this.setState({
            txt : event.target.value
        })
        axios.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s="+event.target.value)
        .then((resp,req)=>{
            this.setState({
            artist: resp.data.artists
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
      document.getElementById("myNav").style.display = "block";
    }
    closeNav() {
    document.getElementById("myNav").style.display = "none";
    }

    generateArtistHead = (album,isDetail=true) => {
      return (

        <ArtistdDetailHead
        artistThumb={album.strArtistThumb}
        idArtist={isDetail?"":album.idArtist}
        artist={album.strArtist}
        onClick={isDetail?()=>{}:(e)=>this.upperBody(e)}
        text={isDetail?"Detail":"View Album"}
        />
      );
    }

    generateArtistAlbumBody = (album) => {
      return (
        <ArtistAlbumBody
        albumThumb={album.strAlbumThumb}
        album={album.strAlbum}
        onClick={(e)=>this.openNav(e)}
        idAlbum={album.idAlbum}
        />
      );
    }


    render() {
        return (
          <div>
            <div id="search">
            <input placeholder="Search" className = 'searchField' type="text" value={this.state.txt} onChange={(e) => this.txtF(e)} align="middle"/>
            <button className="btn" onClick={this.clicked}>Search</button>
            <button className="btn1" onClick={this.clear}>Clear</button>
            <SearchResultHead
            imageUrl={[this.state.artist?this.state.artist[0] !== undefined ? this.state.artist[0].strArtistThumb:"":""
            ,this.state.artist?this.state.artist[1] !== undefined ? this.state.artist[1].strArtistThumb:"":""
            ]}
            />
            </div>
            <div id="upperBody">
              { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((album)=>this.generateArtistHead(album)) : "" : "" }
            {this.state.album.album != undefined ? this.state.album.album.map((album)=>this.generateArtistAlbumBody(album))
              : "" }
            </div>

            <div id="searched">
            { this.state.artist?this.state.artist[0] !== undefined ? this.state.artist.map((ArtistData)=>this.generateArtistHead(ArtistData,false)) : "":"" }
            </div>
            <SongList
              onClick={this.closeNav}
              tracks = {this.state.track.track}
              />
          </div>
        );
    }
}
