import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialFormLogin from "./SocialFormLogin.js";
import axios from 'axios';

class Register extends Component {
    constructor() {
      super();
      this.state = {
      }
      this.submitForm=this.submitForm.bind(this);
    }  

    submitForm(event){
        event.preventDefault();
        let name=event.target[0].value;
        let email=event.target[1].value;
        let password=event.target[2].value;

        axios.post("http://54.37.8.167:8000/api/register",{
            name,
            email,
            password,
          })
          .then(response=> {
            console.log(response);
            window.location.replace('/');
          })
          .catch(error=> {
              console.log(error);
          });
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
            <button type="submit">Register</button>
        </form>
        </div>
        );
        }
    }

export default Register