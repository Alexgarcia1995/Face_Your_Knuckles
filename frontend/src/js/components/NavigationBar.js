import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      title: "Titulo aplicacion",
      text: ""
    };
  }
  
  render() {
    return (
    <div className="dropdown">
    <div className="dropdown-noticias"> 
    <span>Noticias</span>
    <div className="dropdown-content">
        <Link to="/noticias/#boxeo">Boxeo</Link>
        <Link to="/noticias/#karate">Karate</Link>
        <Link to="/noticias/#kick-boxing">Kick-boxing</Link>
    </div>
    </div>
    <div className="dropdown-videos"> 
    <span>Videos</span>
        <div className="dropdown-videos-content">
        <Link to="/videos/#boxeo">Boxeo</Link>
        <Link to="/videos/#karate">Karate</Link>
        <Link to="/videos/#kick-boxing">Kick-boxing</Link>
        </div>
    </div>
    <button className="dropdown-blog"> 
    <span>Blog</span>
    </button>
    </div> 
    );
  }
}
export default NavigationBar;