import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import $ from 'jquery';
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
    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/videos?id=" + this.state.videoId + "&key="+ 'AIzaSyCYlDfpI5v3w33npOf5vgBn1CHM4-gGg3w' + "&part=snippet", 
      dataType: "jsonp",
      success: function(data){
          let datavideo=data.items[0].snippet
          console.log(datavideo)
          that.setState({
            title: datavideo.title,
            description:datavideo.description,
            imagesrc:datavideo.thumbnails.default.url
           });
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert (textStatus, + ' | ' + errorThrown);
      }
  });
  }

  render() {
    const link="/video/"+this.state.videoId;
    return( 
      <article className="post-container">
      <div class="post-thumb"><img src={this.state.imagesrc}></img></div>
      <div class="post-content">
      <Link to={link}>{this.state.title}</Link>
      <p>{this.state.description.split('\n')[0]}</p>
      <Link to={link}>Read More</Link>
      </div>
      </article>
    )
  }

}
export default VideosListItem
