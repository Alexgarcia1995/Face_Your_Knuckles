import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialFormLogin from "./SocialFormLogin.js";
import $ from 'jquery';

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
        $.ajax({     
            url:"http://localhost:8000/api/register",
            data:[name,email,password],
            success: function(data){
                console.log(data);
             },
             error: function(jqXHR, textStatus, errorThrown) {
               alert (textStatus, + ' | ' + errorThrown);
             }
            })
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