import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialButton from './SocialButton.js';
import cookie from 'react-cookies';
import { Redirect } from "react-router-dom";

class SocialFormLogin extends Component {
    constructor() {
      super();
      this.state = {
      };
      this.handleSocialLogin=this.handleSocialLogin.bind(this);
      this.handleSocialLoginFailure=this.handleSocialLoginFailure.bind(this);
    }  

    handleSocialLogin = (user) => {
        console.log(user._profile);
        cookie.save('userData',user._profile,{ path: '/' })
    }
       
    handleSocialLoginFailure = (err) => {
        console.error(err);
    }
    render() { 
        return (
    <div>
        <SocialButton
            provider='facebook'
            appId='354968214973716'
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
        >
        Login with Facebook
        </SocialButton>
        <SocialButton
            provider='google'
            appId='131438642316-qri8411di14umtj0odvs45me655no7h6.apps.googleusercontent.com'
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}>
        Login with Google
        </SocialButton>
    </div>
        );
        }
    }

export default SocialFormLogin