import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import cookie from 'react-cookies';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BlogEntry from'./BlogEntry';

class BlogPage extends Component {
    constructor() {
      super();
      this.state = {
          blogs:[],
      };
      this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount(){
        let userData=cookie.load('userData');
        if(userData){
            this.setState({
                user:userData
              })
        }
        axios.get('http://localhost:8000/api/blogs').then((res)=>{
            this.setState({
                blogs:res.data
            });
        }).catch((err)=>{
            console.log(err);
        })
    }

    
    render() { 
        const Newentrybutton=()=>{
            if(this.state.user){
                return(
                    <div> 
                        <button><Link to="/newentry">New entry</Link></button> 
                    </div>
                )
            }
            else{
                return(
                    <div> </div>
                )
            }
        }

        const Entries=this.state.blogs.map((entry)=>{
            return <BlogEntry key={entry.id} id={entry.id} title={entry.title} description={entry.description} />
          });
        return (
        <div className="video-player">
        <h1>BlogPage</h1>
        <p>Pagina Del Blog</p>
        <Newentrybutton />
        {Entries}
        </div>
        );
        }
    }

export default BlogPage