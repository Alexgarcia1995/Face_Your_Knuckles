import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import VideosListItem from "./VideosListItem";
import banner from '../../../media/images/banner.png';

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
      return <VideosListItem key={video.id.videoId} id={video.id.videoId} />
    })       
    return (
    <div>
      <picture className='banner'>
      <img src={banner} alt="Banner"/>
      </picture>
      {VideosList}
    </div>
    )
  }
}

export default Videos
