import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
class Profile extends Component {
    constructor() {
      super();
      this.state = {
        username:"",
        email:"",
      };
      this.componentWillMount=this.componentWillMount.bind(this);
    }
    componentWillMount(){
        let userData=cookie.load('userData');
        this.setState({
            username:userData.name,
            email:userData.email
        })
    }
    render() { 
        return (
        <div className="video-player">
        <h1>{this.state.username}</h1>
        <h2>{this.state.email}</h2>
        <Link id="modify" to='/modifyuser/'>Modificar Usuario</Link>
        </div>
        );
        }
    }

export default Profile