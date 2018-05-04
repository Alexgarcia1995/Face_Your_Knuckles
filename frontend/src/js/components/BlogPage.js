import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class BlogPage extends Component {
    constructor() {
      super();
      this.state = {
      };
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
    }
    
    render() { 
        return (
        <div className="video-player">
        <h1>BlogPage</h1>
        <p>Pagina Del Blog</p>
        </div>
        );
        }
    }

export default BlogPage