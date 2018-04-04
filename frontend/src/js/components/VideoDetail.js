import React, { Component } from "react";
import ReactDOM from "react-dom";
import YouTube from 'react-youtube';
import $ from 'jquery';


class VideoDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: window.location.pathname.split("/")[2],
      title:"",
      description:""
    };
    this.componentDidMount=this.componentDidMount.bind(this);
  }

  componentDidMount(){
    let that=this;
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/videos?id=" + this.state.id + "&key="+ 'AIzaSyCYlDfpI5v3w33npOf5vgBn1CHM4-gGg3w' + "&part=snippet", 
      dataType: "jsonp",
      success: function(data){
          let datavideo=data.items[0].snippet
          that.setState({
            title: datavideo.title,
            description:datavideo.description
           });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert (textStatus, + ' | ' + errorThrown);
      }
  });
}

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
        fs:1
      }
    };
 
    return (
    <div className="video-player">
    <h2>{this.state.title}</h2>
      <YouTube
        videoId={this.state.id}
        opts={opts}
      />
    <p>{this.state.description}</p>
    </div>
    );
    }
}

export default VideoDetail
