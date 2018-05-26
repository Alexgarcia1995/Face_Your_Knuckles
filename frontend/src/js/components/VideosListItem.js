import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import axios from 'axios';
import { Link } from "react-router-dom";

class VideosListItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      videoId:props.id,
      title:"",
      description:"",
      imagesrc:""
    }
    this.componentDidMount=this.componentDidMount.bind(this);
  }

  componentDidMount(){
    let that=this;
    axios.get("https://www.googleapis.com/youtube/v3/videos?id=" + this.state.videoId + "&key="+ 'AIzaSyCYlDfpI5v3w33npOf5vgBn1CHM4-gGg3w' + "&part=snippet").then(function(response){
      let datavideo=response.data.items[0].snippet
          that.setState({
            title: datavideo.title,
            description:datavideo.description,
            imagesrc:datavideo.thumbnails.default.url
           });
    }).catch( function(e) {
        console.log(e);
    })
  }

  render() {
    const link="/video/"+this.state.videoId;
    return( 
      <article className="post-container">
      <div className="post-thumb"><img src={this.state.imagesrc}></img></div>
      <div className="post-content">
      <Link to={link}>{this.state.title}</Link>
      <p>{this.state.description.split('\n')[0]}</p>
      <Link to={link}>Read More</Link>
      </div>
      </article>
    )
  }

}
export default VideosListItem
