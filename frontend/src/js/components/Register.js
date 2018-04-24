import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialFormLogin from "./SocialFormLogin.js";

class Register extends Component {
    constructor() {
      super();
      this.state = {
      }
      this.submitForm=this.submitForm.bind(this);
    }  

    submitForm(event){
        event.preventDefault();
        console.log(event);
    }

    render() { 
        return (
        <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={this.submitForm}>
            <label htmlFor="username">Username: </label><br/>
            <input type="text" id="username"/><br/>
            <label htmlFor="email">Email: </label><br/>
            <input type="email" id="email"/><br/>
            <label htmlFor="password">Password: </label><br/>
            <input type="password" id="password" /><br/>
            <button type="submit">Login</button>
        </form>
        </div>
        );
        }
    }

export default Register