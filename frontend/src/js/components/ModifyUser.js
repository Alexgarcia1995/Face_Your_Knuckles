import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialFormLogin from "./SocialFormLogin.js";
import axios from 'axios';
import cookie from 'react-cookies';

class ModifyUser extends Component {
    constructor() {
      super();
      this.state = {
          id:cookie.load('userData').id,
          username:cookie.load('userData').name,
          email:cookie.load('userData').email
      }
      this.submitForm=this.submitForm.bind(this);
    }  

    submitForm(event){
        event.preventDefault();
        let name=event.target[0].value;
        let email=event.target[1].value;
        let password=event.target[2].value;
        let id=this.state.id;

        axios.post("http://localhost:8000/api/update",{
            id,
            name,
            email,
            password,
          })
          .then(response=> {
            cookie.save('userData',response.data,{ path: '/' });
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
            <input type="text" id="username" defaultValue={this.state.username} required/><br/>
            <label htmlFor="email">Email: </label><br/>
            <input type="email" id="email" defaultValue={this.state.email} required/><br/>
            <label htmlFor="password">Password: </label><br/>
            <input type="password" id="password" required minLength='9'/><br/>
            <button type="submit">Modificar Usuario</button>
        </form>
        </div>
        );
        }
    }

export default ModifyUser