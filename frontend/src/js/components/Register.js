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

        axios.post("http://localhost:8000/api/register",{
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
            <input type="text" id="username" required/><br/>
            <label htmlFor="email">Email: </label><br/>
            <input type="email" id="email" required/><br/>
            <label htmlFor="password">Password: </label><br/>
            <input type="password" id="password" required minLength='9'/><br/>
            <button type="submit">Register</button>
        </form>
        </div>
        );
        }
    }

export default Register