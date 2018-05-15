import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';

class BlogPage extends Component {
    constructor() {
      super();
      this.state = {
          userid:cookie.load('userData').id
      };
      this.submitForm=this.submitForm.bind(this);
    }

    submitForm(event){
        event.preventDefault();
        let title=event.target[0].value;
        let description=event.target[1].value;
        let category=event.target[2].value;
        let user_id=this.state.userid;
        axios.post("http://54.37.8.167:8000/api/newblog",{
          title,
          description,
          category,
          user_id
        })
        .then(response=> {
          window.location.replace('/blogs')
        })
        .catch(error=> {
            console.log(error);
        });
    }

    render() { 
        return (
        <div className="login-form">
            <div>
            <h2>New entry</h2>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="title">Titulo: </label><br/>
                    <input type="title" id="title"/><br/>
                    <label htmlFor="description">Description: </label><br/>
                    <textarea type="description" id="description" /><br/>
                    <select required> 
                        <option value="">Select an option...</option>
                        <option value="boxeo">Boxeo</option>
                        <option value="kick-boxing">Kick-Boxing</option>
                        <option value="karate">Karate</option>
                    </select><br/>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
        );
        }
    }

export default BlogPage