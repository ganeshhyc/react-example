import React, { Component } from 'react'
import axios from 'axios';
export default class BodyContent extends Component{
  constructor(props){
    super(props);
    this.state={
      artist1:[],
      artist2:[],
      artist3:[]
    }
  }
  componentWillMount(){
  axios.get("http://www.theaudiodb.com/api/v1/json/1/track-top10.php?s=justin bieber")
  .then((resp,req)=>{
    console.log(resp.data.track);
      this.setState({
      artist3: resp.data.track
      // artist: []
      })
    })
  .catch(console.error)
  axios.get("http://www.theaudiodb.com/api/v1/json/1/track-top10.php?s=justin timberlake")
  .then((resp,req)=>{
    console.log(resp.data.track);
      this.setState({
      artist2: resp.data.track
      // artist: []
      })
    })
  .catch(console.error)
  axios.get("http://www.theaudiodb.com/api/v1/json/1/track-top10.php?s=coldplay")
  .then((resp,req)=>{
    console.log(resp.data.track);
      this.setState({
      artist1: resp.data.track
      // artist: []
      })
    })
  .catch(console.error)
}
  componentWillUnmount(){

  }
  render(){
    return(
      <div>
        <div className="vScroll">
        <table border="0" cellSpacing="15"><tbody><tr>
        {this.state.artist1.map(data=>
          <td>
            <img src={data.strTrackThumb} height="200" align="middle"/>
          </td>
        )}</tr><tr>
        {this.state.artist1.map(data=>
          <td>
            {data.strTrack}
          </td>
        )}
        </tr>
        </tbody></table>
        </div>
        <div className="vScroll">
        <table border="0" cellSpacing="15"><tbody><tr>
        {this.state.artist2.map(data=>
          <td>
            <img src={data.strTrackThumb} height="200" align="middle"/>
          </td>
        )}</tr><tr>
        {this.state.artist2.map(data=>
          <td>
            {data.strTrack}
          </td>
        )}
        </tr>
        </tbody></table>
        </div>
        <div className="vScroll">
        <table border="0" cellSpacing="15"><tbody><tr>
        {this.state.artist3.map(data=>
          <td>
            <img src={data.strTrackThumb} height="200" align="middle"/>
          </td>
        )}</tr><tr>
        {this.state.artist3.map(data=>
          <td>
            {data.strTrack}
          </td>
        )}
        </tr>
        </tbody></table>
        </div>
      </div>
    )
  }
}
