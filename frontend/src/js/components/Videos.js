import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import VideosListItem from "./VideosListItem";

class Videos extends Component {
  constructor() {
    super();
    this.state={
      videos:[],
      categoria:window.location.pathname.split("/")[2]
    }
    this.componentWillMount=this.componentWillMount.bind(this);
  }
  
  componentWillMount(){
    YTSearch({
      key: 'AIzaSyCYlDfpI5v3w33npOf5vgBn1CHM4-gGg3w', 
      term: this.state.categoria+" training",
      maxResults: '10'}, (videos) => {
        this.setState({
          videos: videos,
         });
      });
  }

  render() {
    const VideosList=this.state.videos.map((video)=>{
      return <VideosListItem id={video.id.videoId} />
    })      
    return (
    <div>
      <ul>
      {VideosList}
      </ul>
    </div>
    )
  }
}

export default Videos
