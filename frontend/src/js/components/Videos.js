import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import $ from 'jquery';
import { Link } from "react-router-dom";
import VideosListItem from "./VideosListItem";

class Videos extends Component {
  constructor() {
    super();
    this.state={
      videos:[],
      categoria:window.location.hash.split("#")[1]
    }
    this.componentWillMount=this.componentWillMount.bind(this);
  }
  
  componentWillMount(){
    YTSearch({
      key: 'AIzaSyCYlDfpI5v3w33npOf5vgBn1CHM4-gGg3w', 
      term: this.state.categoria,
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
    <div>videos</div>
    <div>
      <ul>
      {VideosList}
      </ul>
    </div>
    </div>
    )
  }
}

export default Videos
