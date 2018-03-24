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
      description:""
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
    const link="/video/"+this.state.videoId;
    return( 
      <li>
      <Link to={link}>{this.state.title}</Link>
      <p>{this.state.description}</p>
      </li>
    )
  }

}
export default VideosListItem
