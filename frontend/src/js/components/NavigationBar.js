import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import cookie from 'react-cookies';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      noticias:props.noticias,
      videos:props.videos,
      login:false,
    }
  }

  showNavbarResponsive() {
    var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }

  componentWillMount(){
    if(cookie.load('userData')){
      this.setState({
        login:true
      })
    }
    else{
      this.setState({
        login:false
      })
    }
  }
  
  logout(event){
    event.preventDefault();
    cookie.remove('userData');
    window.location.replace('/');
  }

render() {
  const LoginButtons=()=>{
    if(this.state.login){
      return(
        <div className="buttonscontainer">
        <div className="logout"> 
        <a onClick={this.logout}>Logout</a>
        </div>
        <div className="login"> 
        <Link to="/profile">Profile</Link>
        </div>
        </div>
      )
    }
    else{
      return (
        <div className="login"> 
        <Link to="/login">Login</Link>
        </div>
        )
    }
  }

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
  <div className="hamburger">
  <a href="javascript:void(0);" className="icon" onClick={this.showNavbarResponsive}>&#9776;</a>
  </div>
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
  <Link to="/blogs">Blog</Link>
  </div>
  <LoginButtons />
</div>
  );
}
}
export default NavigationBar;