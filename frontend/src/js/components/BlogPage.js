import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class BlogPage extends Component {
    constructor() {
      super();
      this.state = {
          blogs:[],
      };
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let userData=cookie.load('userData');
        if(userData){
            this.setState({
                user:userData
              })
        }
    }

    
    render() { 
        const Newentrybutton=()=>{
            if(this.state.user){
                return(
                    <div> 
                        <button><Link to="/newentry">New entry</Link></button> 
                    </div>
                )
            }
            else{
                return(
                    <div> </div>
                )
            }
        }
        return (
        <div className="video-player">
        <h1>BlogPage</h1>
        <p>Pagina Del Blog</p>
        <Newentrybutton />
        </div>
        );
        }
    }

export default BlogPage