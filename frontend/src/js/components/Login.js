import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import SocialFormLogin from "./SocialFormLogin.js";

class Login extends Component {
    constructor() {
      super();
      this.state = {
    }
    this.submitForm=this.submitForm.bind(this);
  }  

  submitForm(event){
      event.preventDefault();
      console.log(event.target);
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