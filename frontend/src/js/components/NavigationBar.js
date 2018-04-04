import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      noticias:props.noticias,
      videos:props.videos
    }
  }
  
render() {
  const noticias = this.state.noticias.map((categoria)=>{
    let url="/noticias/"+categoria
    let label=categoria.charAt(0).toUpperCase() + categoria.slice(1);
    return (
    <Link key={categoria} to={url}>{label}</Link>
    )
  })

  const videos = this.state.videos.map((categoria)=>{
    let url="/videos/"+categoria
    let label=categoria.charAt(0).toUpperCase() + categoria.slice(1);
    return (
    <Link key={categoria} to={url}>{label}</Link>
    )
  })

  return (

<div className="topnav" id="myTopnav">
  <div className="dropdown-noticias"> 
  <span>Noticias</span>
  <div className="dropdown-content">
    {noticias}
  </div>
  </div>
  <div className="dropdown-videos"> 
  <span>Videos</span>
      <div className="dropdown-videos-content">
      {videos}
      </div>
  </div>
  <div className="blog"> 
  <Link to="/blog">Blog</Link>
  </div>

</div>
  );
}
}
export default NavigationBar;