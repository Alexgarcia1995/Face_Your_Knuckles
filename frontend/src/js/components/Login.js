import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SocialFormLogin from "./SocialFormLogin.js";
import axios from 'axios';
import cookie from 'react-cookies';

class Login extends Component {
    constructor() {
      super();
      this.state = {
    }
    this.submitForm=this.submitForm.bind(this);
  }  

  submitForm(event){
      event.preventDefault();
      let email=event.target[0].value;
      let password=event.target[1].value;
      axios.post("http://54.37.8.167:8000/api/login",{
        email,
        password,
      })
      .then(response=> {
        console.log(response);
        cookie.save('userData',response.data.success,{ path: '/' });
        window.location.replace('/');
      })
      .catch(error=> {
          console.log(error);
      });
  }


    render() { 
        return (
        <div className="login-form">
        <div>
            <h2>Login</h2>
            <form onSubmit={this.submitForm}>
                <label htmlFor="email">Email: </label><br/>
                <input type="email" id="email"/><br/>
                <label htmlFor="password">Password: </label><br/>
                <input type="password" id="password" /><br/>
                <button type="submit">Login</button>
            </form>
           <p><Link to="/register">Register</Link> </p> 
        </div>
        <div>
            <p>Or use Social Login</p>
            <SocialFormLogin /> 
        </div>
            
        </div>
        );
        }
    }

export default Login