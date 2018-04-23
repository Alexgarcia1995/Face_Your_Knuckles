import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialFormLogin from "./SocialFormLogin.js";

class Login extends Component {
    constructor() {
      super();
      this.state = {
      };
    }  

    render() { 
        return (
        <div className="login-form">
            <SocialFormLogin />
        </div>
        );
        }
    }

export default Login